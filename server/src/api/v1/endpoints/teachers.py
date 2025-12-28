"""
Teachers CRUD API Endpoints
"""
import structlog
from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload
from pydantic import BaseModel
from typing import Optional, List
from datetime import date

from src.db.session import AsyncSessionLocal
from src.db.models.teacher import Teacher
from src.db.models.admin import Admin
from src.api.v1.deps import require_permission

logger = structlog.get_logger()
router = APIRouter()

# Dependency to get DB session
async def get_db():
    async with AsyncSessionLocal() as session:
        yield session

# Pydantic schemas
class TeacherCreate(BaseModel):
    name: str
    subject: Optional[str] = None
    department: Optional[str] = None
    gender: Optional[str] = None
    dob: Optional[date] = None
    qualification: Optional[str] = None
    experience: Optional[str] = None
    designation: Optional[str] = None
    join_date: Optional[date] = None
    salary: Optional[str] = None
    phone: Optional[str] = None
    email: Optional[str] = None
    address: Optional[str] = None
    profile_image: Optional[str] = None

class TeacherUpdate(BaseModel):
    name: Optional[str] = None
    subject: Optional[str] = None
    department: Optional[str] = None
    gender: Optional[str] = None
    dob: Optional[date] = None
    qualification: Optional[str] = None
    experience: Optional[str] = None
    designation: Optional[str] = None
    join_date: Optional[date] = None
    salary: Optional[str] = None
    phone: Optional[str] = None
    email: Optional[str] = None
    address: Optional[str] = None
    profile_image: Optional[str] = None
    is_active: Optional[bool] = None

class TeacherResponse(BaseModel):
    id: int
    employee_id: str
    name: str
    subject: Optional[str]
    department: Optional[str]
    gender: Optional[str]
    dob: Optional[date]
    qualification: Optional[str]
    experience: Optional[str]
    designation: Optional[str]
    join_date: Optional[date]
    salary: Optional[str]
    phone: Optional[str]
    email: Optional[str]
    address: Optional[str]
    profile_image: Optional[str]
    is_active: bool
    assigned_class_names: List[str] = []
    
    class Config:
        from_attributes = True


def teacher_to_response(teacher: Teacher) -> dict:
    """Convert Teacher model to response dict with assigned classes"""
    return {
        "id": teacher.id,
        "employee_id": teacher.employee_id,
        "name": teacher.name,
        "subject": teacher.subject,
        "department": teacher.department,
        "gender": teacher.gender,
        "dob": teacher.dob,
        "qualification": teacher.qualification,
        "experience": teacher.experience,
        "designation": teacher.designation,
        "join_date": teacher.join_date,
        "salary": teacher.salary,
        "phone": teacher.phone,
        "email": teacher.email,
        "address": teacher.address,
        "profile_image": teacher.profile_image,
        "is_active": teacher.is_active,
        "assigned_class_names": [c.class_name for c in teacher.assigned_classes] if teacher.assigned_classes else []
    }


@router.get("/", response_model=List[TeacherResponse])
async def list_teachers(
    department: Optional[str] = Query(None, description="Filter by department"),
    is_active: Optional[bool] = Query(None, description="Filter by active status"),
    search: Optional[str] = Query(None, description="Search by name or employee_id"),
    db: AsyncSession = Depends(get_db),
    current_admin: Admin = Depends(require_permission("view_teachers"))
):
    """List all teachers with optional filters"""
    query = select(Teacher).options(selectinload(Teacher.assigned_classes))
    
    if department:
        query = query.filter(Teacher.department == department)
    if is_active is not None:
        query = query.filter(Teacher.is_active == is_active)
    if search:
        query = query.filter(
            (Teacher.name.ilike(f"%{search}%")) | 
            (Teacher.employee_id.ilike(f"%{search}%"))
        )
    
    query = query.order_by(Teacher.id)
    result = await db.execute(query)
    teachers = result.scalars().all()
    
    return [teacher_to_response(t) for t in teachers]


@router.get("/stats/summary")
async def get_teacher_stats(
    db: AsyncSession = Depends(get_db),
    current_admin: Admin = Depends(require_permission("view_teachers"))
):
    """Get teacher statistics"""
    result = await db.execute(select(Teacher))
    all_teachers = result.scalars().all()
    
    total = len(all_teachers)
    active = len([t for t in all_teachers if t.is_active])
    male = len([t for t in all_teachers if t.gender and t.gender.lower() == 'male'])
    female = len([t for t in all_teachers if t.gender and t.gender.lower() == 'female'])
    
    return {
        "total": total,
        "active": active,
        "inactive": total - active,
        "male": male,
        "female": female
    }


@router.get("/{teacher_id}", response_model=TeacherResponse)
async def get_teacher(
    teacher_id: int,
    db: AsyncSession = Depends(get_db),
    current_admin: Admin = Depends(require_permission("view_teachers"))
):
    """Get a single teacher by ID"""
    query = select(Teacher).options(selectinload(Teacher.assigned_classes)).filter(Teacher.id == teacher_id)
    result = await db.execute(query)
    teacher = result.scalars().first()
    
    if not teacher:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Teacher not found"
        )
    
    return teacher_to_response(teacher)


@router.post("/", response_model=TeacherResponse, status_code=status.HTTP_201_CREATED)
async def create_teacher(
    teacher_data: TeacherCreate,
    db: AsyncSession = Depends(get_db),
    current_admin: Admin = Depends(require_permission("add_teachers"))
):
    """Create a new teacher"""
    # Generate employee_id
    result = await db.execute(select(Teacher).order_by(Teacher.id.desc()).limit(1))
    last_teacher = result.scalars().first()
    next_id = (last_teacher.id + 1) if last_teacher else 1
    employee_id = f"EMP-{next_id:04d}"
    
    new_teacher = Teacher(
        employee_id=employee_id,
        name=teacher_data.name,
        subject=teacher_data.subject,
        department=teacher_data.department,
        gender=teacher_data.gender,
        dob=teacher_data.dob,
        qualification=teacher_data.qualification,
        experience=teacher_data.experience,
        designation=teacher_data.designation,
        join_date=teacher_data.join_date,
        salary=teacher_data.salary,
        phone=teacher_data.phone,
        email=teacher_data.email,
        address=teacher_data.address,
        profile_image=teacher_data.profile_image,
        is_active=True
    )
    
    db.add(new_teacher)
    await db.commit()
    
    # Reload with relationship
    query = select(Teacher).options(selectinload(Teacher.assigned_classes)).filter(Teacher.id == new_teacher.id)
    result = await db.execute(query)
    new_teacher = result.scalars().first()
    
    logger.info("Teacher created", employee_id=employee_id, name=teacher_data.name)
    return teacher_to_response(new_teacher)


@router.put("/{teacher_id}", response_model=TeacherResponse)
async def update_teacher(
    teacher_id: int,
    teacher_data: TeacherUpdate,
    db: AsyncSession = Depends(get_db),
    current_admin: Admin = Depends(require_permission("edit_teachers"))
):
    """Update a teacher"""
    query = select(Teacher).options(selectinload(Teacher.assigned_classes)).filter(Teacher.id == teacher_id)
    result = await db.execute(query)
    teacher = result.scalars().first()
    
    if not teacher:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Teacher not found"
        )
    
    update_data = teacher_data.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(teacher, field, value)
    
    await db.commit()
    
    # Reload with relationship
    query = select(Teacher).options(selectinload(Teacher.assigned_classes)).filter(Teacher.id == teacher_id)
    result = await db.execute(query)
    teacher = result.scalars().first()
    
    logger.info("Teacher updated", employee_id=teacher.employee_id)
    return teacher_to_response(teacher)


@router.delete("/{teacher_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_teacher(
    teacher_id: int,
    db: AsyncSession = Depends(get_db),
    current_admin: Admin = Depends(require_permission("delete_teachers"))
):
    """Delete a teacher"""
    result = await db.execute(select(Teacher).filter(Teacher.id == teacher_id))
    teacher = result.scalars().first()
    
    if not teacher:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Teacher not found"
        )
    
    await db.delete(teacher)
    await db.commit()
    
    logger.info("Teacher deleted", employee_id=teacher.employee_id)
    return None

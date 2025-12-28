"""
Site Pages Content CRUD API Endpoints
"""
import structlog
import json
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy import func
from pydantic import BaseModel
from typing import Optional, List, Any
from datetime import datetime

from src.db.session import get_db
from src.db.models.site_page_content import SitePageContent
from src.db.models.admin import Admin
from src.api.v1.deps import require_permission

logger = structlog.get_logger()
router = APIRouter()


# Pydantic schemas
class PageContentCreate(BaseModel):
    page_slug: str
    section_key: str
    content: dict
    order_index: int = 0
    is_active: bool = True


class PageContentUpdate(BaseModel):
    content: Optional[dict] = None
    order_index: Optional[int] = None
    is_active: Optional[bool] = None


class PageContentResponse(BaseModel):
    id: int
    page_slug: str
    section_key: str
    content: dict
    order_index: int
    is_active: bool
    created_at: Optional[datetime]
    updated_at: Optional[datetime]
    
    class Config:
        from_attributes = True


class PageSummary(BaseModel):
    page_slug: str
    section_count: int
    

@router.get("/pages", response_model=List[PageSummary])
async def list_pages(
    db: AsyncSession = Depends(get_db),
    current_admin: Admin = Depends(require_permission("manage_site_content"))
):
    """List all unique pages with their section counts"""
    query = select(
        SitePageContent.page_slug,
        func.count(SitePageContent.id).label('section_count')
    ).group_by(SitePageContent.page_slug).order_by(SitePageContent.page_slug)
    
    result = await db.execute(query)
    rows = result.all()
    
    return [{"page_slug": row[0], "section_count": row[1]} for row in rows]


# ==================== PUBLIC ENDPOINTS (No Auth Required) ====================

@router.get("/public/{page_slug}", response_model=List[PageContentResponse])
async def get_public_page_content(
    page_slug: str,
    db: AsyncSession = Depends(get_db)
):
    """Get page content for public display (no auth required)"""
    query = select(SitePageContent).filter(
        SitePageContent.page_slug == page_slug,
        SitePageContent.is_active == True
    ).order_by(SitePageContent.order_index)
    
    result = await db.execute(query)
    sections = result.scalars().all()
    
    response = []
    for section in sections:
        content = section.content
        if isinstance(content, str):
            content = json.loads(content)
        response.append({
            "id": section.id,
            "page_slug": section.page_slug,
            "section_key": section.section_key,
            "content": content,
            "order_index": section.order_index,
            "is_active": section.is_active,
            "created_at": section.created_at,
            "updated_at": section.updated_at
        })
    
    return response


# ==================== ADMIN ENDPOINTS (Auth Required) ====================


@router.get("/pages/{page_slug}", response_model=List[PageContentResponse])
async def get_page_sections(
    page_slug: str,
    db: AsyncSession = Depends(get_db),
    current_admin: Admin = Depends(require_permission("manage_site_content"))
):
    """Get all sections for a specific page"""
    query = select(SitePageContent).filter(
        SitePageContent.page_slug == page_slug
    ).order_by(SitePageContent.order_index)
    
    result = await db.execute(query)
    sections = result.scalars().all()
    
    response = []
    for section in sections:
        content = section.content
        if isinstance(content, str):
            content = json.loads(content)
        response.append({
            "id": section.id,
            "page_slug": section.page_slug,
            "section_key": section.section_key,
            "content": content,
            "order_index": section.order_index,
            "is_active": section.is_active,
            "created_at": section.created_at,
            "updated_at": section.updated_at
        })
    
    return response


@router.get("/sections/{section_id}", response_model=PageContentResponse)
async def get_section(
    section_id: int,
    db: AsyncSession = Depends(get_db),
    current_admin: Admin = Depends(require_permission("manage_site_content"))
):
    """Get a single section by ID"""
    query = select(SitePageContent).filter(SitePageContent.id == section_id)
    result = await db.execute(query)
    section = result.scalars().first()
    
    if not section:
        raise HTTPException(status_code=404, detail="Section not found")
    
    content = section.content
    if isinstance(content, str):
        content = json.loads(content)
    
    return {
        "id": section.id,
        "page_slug": section.page_slug,
        "section_key": section.section_key,
        "content": content,
        "order_index": section.order_index,
        "is_active": section.is_active,
        "created_at": section.created_at,
        "updated_at": section.updated_at
    }


@router.post("/sections", response_model=PageContentResponse, status_code=201)
async def create_section(
    data: PageContentCreate,
    db: AsyncSession = Depends(get_db),
    current_admin: Admin = Depends(require_permission("manage_site_content"))
):
    """Create a new section"""
    new_section = SitePageContent(
        page_slug=data.page_slug,
        section_key=data.section_key,
        content=json.dumps(data.content),
        order_index=data.order_index,
        is_active=data.is_active
    )
    
    db.add(new_section)
    await db.commit()
    await db.refresh(new_section)
    
    logger.info("Section created", page=data.page_slug, section=data.section_key)
    
    return {
        "id": new_section.id,
        "page_slug": new_section.page_slug,
        "section_key": new_section.section_key,
        "content": data.content,
        "order_index": new_section.order_index,
        "is_active": new_section.is_active,
        "created_at": new_section.created_at,
        "updated_at": new_section.updated_at
    }


@router.put("/sections/{section_id}", response_model=PageContentResponse)
async def update_section(
    section_id: int,
    data: PageContentUpdate,
    db: AsyncSession = Depends(get_db),
    current_admin: Admin = Depends(require_permission("manage_site_content"))
):
    """Update a section"""
    result = await db.execute(select(SitePageContent).filter(SitePageContent.id == section_id))
    section = result.scalars().first()
    
    if not section:
        raise HTTPException(status_code=404, detail="Section not found")
    
    if data.content is not None:
        section.content = json.dumps(data.content)
    if data.order_index is not None:
        section.order_index = data.order_index
    if data.is_active is not None:
        section.is_active = data.is_active
    
    await db.commit()
    await db.refresh(section)
    
    content = section.content
    if isinstance(content, str):
        content = json.loads(content)
    
    logger.info("Section updated", section_id=section_id)
    
    return {
        "id": section.id,
        "page_slug": section.page_slug,
        "section_key": section.section_key,
        "content": content,
        "order_index": section.order_index,
        "is_active": section.is_active,
        "created_at": section.created_at,
        "updated_at": section.updated_at
    }


@router.delete("/sections/{section_id}", status_code=204)
async def delete_section(
    section_id: int,
    db: AsyncSession = Depends(get_db),
    current_admin: Admin = Depends(require_permission("manage_site_content"))
):
    """Delete a section"""
    result = await db.execute(select(SitePageContent).filter(SitePageContent.id == section_id))
    section = result.scalars().first()
    
    if not section:
        raise HTTPException(status_code=404, detail="Section not found")
    
    await db.delete(section)
    await db.commit()
    
    logger.info("Section deleted", section_id=section_id)
    return None

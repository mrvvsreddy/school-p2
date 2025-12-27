import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import {
    Search,
    Filter,
    MoreHorizontal,
    Plus,
    Download,
    Phone,
    Mail,
    Eye,
    Edit,
    Trash2,
    User,
    UserCheck,
    XCircle,
    Users,
    GraduationCap // Added for total students icon
} from 'lucide-react';
import StudentProfileModal from './StudentProfileModal';

const Students = () => {
    // Mock Data
    const students = [
        {
            id: "#ST-2023-001",
            rollNo: "ST-001",
            name: "Aarav Patel",
            class: "Class 10-A",
            dob: "2008-05-15",
            gender: "Male",
            bloodGroup: "B+",
            religion: "Hindu",
            admissionId: "ADM-2023-089",
            fatherName: "Suresh Patel",
            fatherOccupation: "Businessman",
            motherName: "Meera Patel",
            motherOccupation: "Homemaker",
            phone: "+91 98765 00001",
            email: "aarav.p@example.com",
            address: "12, MG Road, Dadar, Mumbai",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop"
        },
        {
            id: "#ST-2023-002",
            rollNo: "ST-002",
            name: "Diya Sharma",
            class: "Class 9-B",
            dob: "2009-08-22",
            gender: "Female",
            bloodGroup: "O+",
            religion: "Hindu",
            admissionId: "ADM-2023-090",
            fatherName: "Rohit Sharma",
            fatherOccupation: "Engineer",
            motherName: "Anjali Sharma",
            motherOccupation: "Doctor",
            phone: "+91 98765 00002",
            email: "diya.s@example.com",
            address: "45, Residency Road, Bangalore",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop"
        },
        {
            id: "#ST-2023-003",
            rollNo: "ST-003",
            name: "Ishaan Gupta",
            class: "Class 10-A",
            dob: "2008-02-10",
            gender: "Male",
            bloodGroup: "AB+",
            religion: "Hindu",
            admissionId: "ADM-2023-091",
            fatherName: "Amit Gupta",
            fatherOccupation: "Architect",
            motherName: "Sneha Gupta",
            motherOccupation: "Teacher",
            phone: "+91 98765 00003",
            email: "ishaan.g@example.com",
            address: "78, Park Street, Kolkata",
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
        },
        {
            id: "#ST-2023-004",
            rollNo: "ST-004",
            name: "Zara Khan",
            class: "Class 8-C",
            dob: "2010-11-05",
            gender: "Female",
            bloodGroup: "A-",
            religion: "Muslim",
            admissionId: "ADM-2023-092",
            fatherName: "Imran Khan",
            fatherOccupation: "Lawyer",
            motherName: "Sana Khan",
            motherOccupation: "Artist",
            phone: "+91 98765 00004",
            email: "zara.k@example.com",
            address: "101, Jubilee Hills, Hyderabad",
            img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=100&auto=format&fit=crop"
        },
        {
            id: "#ST-2023-005",
            rollNo: "ST-005",
            name: "Rohan Singh",
            class: "Class 10-A",
            dob: "2008-07-30",
            gender: "Male",
            bloodGroup: "O-",
            religion: "Sikh",
            admissionId: "ADM-2023-093",
            fatherName: "Vikram Singh",
            fatherOccupation: "Pilot",
            motherName: "Kiran Singh",
            motherOccupation: "Cabin Crew",
            phone: "+91 98765 00005",
            email: "rohan.s@example.com",
            address: "202, Sector 17, Chandigarh",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
        },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGrade, setSelectedGrade] = useState('All');
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Filter Logic
    const filteredStudents = students.filter(student => {
        const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.id.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesGrade = selectedGrade === 'All' || student.class.includes(selectedGrade);
        return matchesSearch && matchesGrade;
    });

    return (
        <div className="space-y-6">

            {/* Header Steps - Added to match AdmissionRequests design */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                        <GraduationCap size={24} />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-slate-800">450</p>
                        <p className="text-sm text-slate-500">Total Students</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                        <User size={24} />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-slate-800">240</p>
                        <p className="text-sm text-slate-500">Boys</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                        <UserCheck size={24} />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-slate-800">210</p>
                        <p className="text-sm text-slate-500">Girls</p>
                    </div>
                </div>
            </div>

            {/* Filters & Search - Updated to match AdmissionRequests design */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-gray-100 shadow-sm w-full sm:w-80">
                    <Search className="text-slate-400 ml-2" size={20} />
                    <input
                        type="text"
                        placeholder="Search students..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-transparent border-none focus:ring-0 text-sm w-full text-slate-600 placeholder:text-slate-400"
                    />
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                    <select
                        value={selectedGrade}
                        onChange={(e) => setSelectedGrade(e.target.value)}
                        className="bg-white border text-slate-600 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-[#C5A572] focus:border-[#C5A572] cursor-pointer shadow-sm hover:bg-gray-50 transition-colors"
                    >
                        <option value="All">All Grades</option>
                        <option value="Grade 9">Grade 9</option>
                        <option value="Grade 10">Grade 10</option>
                        <option value="Grade 11">Grade 11</option>
                        <option value="Grade 12">Grade 12</option>
                    </select>

                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-gray-50 shadow-sm transition-colors whitespace-nowrap">
                        <Download size={18} />
                        Export
                    </button>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-2 px-6 py-2.5 bg-[#C5A572] text-white rounded-xl text-sm font-bold hover:bg-[#b09060] transition-colors shadow-md hover:shadow-lg whitespace-nowrap"
                    >
                        <Plus size={20} />
                        Add Student
                    </button>
                </div>
            </div>

            {/* Table - Updated container style */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50/80">
                            <tr>
                                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">ID</th>
                                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Class</th>
                                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Parent</th>
                                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Contact</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredStudents.map((student) => (
                                <tr
                                    key={student.id}
                                    onClick={() => setSelectedStudent(student)}
                                    className="hover:bg-slate-50/60 transition-colors group cursor-pointer"
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <img src={student.img} alt={student.name} className="w-10 h-10 rounded-full object-cover shadow-sm" />
                                            <div>
                                                <h3 className="text-sm font-bold text-slate-800">{student.name}</h3>
                                                <div className="sm:hidden text-xs text-slate-400">{student.id}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-semibold text-orange-400">
                                        {student.id}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">{student.class}</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                                        {student.fatherName}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm text-slate-700 font-medium flex items-center gap-2">
                                                <Phone size={14} className="text-slate-400" /> {student.phone}
                                            </span>
                                            <span className="text-xs text-slate-400 flex items-center gap-2">
                                                <Mail size={14} className="text-slate-400" /> {student.email}
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-6 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-400">Showing 1-5 from 100 data</p>
                    <div className="flex items-center gap-2">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 text-xs hover:bg-[#C5A572] hover:text-white hover:border-[#C5A572] transition-colors">
                            &lt;
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#C5A572] text-white text-xs font-bold shadow-md">
                            1
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 text-xs hover:bg-slate-50 transition-colors">
                            2
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 text-xs hover:bg-slate-50 transition-colors">
                            3
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 text-xs hover:bg-[#C5A572] hover:text-white hover:border-[#C5A572] transition-colors">
                            &gt;
                        </button>
                    </div>
                </div>
            </div>

            {/* Add Student Modal - Refactored to Fixed Height & Layout Pattern */}
            {isModalOpen && createPortal(
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] backdrop-blur-sm p-4">
                    <div className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl animate-in fade-in zoom-in duration-200 flex flex-col max-h-[90vh]">
                        {/* Header */}
                        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between shrink-0">
                            <div>
                                <h2 className="text-xl font-serif font-bold text-slate-800">Add New Student</h2>
                                <p className="text-xs text-slate-500">Enter student details to create a new record</p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="p-2 -mr-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                            >
                                <XCircle size={24} />
                            </button>
                        </div>

                        {/* Content */}
                        <form className="p-6 overflow-y-auto flex-1 space-y-8">
                            {/* Section 1: Personal Details */}
                            <div>
                                <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2 uppercase tracking-wider">
                                    <div className="w-1 h-4 bg-[#C5A572] rounded-full"></div>
                                    Student Details
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">First Name *</label>
                                        <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#C5A572]/20 focus:border-[#C5A572] text-sm transition-all" placeholder="John" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Name *</label>
                                        <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#C5A572]/20 focus:border-[#C5A572] text-sm transition-all" placeholder="Doe" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Date of Birth *</label>
                                        <input type="date" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#C5A572]/20 focus:border-[#C5A572] text-sm text-slate-600 transition-all" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Gender *</label>
                                        <select className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#C5A572]/20 focus:border-[#C5A572] text-sm text-slate-600 transition-all cursor-pointer">
                                            <option value="">Select Gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Blood Group</label>
                                        <select className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#C5A572]/20 focus:border-[#C5A572] text-sm text-slate-600 transition-all cursor-pointer">
                                            <option value="">Select Group</option>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Religion</label>
                                        <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#C5A572]/20 focus:border-[#C5A572] text-sm transition-all" placeholder="e.g. Christianity" />
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Academic Details */}
                            <div>
                                <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2 uppercase tracking-wider">
                                    <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
                                    Academic Details
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Admission ID *</label>
                                        <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#C5A572]/20 focus:border-[#C5A572] text-sm transition-all" placeholder="#STD-1234" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Class *</label>
                                        <select className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#C5A572]/20 focus:border-[#C5A572] text-sm text-slate-600 transition-all cursor-pointer">
                                            <option value="">Select Class</option>
                                            <option value="Grade 9">Grade 9</option>
                                            <option value="Grade 10">Grade 10</option>
                                            <option value="Grade 11">Grade 11</option>
                                            <option value="Grade 12">Grade 12</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Section</label>
                                        <select className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#C5A572]/20 focus:border-[#C5A572] text-sm text-slate-600 transition-all cursor-pointer">
                                            <option value="">Select Section</option>
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Roll Number</label>
                                        <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#C5A572]/20 focus:border-[#C5A572] text-sm transition-all" placeholder="e.g. 21" />
                                    </div>
                                    <div className="space-y-1 md:col-span-2">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Student Photo</label>
                                        <div className="flex items-center gap-4">
                                            <div className="relative w-full">
                                                <input type="file" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all cursor-pointer" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 3: Parent & Address */}
                            <div>
                                <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2 uppercase tracking-wider">
                                    <div className="w-1 h-4 bg-green-500 rounded-full"></div>
                                    Parent Information
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Father's Name *</label>
                                        <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#C5A572]/20 focus:border-[#C5A572] text-sm transition-all" placeholder="e.g. Robert Doe" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Mother's Name</label>
                                        <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#C5A572]/20 focus:border-[#C5A572] text-sm transition-all" placeholder="e.g. Mary Doe" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email Address *</label>
                                        <input type="email" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#C5A572]/20 focus:border-[#C5A572] text-sm transition-all" placeholder="parent@example.com" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Phone Number *</label>
                                        <input type="tel" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#C5A572]/20 focus:border-[#C5A572] text-sm transition-all" placeholder="+1 234 567 890" />
                                    </div>
                                    <div className="col-span-1 md:col-span-2 space-y-1">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Address</label>
                                        <textarea className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#C5A572]/20 focus:border-[#C5A572] text-sm transition-all resize-none" rows="3" placeholder="Enter full residential address..."></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>

                        {/* Footer Actions */}
                        <div className="px-6 py-4 bg-gray-50 flex justify-end gap-3 rounded-b-2xl border-t border-gray-100 shrink-0">
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="px-6 py-2 rounded-lg text-sm font-bold text-slate-500 hover:bg-slate-200 hover:text-slate-700 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="button" // Should be submit if using form submission
                                className="px-6 py-2 rounded-lg text-sm font-bold text-white bg-[#C5A572] hover:bg-[#b09060] shadow-sm hover:shadow transition-all"
                            >
                                Save Student
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
            {/* View Student Profile Modal */}
            <StudentProfileModal
                student={selectedStudent}
                onClose={() => setSelectedStudent(null)}
            />

        </div>
    );
};

export default Students;

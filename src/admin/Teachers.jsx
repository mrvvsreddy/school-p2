import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import {
    Search,
    Filter,
    Plus,
    Download,
    Phone,
    Mail,
    Eye,
    Edit,
    Trash2,
    Users,
    User,
    UserCheck,
    XCircle,
    Briefcase
} from 'lucide-react';
import TeacherProfileModal from './TeacherProfileModal';

const Teachers = () => {
    // Mock Data
    const teachers = [
        {
            id: "#EMP-1001",
            employeeId: "EMP-1001",
            name: "Rajesh Kumar",
            subject: "History",
            department: "Social Studies",
            gender: "Male",
            dob: "1985-04-12",
            qualification: "M.A. History, B.Ed",
            experience: "12 Years",
            designation: "Senior Teacher",
            joinDate: "2015-06-01",
            phone: "+91 98765 11111",
            email: "rajesh.k@example.com",
            address: "15, Civil Lines, Delhi",
            salary: "₹65,000",
            assignedClass: "Class 10-A",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop"
        },

        {
            id: "#EMP-1002",
            employeeId: "EMP-1002",
            name: "Priya Singh",
            subject: "Mathematics",
            department: "Science & Math",
            gender: "Female",
            dob: "1988-02-28",
            qualification: "M.Sc Mathematics",
            experience: "8 Years",
            designation: "Teacher",
            joinDate: "2018-03-15",
            phone: "+91 98765 22222",
            email: "priya.s@example.com",
            address: "42, Koramangala, Bangalore",
            salary: "₹55,000",
            assignedClass: "Class 10-B",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop"
        },
        {
            id: "#EMP-1003",
            employeeId: "EMP-1003",
            name: "Anjali Verma",
            subject: "Biology",
            department: "Science",
            gender: "Female",
            dob: "1990-11-05",
            qualification: "M.Sc Biology, Ph.D",
            experience: "5 Years",
            designation: "Teacher",
            joinDate: "2020-01-10",
            phone: "+91 98765 33333",
            email: "anjali.v@example.com",
            address: "99, Adyar, Chennai",
            salary: "₹60,000",
            assignedClass: "Class 9-A",
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
        },
        {
            id: "#EMP-1004",
            employeeId: "EMP-1004",
            name: "Vikram Malhotra",
            subject: "English",
            department: "Languages",
            gender: "Male",
            dob: "1982-08-30",
            qualification: "M.A. English Lit",
            experience: "15 Years",
            designation: "HOD",
            joinDate: "2012-05-20",
            phone: "+91 98765 44444",
            email: "vikram.m@example.com",
            address: "101, Bandra West, Mumbai",
            salary: "₹85,000",
            assignedClass: "Class 9-B",
            img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop"
        },
        {
            id: "#EMP-1005",
            employeeId: "EMP-1005",
            name: "Sneha Reddy",
            subject: "Physics",
            department: "Science",
            gender: "Female",
            dob: "1993-12-15",
            qualification: "M.Sc Physics",
            experience: "3 Years",
            designation: "Junior Teacher",
            joinDate: "2022-08-01",
            phone: "+91 98765 55555",
            email: "sneha.r@example.com",
            address: "22, Jubilee Hills, Hyderabad",
            salary: "₹40,000",
            assignedClass: "Class 8-A",
            img: "https://images.unsplash.com/photo-1554151228-14d9def656ec?q=80&w=100&auto=format&fit=crop"
        },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSubject, setSelectedSubject] = useState('All');
    const [selectedTeacher, setSelectedTeacher] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Filter Logic
    const filteredTeachers = teachers.filter(teacher => {
        const matchesSearch = teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            teacher.employeeId.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSubject = selectedSubject === 'All' || teacher.subject.includes(selectedSubject);
        return matchesSearch && matchesSubject;
    });

    return (
        <div className="space-y-6">

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                        <Briefcase size={24} />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-slate-800">42</p>
                        <p className="text-sm text-slate-500">Total Teachers</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                        <User size={24} />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-slate-800">18</p>
                        <p className="text-sm text-slate-500">Male</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                        <UserCheck size={24} />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-slate-800">24</p>
                        <p className="text-sm text-slate-500">Female</p>
                    </div>
                </div>
            </div>

            {/* Filters & Search */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-gray-100 shadow-sm w-full sm:w-80">
                    <Search className="text-slate-400 ml-2" size={20} />
                    <input
                        type="text"
                        placeholder="Search teachers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-transparent border-none focus:ring-0 text-sm w-full text-slate-600 placeholder:text-slate-400"
                    />
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                    <select
                        value={selectedSubject}
                        onChange={(e) => setSelectedSubject(e.target.value)}
                        className="bg-white border text-slate-600 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-[#C5A572] focus:border-[#C5A572] cursor-pointer shadow-sm hover:bg-gray-50 transition-colors"
                    >
                        <option value="All">All Subjects</option>
                        <option value="Mathematics">Mathematics</option>
                        <option value="Science">Science</option>
                        <option value="English">English</option>
                        <option value="History">History</option>
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
                        Add Teacher
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50/80">
                            <tr>
                                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">ID</th>
                                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Subject</th>
                                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Department</th>
                                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Assigned Class</th>
                                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Contact</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredTeachers.map((teacher) => (
                                <tr
                                    key={teacher.id}
                                    onClick={() => setSelectedTeacher(teacher)}
                                    className="hover:bg-slate-50/60 transition-colors group cursor-pointer"
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <img src={teacher.img} alt={teacher.name} className="w-10 h-10 rounded-full object-cover shadow-sm" />
                                            <div>
                                                <h3 className="text-sm font-bold text-slate-800">{teacher.name}</h3>
                                                <div className="sm:hidden text-xs text-slate-400">{teacher.employeeId}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-semibold text-orange-400">
                                        {teacher.employeeId}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">{teacher.subject}</span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                                        {teacher.department}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{teacher.assignedClass}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm text-slate-700 font-medium flex items-center gap-2">
                                                <Phone size={14} className="text-slate-400" /> {teacher.phone}
                                            </span>
                                            <span className="text-xs text-slate-400 flex items-center gap-2">
                                                <Mail size={14} className="text-slate-400" /> {teacher.email}
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
                    <p className="text-xs text-slate-400">Showing 1-5 from {teachers.length} data</p>
                    <div className="flex items-center gap-2">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 text-xs hover:bg-[#2C3E50] hover:text-white hover:border-[#2C3E50] transition-colors">&lt;</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2C3E50] text-white text-xs font-bold shadow-md">1</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 text-xs hover:bg-slate-50 transition-colors">2</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 text-xs hover:bg-[#2C3E50] hover:text-white hover:border-[#2C3E50] transition-colors">&gt;</button>
                    </div>
                </div>

                {/* Add Teacher Modal */}
                {isModalOpen && createPortal(
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                        <div
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                            onClick={() => setIsModalOpen(false)}
                        />
                        <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-200">
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-100 shrink-0">
                                <div>
                                    <h2 className="text-xl font-bold text-slate-800">Add New Teacher</h2>
                                    <p className="text-sm text-slate-500 mt-1">Enter teacher details to create a new profile.</p>
                                </div>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-slate-100 hover:text-slate-600 transition-colors"
                                >
                                    <XCircle size={20} />
                                </button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
                                {/* Section 1: Personal Details */}
                                <div>
                                    <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2 uppercase tracking-wider">
                                        <div className="w-1 h-4 bg-orange-400 rounded-full"></div>
                                        Personal Details
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">First Name *</label>
                                            <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm transition-all" placeholder="John" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Name *</label>
                                            <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm transition-all" placeholder="Doe" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email Address *</label>
                                            <input type="email" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm transition-all" placeholder="teacher@example.com" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Phone Number *</label>
                                            <input type="tel" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm transition-all" placeholder="+1 234 567 890" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Date of Birth *</label>
                                            <input type="date" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm text-slate-600 transition-all" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Gender *</label>
                                            <select className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm text-slate-600 transition-all cursor-pointer">
                                                <option value="">Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 2: Academic & Professional */}
                                <div>
                                    <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2 uppercase tracking-wider">
                                        <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
                                        Academic & Professional
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Employee ID *</label>
                                            <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm transition-all" placeholder="#EMP-1234" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Qualification *</label>
                                            <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm transition-all" placeholder="e.g. M.Sc Mathematics" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Experience</label>
                                            <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm transition-all" placeholder="e.g. 5 Years" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Subject</label>
                                            <select className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm text-slate-600 transition-all cursor-pointer">
                                                <option value="">Select Subject</option>
                                                <option value="Math">Mathematics</option>
                                                <option value="Science">Science</option>
                                                <option value="English">English</option>
                                                <option value="History">History</option>
                                            </select>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Basic Salary</label>
                                            <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm transition-all" placeholder="e.g. ₹45,000" />
                                        </div>
                                        <div className="space-y-1.5 md:col-span-2">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Address</label>
                                            <textarea className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm transition-all resize-none" rows="2" placeholder="Enter full address..."></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="p-6 border-t border-gray-100 flex gap-3 justify-end bg-gray-50/50 rounded-b-2xl shrink-0">
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-6 py-2.5 rounded-xl border border-gray-200 text-slate-600 font-semibold hover:bg-white hover:border-gray-300 transition-all text-sm"
                                >
                                    Cancel
                                </button>
                                <button
                                    className="px-6 py-2.5 rounded-xl bg-[#2C3E50] text-white font-semibold hover:bg-[#1a252f] shadow-lg shadow-blue-900/10 hover:shadow-blue-900/20 transition-all text-sm"
                                >
                                    Save Teacher
                                </button>
                            </div>
                        </div>
                    </div>,
                    document.body
                )}

                <TeacherProfileModal
                    teacher={selectedTeacher}
                    onClose={() => setSelectedTeacher(null)}
                />
            </div>
        </div>
    );
};

export default Teachers;

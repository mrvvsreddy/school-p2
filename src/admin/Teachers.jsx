import React, { useState } from 'react';
import {
    Search,
    Filter,
    Plus,
    Download,
    Phone,
    Mail,
    Eye,
    Edit,
    Trash2
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

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-slate-800">All Teachers</h1>
                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-slate-600 text-sm font-semibold shadow-sm hover:bg-slate-50 transition-colors cursor-pointer">
                        <Download size={18} />
                        Export
                    </button>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-[#2C3E50] rounded-full text-white text-sm font-semibold shadow-lg hover:bg-[#1a252f] transition-colors cursor-pointer"
                    >
                        <Plus size={18} />
                        Add New Teacher
                    </button>
                </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-3 rounded-2xl shadow-sm">
                <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                        type="text"
                        placeholder="Search teacher..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 bg-[#F0F1F5] rounded-full text-xs font-medium text-slate-600 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <div className="relative flex-1 sm:flex-none">
                        <select
                            value={selectedSubject}
                            onChange={(e) => setSelectedSubject(e.target.value)}
                            className="appearance-none w-full sm:w-32 pl-4 pr-8 py-2 bg-[#F0F1F5] rounded-full text-xs font-semibold text-slate-600 focus:outline-none cursor-pointer"
                        >
                            <option value="All">All Subjects</option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="Science">Science</option>
                            <option value="English">English</option>
                            <option value="History">History</option>
                        </select>
                        <Filter className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Name</th>
                                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">ID</th>
                                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Subject</th>
                                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Department</th>
                                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Assigned Class</th>
                                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Contact</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredTeachers.map((teacher) => (
                                <tr
                                    key={teacher.id}
                                    onClick={() => setSelectedTeacher(teacher)}
                                    className="hover:bg-slate-50/50 transition-colors group cursor-pointer"
                                >
                                    <td className="py-3 px-4">
                                        <div className="flex items-center gap-3">
                                            <img src={teacher.img} alt={teacher.name} className="w-8 h-8 rounded-full object-cover" />
                                            <div>
                                                <h3 className="text-xs font-bold text-slate-800">{teacher.name}</h3>
                                                <div className="sm:hidden text-[10px] text-slate-400">{teacher.employeeId}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 text-xs font-semibold text-orange-400">
                                        {teacher.employeeId}
                                    </td>
                                    <td className="py-3 px-4">
                                        <span className="text-[10px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">{teacher.subject}</span>
                                    </td>
                                    <td className="py-3 px-4 text-xs text-slate-600">
                                        {teacher.department}
                                    </td>
                                    <td className="py-3 px-4">
                                        <span className="text-[10px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{teacher.assignedClass}</span>
                                    </td>
                                    <td className="py-3 px-4">
                                        <div className="flex gap-2">
                                            <button className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-500 transition-colors">
                                                <Phone size={12} />
                                            </button>
                                            <button className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-orange-50 hover:text-orange-500 transition-colors">
                                                <Mail size={12} />
                                            </button>
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
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm overflow-y-auto py-10">
                        <div className="bg-white rounded-3xl p-8 w-full max-w-4xl shadow-2xl transform transition-all scale-100 my-auto">
                            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-800">Add New Teacher</h2>
                                    <p className="text-slate-500 text-sm mt-1">Enter all the required details below to register a new teacher.</p>
                                </div>
                                <button onClick={() => setIsModalOpen(false)} className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors cursor-pointer">
                                    <Trash2 size={16} className="rotate-45" />
                                </button>
                            </div>

                            <form className="space-y-8">
                                {/* Section 1: Personal Details */}
                                <div>
                                    <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                                        <div className="w-1 h-6 bg-orange-400 rounded-full"></div>
                                        Personal Details
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="space-y-1">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">First Name *</label>
                                            <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm transition-all" placeholder="John" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Name *</label>
                                            <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm transition-all" placeholder="Doe" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email Address *</label>
                                            <input type="email" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm transition-all" placeholder="teacher@example.com" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Phone Number *</label>
                                            <input type="tel" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm transition-all" placeholder="+1 234 567 890" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Date of Birth *</label>
                                            <input type="date" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm text-slate-600 transition-all" />
                                        </div>
                                        <div className="space-y-1">
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
                                    <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                                        <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
                                        Academic & Professional
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="space-y-1">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Employee ID *</label>
                                            <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm transition-all" placeholder="#EMP-1234" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Qualification *</label>
                                            <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm transition-all" placeholder="e.g. M.Sc Mathematics" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Experience</label>
                                            <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm transition-all" placeholder="e.g. 5 Years" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Subject</label>
                                            <select className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm text-slate-600 transition-all cursor-pointer">
                                                <option value="">Select Subject</option>
                                                <option value="Math">Mathematics</option>
                                                <option value="Science">Science</option>
                                                <option value="English">English</option>
                                                <option value="History">History</option>
                                            </select>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Basic Salary</label>
                                            <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm transition-all" placeholder="e.g. ₹45,000" />
                                        </div>
                                        <div className="space-y-1 md:col-span-2">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Address</label>
                                            <textarea className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm transition-all resize-none" rows="1" placeholder="Enter full address..."></textarea>
                                        </div>
                                    </div>
                                </div>

                                {/* Form Actions */}
                                <div className="pt-6 border-t border-gray-100 flex gap-4 justify-end">
                                    <button type="button" onClick={() => setIsModalOpen(false)} className="px-8 py-3 rounded-xl border border-slate-200 text-slate-500 font-semibold hover:bg-slate-50 hover:text-slate-700 transition-colors cursor-pointer">
                                        Cancel
                                    </button>
                                    <button type="submit" className="px-8 py-3 rounded-xl bg-[#2C3E50] text-white font-semibold hover:bg-[#1a252f] shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30 transition-all cursor-pointer">
                                        Save Teacher
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
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

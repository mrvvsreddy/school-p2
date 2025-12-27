import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import {
    Search,
    Filter,
    Plus,
    Download,
    // Edit, // Removing action buttons so these might be unused, but I'll keep them for a sec just in case, or actually comment them out/remove to be clean.
    // Trash2,
    Users,
    BookOpen,
    XCircle,
    GraduationCap
} from 'lucide-react';

const Classes = () => {
    // Mock Data for Classes
    const [classes, setClasses] = useState([
        {
            id: 1,
            className: "Class 10-A",
            grade: "10",
            section: "A",
            classTeacher: "Rajesh Kumar",
            studentCount: 35,
            roomNumber: "101",
            capacity: 40,
            subjects: ["Math", "Physics", "Chemistry", "English"]
        },
        {
            id: 2,
            className: "Class 10-B",
            grade: "10",
            section: "B",
            classTeacher: "Priya Singh",
            studentCount: 32,
            roomNumber: "102",
            capacity: 40,
            subjects: ["Math", "Physics", "Chemistry", "English"]
        },
        {
            id: 3,
            className: "Class 9-A",
            grade: "9",
            section: "A",
            classTeacher: "Anjali Verma",
            studentCount: 38,
            roomNumber: "103",
            capacity: 40,
            subjects: ["Math", "Science", "Social", "English"]
        },
        {
            id: 4,
            className: "Class 9-B",
            grade: "9",
            section: "B",
            classTeacher: "Vikram Malhotra",
            studentCount: 34,
            roomNumber: "104",
            capacity: 40,
            subjects: ["Math", "Science", "Social", "English"]
        },
        {
            id: 5,
            className: "Class 8-A",
            grade: "8",
            section: "A",
            classTeacher: "Sneha Reddy",
            studentCount: 30,
            roomNumber: "105",
            capacity: 35,
            subjects: ["Math", "Science", "Social", "English"]
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGrade, setSelectedGrade] = useState('All');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Filter Logic
    const filteredClasses = classes.filter(cls => {
        const matchesSearch = cls.className.toLowerCase().includes(searchTerm.toLowerCase()) ||
            cls.classTeacher.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesGrade = selectedGrade === 'All' || cls.grade === selectedGrade;
        return matchesSearch && matchesGrade;
    });

    // Stats Logic
    const totalClasses = classes.length;
    const totalStudents = classes.reduce((acc, curr) => acc + curr.studentCount, 0);
    const avgClassSize = Math.round(totalStudents / totalClasses) || 0;

    return (
        <div className="space-y-6">

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                        <BookOpen size={24} />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-slate-800">{totalClasses}</p>
                        <p className="text-sm text-slate-500">Total Classes</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                        <Users size={24} />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-slate-800">{totalStudents}</p>
                        <p className="text-sm text-slate-500">Total Students</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                        <GraduationCap size={24} />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-slate-800">{avgClassSize}</p>
                        <p className="text-sm text-slate-500">Avg. Class Size</p>
                    </div>
                </div>
            </div>

            {/* Filters & Search */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-gray-100 shadow-sm w-full sm:w-80">
                    <Search className="text-slate-400 ml-2" size={20} />
                    <input
                        type="text"
                        placeholder="Search class..."
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
                        <option value="10">Grade 10</option>
                        <option value="9">Grade 9</option>
                        <option value="8">Grade 8</option>
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
                        Add Class
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50/80">
                            <tr>
                                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Class Name</th>
                                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Class Teacher</th>
                                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Students</th>
                                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Room No.</th>
                                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Capacity</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredClasses.map((cls) => (
                                <tr key={cls.id} className="hover:bg-slate-50/60 transition-colors group cursor-pointer">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 font-bold text-sm">
                                                {cls.grade}
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-bold text-slate-800">{cls.className}</h3>
                                                <div className="text-xs text-slate-400">Section {cls.section}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-slate-600">
                                        {cls.classTeacher}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 text-sm text-slate-600 font-semibold">
                                            <Users size={16} className="text-slate-400" />
                                            {cls.studentCount}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                                        {cls.roomNumber}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${cls.studentCount >= cls.capacity ? 'bg-red-50 text-red-500' : 'bg-emerald-50 text-emerald-500'
                                            }`}>
                                            {cls.studentCount}/{cls.capacity}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-6 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-400">Showing 1-5 from {classes.length} data</p>
                    <div className="flex items-center gap-2">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 text-xs hover:bg-[#2C3E50] hover:text-white hover:border-[#2C3E50] transition-colors">&lt;</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2C3E50] text-white text-xs font-bold shadow-md">1</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 text-xs hover:bg-slate-50 transition-colors">2</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 text-xs hover:bg-[#2C3E50] hover:text-white hover:border-[#2C3E50] transition-colors">&gt;</button>
                    </div>
                </div>

                {/* Add Class Modal */}
                {isModalOpen && createPortal(
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                        <div
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                            onClick={() => setIsModalOpen(false)}
                        />
                        <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-200">
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-100 shrink-0">
                                <div>
                                    <h2 className="text-xl font-bold text-slate-800">Add New Class</h2>
                                    <p className="text-sm text-slate-500 mt-1">Create a new class section.</p>
                                </div>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-slate-100 hover:text-slate-600 transition-colors"
                                >
                                    <XCircle size={20} />
                                </button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Grade *</label>
                                        <select className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm text-slate-600 transition-all cursor-pointer">
                                            <option value="">Select</option>
                                            <option value="10">10</option>
                                            <option value="9">9</option>
                                            <option value="8">8</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Section *</label>
                                        <select className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm text-slate-600 transition-all cursor-pointer">
                                            <option value="">Select</option>
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Class Teacher *</label>
                                    <select className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm text-slate-600 transition-all cursor-pointer">
                                        <option value="">Select Teacher</option>
                                        <option value="Rajesh Kumar">Rajesh Kumar</option>
                                        <option value="Priya Singh">Priya Singh</option>
                                        <option value="Anjali Verma">Anjali Verma</option>
                                    </select>
                                </div>

                                <div className="grid grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Room No. *</label>
                                        <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm transition-all" placeholder="101" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Capacity *</label>
                                        <input type="number" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm transition-all" placeholder="40" />
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
                                    Create Class
                                </button>
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
            </div>
        </div>
    );
};

export default Classes;

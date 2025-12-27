import React, { useState } from 'react';
import {
    Search,
    Filter,
    Plus,
    Download,
    Edit,
    Trash2,
    Users,
    BookOpen
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

    return (
        <div className="space-y-6">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-slate-800">Classes</h1>
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
                        Add New Class
                    </button>
                </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-3 rounded-2xl shadow-sm">
                <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                        type="text"
                        placeholder="Search class or teacher..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 bg-[#F0F1F5] rounded-full text-xs font-medium text-slate-600 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                    <div className="relative flex-1 sm:flex-none">
                        <select
                            value={selectedGrade}
                            onChange={(e) => setSelectedGrade(e.target.value)}
                            className="appearance-none w-full sm:w-32 pl-4 pr-8 py-2 bg-[#F0F1F5] rounded-full text-xs font-semibold text-slate-600 focus:outline-none cursor-pointer"
                        >
                            <option value="All">All Grades</option>
                            <option value="10">Grade 10</option>
                            <option value="9">Grade 9</option>
                            <option value="8">Grade 8</option>
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
                                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Class Name</th>
                                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Class Teacher</th>
                                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Students</th>
                                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Room No.</th>
                                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Capacity</th>
                                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredClasses.map((cls) => (
                                <tr key={cls.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="py-3 px-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-500 font-bold text-xs">
                                                {cls.grade}
                                            </div>
                                            <div>
                                                <h3 className="text-xs font-bold text-slate-800">{cls.className}</h3>
                                                <div className="text-[10px] text-slate-400">Section {cls.section}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 text-xs font-medium text-slate-600">
                                        {cls.classTeacher}
                                    </td>
                                    <td className="py-3 px-4">
                                        <div className="flex items-center gap-1.5 text-xs text-slate-600">
                                            <Users size={14} className="text-slate-400" />
                                            {cls.studentCount}
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 text-xs text-slate-600">
                                        {cls.roomNumber}
                                    </td>
                                    <td className="py-3 px-4 text-xs text-slate-600">
                                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${cls.studentCount >= cls.capacity ? 'bg-red-50 text-red-500' : 'bg-emerald-50 text-emerald-500'
                                            }`}>
                                            {cls.studentCount}/{cls.capacity}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4 text-right">
                                        <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors cursor-pointer" title="Edit">
                                                <Edit size={16} />
                                            </button>
                                            <button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors cursor-pointer" title="Delete">
                                                <Trash2 size={16} />
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
                    <p className="text-xs text-slate-400">Showing 1-5 from {classes.length} data</p>
                    <div className="flex items-center gap-2">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 text-xs hover:bg-[#2C3E50] hover:text-white hover:border-[#2C3E50] transition-colors">&lt;</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2C3E50] text-white text-xs font-bold shadow-md">1</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 text-xs hover:bg-slate-50 transition-colors">2</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 text-xs hover:bg-[#2C3E50] hover:text-white hover:border-[#2C3E50] transition-colors">&gt;</button>
                    </div>
                </div>

                {/* Add Class Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
                        <div className="bg-white rounded-3xl p-8 w-full max-w-lg shadow-2xl transform transition-all scale-100 mx-4">
                            <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                                <div>
                                    <h2 className="text-xl font-bold text-slate-800">Add New Class</h2>
                                    <p className="text-slate-500 text-xs mt-1">Create a new class section.</p>
                                </div>
                                <button onClick={() => setIsModalOpen(false)} className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors cursor-pointer">
                                    <Trash2 size={16} className="rotate-45" />
                                </button>
                            </div>

                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Grade *</label>
                                        <select className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm text-slate-600 transition-all cursor-pointer">
                                            <option value="">Select</option>
                                            <option value="10">10</option>
                                            <option value="9">9</option>
                                            <option value="8">8</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Section *</label>
                                        <select className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm text-slate-600 transition-all cursor-pointer">
                                            <option value="">Select</option>
                                            <option value="A">A</option>
                                            <option value="B">B</option>
                                            <option value="C">C</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Class Teacher *</label>
                                    <select className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm text-slate-600 transition-all cursor-pointer">
                                        <option value="">Select Teacher</option>
                                        <option value="Rajesh Kumar">Rajesh Kumar</option>
                                        <option value="Priya Singh">Priya Singh</option>
                                        <option value="Anjali Verma">Anjali Verma</option>
                                    </select>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Room No. *</label>
                                        <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm transition-all" placeholder="101" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Capacity *</label>
                                        <input type="number" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-sm transition-all" placeholder="40" />
                                    </div>
                                </div>

                                <div className="pt-4 flex gap-4 justify-end">
                                    <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-500 font-semibold hover:bg-slate-50 hover:text-slate-700 transition-colors cursor-pointer text-sm">
                                        Cancel
                                    </button>
                                    <button type="submit" className="px-6 py-2.5 rounded-xl bg-[#2C3E50] text-white font-semibold hover:bg-[#1a252f] shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30 transition-all cursor-pointer text-sm">
                                        Create Class
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Classes;

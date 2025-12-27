import React, { useState } from 'react';
import {
    Search,
    Filter,
    Plus,
    Calendar,
    Clock,
    MoreVertical,
    Edit2,
    Trash2,
    X,
    ChevronDown,
    LayoutGrid,
    List
} from 'lucide-react';

const Exams = () => {
    // Mock Data for Exams
    const [exams, setExams] = useState([
        {
            id: 1,
            examName: "Mathematics",
            class: "Grade 9-A",
            subject: "Mathematics",
            date: "Dec 19, 2025",
            startTime: "10:00 AM",
            endTime: "12:00 PM",
            duration: "2 hrs",
            roomNumber: "101",
            status: "Scheduled",
            studentCount: 28,
            color: "blue",
            academicYear: "2024-2025"
        },
        {
            id: 2,
            examName: "English Lit.",
            class: "Grade 9-C",
            subject: "English",
            date: "Nov 2, 2024",
            startTime: "08:30 AM",
            endTime: "10:00 AM",
            duration: "1.5 hrs",
            roomNumber: "105",
            status: "Draft",
            studentCount: 30,
            color: "purple",
            academicYear: "2024-2025"
        },
        {
            id: 3,
            examName: "Biology Quiz",
            class: "Grade 11-A",
            subject: "Biology",
            date: "Oct 26, 2024",
            startTime: "09:00 AM",
            endTime: "10:00 AM",
            duration: "1 hr",
            roomNumber: "Lab 3",
            status: "Scheduled",
            studentCount: 32,
            color: "green",
            academicYear: "2024-2025"
        },
        {
            id: 4,
            examName: "Physics Mid-Term",
            class: "Grade 11-B",
            subject: "Physics",
            date: "Oct 20, 2024",
            startTime: "10:30 AM",
            endTime: "12:30 PM",
            duration: "2 hrs",
            roomNumber: "Hall B",
            status: "Scheduled",
            studentCount: 32,
            color: "teal",
            academicYear: "2024-2025"
        },
        {
            id: 5,
            examName: "Mathematics",
            class: "Grade 10-A",
            subject: "Mathematics",
            date: "Oct 24, 2024",
            startTime: "09:00 AM",
            endTime: "11:00 AM",
            duration: "2 hrs",
            roomNumber: "102",
            status: "Scheduled",
            studentCount: 28,
            color: "blue",
            academicYear: "2024-2025"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedYear, setSelectedYear] = useState('2024-2025');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedExam, setSelectedExam] = useState(null); // For Edit Mode

    const educationYears = ["2024-2025", "2023-2024", "2022-2023"];

    // Color Palette for Modal
    const colorPalette = [
        { name: 'blue', value: 'bg-blue-500' },
        { name: 'teal', value: 'bg-teal-500' },
        { name: 'purple', value: 'bg-purple-500' },
        { name: 'red', value: 'bg-red-500' },
        { name: 'green', value: 'bg-emerald-500' },
        { name: 'orange', value: 'bg-orange-500' },
    ];

    // Helper to get color classes based on mapping
    const getColorClasses = (colorName) => {
        switch (colorName) {
            case 'blue': return { bg: 'bg-blue-50 text-blue-600', dot: 'bg-blue-500' };
            case 'purple': return { bg: 'bg-purple-50 text-purple-600', dot: 'bg-purple-500' };
            case 'green': return { bg: 'bg-emerald-50 text-emerald-600', dot: 'bg-emerald-500' };
            case 'teal': return { bg: 'bg-teal-50 text-teal-600', dot: 'bg-teal-500' };
            case 'orange': return { bg: 'bg-orange-50 text-orange-600', dot: 'bg-orange-500' };
            case 'red': return { bg: 'bg-red-50 text-red-600', dot: 'bg-red-500' };
            default: return { bg: 'bg-slate-50 text-slate-600', dot: 'bg-slate-500' };
        }
    };

    const handleOpenModal = (exam = null) => {
        setSelectedExam(exam);
        setIsModalOpen(true);
    };

    return (
        <div className="space-y-4">
            {/* Header Section */}
            <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 transition-all duration-300">
                    <div>
                        <h1 className="text-2xl font-serif text-slate-800">Examination Schedule</h1>
                        <p className="text-xs text-slate-500 mt-0.5">Manage exams by academic year</p>
                    </div>
                    <button
                        onClick={() => handleOpenModal()}
                        className="px-4 py-2 bg-[#C5A572] hover:bg-[#b09060] text-white text-sm font-medium rounded-lg shadow-sm transition-all flex items-center gap-1.5"
                    >
                        <Plus size={16} />
                        New Exam
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-6 border-b border-gray-200 mb-4 overflow-x-auto">
                    {educationYears.map((year) => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`pb-2 text-xs font-semibold transition-all relative whitespace-nowrap ${selectedYear === year
                                ? 'text-[#C5A572]'
                                : 'text-slate-400 hover:text-slate-600'
                                }`}
                        >
                            {year}
                            {selectedYear === year && (
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C5A572] rounded-t-full" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Search & Filter Bar */}
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        <input
                            type="text"
                            placeholder="Search exams..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-9 pr-3 py-2 bg-white border border-gray-100 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-[#C5A572]/20 focus:border-[#C5A572] transition-all shadow-sm placeholder-slate-400"
                        />
                    </div>
                    <div className="relative w-full sm:w-40">
                        <select className="appearance-none w-full pl-3 pr-8 py-2 bg-white border border-gray-100 rounded-lg text-xs font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#C5A572]/20 cursor-pointer shadow-sm">
                            <option>All Classes</option>
                            <option>Grade 9</option>
                            <option>Grade 10</option>
                            <option>Grade 11</option>
                        </select>
                        <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                            <LayoutGrid size={14} />
                        </div>
                    </div>
                    <div className="flex bg-white rounded-lg border border-gray-100 p-0.5 shadow-sm">
                        <button className="p-1.5 text-slate-600 hover:bg-slate-50 rounded-md transition-colors"><LayoutGrid size={16} /></button>
                        <button className="p-1.5 text-slate-300 hover:text-slate-600 transition-colors"><List size={16} /></button>
                    </div>
                </div>

                <p className="text-slate-500 text-xs mb-3">{exams.length} of {exams.length} exams</p>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {exams.map((exam) => {
                        const style = getColorClasses(exam.color);
                        return (
                            <div key={exam.id} className="group bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:shadow-md transition-all relative">
                                <div className="flex justify-between items-start mb-2">
                                    <div className={`w-7 h-7 rounded-md ${style.bg} flex items-center justify-center`}>
                                        <Calendar size={14} />
                                    </div>
                                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button onClick={() => handleOpenModal(exam)} className="p-1 text-slate-400 hover:text-blue-500 transition-colors rounded-full hover:bg-blue-50">
                                            <Edit2 size={12} />
                                        </button>
                                        <button className="p-1 text-slate-400 hover:text-red-500 transition-colors rounded-full hover:bg-red-50">
                                            <Trash2 size={12} />
                                        </button>
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <h3 className="font-serif text-sm font-bold text-slate-800 leading-tight">{exam.examName}</h3>
                                    <p className="text-slate-500 text-[10px]">{exam.class}</p>
                                </div>

                                <div className="space-y-1 mb-3">
                                    <div className="flex items-center gap-1.5 text-[10px] text-slate-600">
                                        <Calendar size={10} className="text-slate-400" />
                                        <span>{exam.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-[10px] text-slate-600">
                                        <Clock size={10} className="text-slate-400" />
                                        <span>{exam.startTime} - {exam.endTime}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                                    <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-wider ${exam.status === 'Scheduled' ? 'bg-[#FFF8EB] text-[#B98900]' :
                                        exam.status === 'Draft' ? 'bg-slate-100 text-slate-500' :
                                            'bg-emerald-50 text-emerald-600'
                                        }`}>
                                        • {exam.status}
                                    </span>
                                    <span className="text-[10px] text-slate-400 font-medium">
                                        {exam.studentCount} students
                                    </span>
                                </div>
                            </div>
                        );
                    })}

                    {/* Add New Card Entry */}
                    <button
                        onClick={() => handleOpenModal()}
                        className="border-2 border-dashed border-gray-200 rounded-lg flex flex-col items-center justify-center p-3 text-slate-400 hover:border-[#C5A572] hover:text-[#C5A572] hover:bg-[#C5A572]/5 transition-all min-h-[130px]"
                    >
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mb-1.5 group-hover:bg-[#C5A572]/10 transition-colors">
                            <Plus size={16} />
                        </div>
                        <span className="font-semibold text-xs">Add Exam</span>
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto">
                    <div className="bg-white rounded-xl w-full max-w-3xl shadow-2xl animate-fadeIn scale-100 my-auto">
                        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10 rounded-t-xl">
                            <div>
                                <h2 className="text-xl font-serif font-bold text-slate-800">
                                    {selectedExam ? 'Edit Exam' : 'Schedule New Exam'}
                                </h2>
                                <p className="text-xs text-slate-500 mt-0.5">
                                    {selectedExam ? 'Update exam details' : 'Create a new examination'}
                                </p>
                            </div>
                            <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-5">
                            {/* Subject - Spans 2 cols */}
                            <div className="col-span-1 md:col-span-2 space-y-1.5">
                                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Subject <span className="text-red-500">*</span></label>
                                <input
                                    defaultValue={selectedExam?.subject}
                                    type="text"
                                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] transition-colors text-sm text-slate-700 placeholder-slate-400"
                                    placeholder="e.g., Mathematics Mid-Term"
                                />
                            </div>

                            {/* Class */}
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Class <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <select className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] transition-colors text-sm text-slate-700 appearance-none bg-white cursor-pointer">
                                        <option>Grade 10-A</option>
                                        <option>Grade 9-B</option>
                                    </select>
                                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                </div>
                            </div>

                            {/* Year */}
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Year <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <select className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] transition-colors text-sm text-slate-700 appearance-none bg-white cursor-pointer">
                                        <option>2024-2025</option>
                                    </select>
                                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                                </div>
                            </div>

                            {/* Date */}
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Date <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] transition-colors text-sm text-slate-700"
                                        defaultValue="2025-12-19"
                                    />
                                    <Calendar size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none bg-white pl-1" />
                                </div>
                            </div>

                            {/* Time Selection & Duration (3 cols) */}
                            <div className="col-span-1 md:col-span-3 grid grid-cols-3 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Start <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <input type="time" className="w-full px-2 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#C5A572] transition-colors text-sm text-slate-700" defaultValue="10:00" />
                                        <Clock size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 bg-white" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">End <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <input type="time" className="w-full px-2 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#C5A572] transition-colors text-sm text-slate-700" defaultValue="12:00" />
                                        <Clock size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 bg-white" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Duration</label>
                                    <input type="text" className="w-full px-3 py-2.5 rounded-lg border border-gray-200 bg-slate-50 text-slate-500 text-sm focus:outline-none" defaultValue="2 hrs" readOnly />
                                </div>
                            </div>

                            {/* Location - Spans 2 cols */}
                            <div className="col-span-1 md:col-span-2 space-y-1.5">
                                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Location</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#C5A572] transition-colors text-sm text-slate-700 placeholder-slate-400"
                                    placeholder="e.g., Main Hall B, Lab 304"
                                    defaultValue={selectedExam?.roomNumber}
                                />
                            </div>

                            {/* Color Selection - Spans 2 cols */}
                            <div className="col-span-1 md:col-span-2 space-y-1.5">
                                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Color Tag</label>
                                <div className="flex gap-3 pt-0.5">
                                    {colorPalette.map((color) => (
                                        <button
                                            key={color.name}
                                            onClick={() => setSelectedExam(prev => ({ ...prev, color: color.name }))}
                                            className={`w-8 h-8 rounded-lg ${color.value} hover:opacity-90 transition-all ring-offset-2 ${selectedExam?.color === color.name ? 'ring-2 ring-[#C5A572] scale-110' : 'ring-0 hover:scale-105'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="px-6 py-4 bg-gray-50 flex justify-end gap-3 border-t border-gray-100 rounded-b-xl sticky bottom-0">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-5 py-2.5 rounded-lg text-sm font-bold text-slate-500 hover:text-slate-700 hover:bg-gray-100 transition-colors"
                            >
                                Cancel
                            </button>
                            <button className="px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-[#C5A572] hover:bg-[#b09060] shadow-md hover:shadow-lg transition-all flex items-center gap-2">
                                <Plus size={16} />
                                {selectedExam ? 'Update' : 'Schedule'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Exams;

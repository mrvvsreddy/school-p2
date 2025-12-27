import React, { useState } from 'react';
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
    Trash2
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

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h1 className="text-2xl font-bold text-slate-800">All Students</h1>
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
                        Add New Student
                    </button>
                </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-3 rounded-2xl shadow-sm">
                <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input
                        type="text"
                        placeholder="Search student..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 bg-[#F0F1F5] rounded-full text-xs font-medium text-slate-600 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all"
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
                            <option value="Grade 9">Grade 9</option>
                            <option value="Grade 10">Grade 10</option>
                            <option value="Grade 11">Grade 11</option>
                            <option value="Grade 12">Grade 12</option>
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
                                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Class</th>
                                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Parent</th>
                                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Contact</th>
                                <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredStudents.map((student) => (
                                <tr
                                    key={student.id}
                                    onClick={() => setSelectedStudent(student)}
                                    className="hover:bg-slate-50/50 transition-colors group cursor-pointer"
                                >
                                    <td className="py-3 px-4">
                                        <div className="flex items-center gap-3">
                                            <img src={student.img} alt={student.name} className="w-8 h-8 rounded-full object-cover" />
                                            <div>
                                                <h3 className="text-xs font-bold text-slate-800">{student.name}</h3>
                                                <div className="sm:hidden text-[10px] text-slate-400">{student.id}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 text-xs font-semibold text-orange-400">
                                        {student.id}
                                    </td>
                                    <td className="py-3 px-4">
                                        <span className="text-[10px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">{student.class}</span>
                                    </td>
                                    <td className="py-3 px-4 text-xs text-slate-600">
                                        {student.parent}
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
                                    <td className="py-3 px-4 text-right">
                                        <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button onClick={(e) => { e.stopPropagation(); setSelectedStudent(student); }} className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer" title="View Details">
                                                <Eye size={16} />
                                            </button>
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
                    <p className="text-xs text-slate-400">Showing 1-5 from 100 data</p>
                    <div className="flex items-center gap-2">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 text-xs hover:bg-[#2C3E50] hover:text-white hover:border-[#2C3E50] transition-colors">
                            &lt;
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2C3E50] text-white text-xs font-bold shadow-md">
                            1
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 text-xs hover:bg-slate-50 transition-colors">
                            2
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 text-xs hover:bg-slate-50 transition-colors">
                            3
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 text-xs hover:bg-[#2C3E50] hover:text-white hover:border-[#2C3E50] transition-colors">
                            &gt;
                        </button>
                    </div>
                </div>
                {/* Add Student Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm overflow-y-auto py-10">
                        <div className="bg-white rounded-3xl p-8 w-full max-w-4xl shadow-2xl transform transition-all scale-100 my-auto">
                            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-800">Add New Student</h2>
                                    <p className="text-slate-500 text-sm mt-1">Enter all the required details below to register a new student.</p>
                                </div>
                                <button onClick={() => setIsModalOpen(false)} className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors cursor-pointer">
                                    <Trash2 size={16} className="rotate-45" /> {/* Using Trash icon rotated as close button for style, or could import X */}
                                </button>
                            </div>

                            <form className="space-y-8">
                                {/* Section 1: Personal Details */}
                                <div>
                                    <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                                        <div className="w-1 h-6 bg-orange-400 rounded-full"></div>
                                        Student Details
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="space-y-1">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">First Name *</label>
                                            <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 text-sm transition-all" placeholder="John" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Name *</label>
                                            <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 text-sm transition-all" placeholder="Doe" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Date of Birth *</label>
                                            <input type="date" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 text-sm text-slate-600 transition-all" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Gender *</label>
                                            <select className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 text-sm text-slate-600 transition-all cursor-pointer">
                                                <option value="">Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Blood Group</label>
                                            <select className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 text-sm text-slate-600 transition-all cursor-pointer">
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
                                            <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 text-sm transition-all" placeholder="e.g. Christianity" />
                                        </div>
                                    </div>
                                </div>

                                {/* Section 2: Academic Details */}
                                <div>
                                    <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                                        <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
                                        Academic Details
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="space-y-1">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Admission ID *</label>
                                            <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 text-sm transition-all" placeholder="#STD-1234" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Class *</label>
                                            <select className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 text-sm text-slate-600 transition-all cursor-pointer">
                                                <option value="">Select Class</option>
                                                <option value="Grade 9">Grade 9</option>
                                                <option value="Grade 10">Grade 10</option>
                                                <option value="Grade 11">Grade 11</option>
                                                <option value="Grade 12">Grade 12</option>
                                            </select>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Section</label>
                                            <select className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 text-sm text-slate-600 transition-all cursor-pointer">
                                                <option value="">Select Section</option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                            </select>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Roll Number</label>
                                            <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 text-sm transition-all" placeholder="e.g. 21" />
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
                                    <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                                        <div className="w-1 h-6 bg-green-500 rounded-full"></div>
                                        Parent Information
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-1">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Father's Name *</label>
                                            <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 text-sm transition-all" placeholder="e.g. Robert Doe" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Mother's Name</label>
                                            <input type="text" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 text-sm transition-all" placeholder="e.g. Mary Doe" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email Address *</label>
                                            <input type="email" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 text-sm transition-all" placeholder="parent@example.com" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Phone Number *</label>
                                            <input type="tel" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 text-sm transition-all" placeholder="+1 234 567 890" />
                                        </div>
                                        <div className="col-span-1 md:col-span-2 space-y-1">
                                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Address</label>
                                            <textarea className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-300 text-sm transition-all resize-none" rows="3" placeholder="Enter full residential address..."></textarea>
                                        </div>
                                    </div>
                                </div>

                                {/* Form Actions */}
                                <div className="pt-6 border-t border-gray-100 flex gap-4 justify-end">
                                    <button type="button" onClick={() => setIsModalOpen(false)} className="px-8 py-3 rounded-xl border border-slate-200 text-slate-500 font-semibold hover:bg-slate-50 hover:text-slate-700 transition-colors cursor-pointer">
                                        Cancel
                                    </button>
                                    <button type="submit" className="px-8 py-3 rounded-xl bg-[#2C3E50] text-white font-semibold hover:bg-[#1a252f] shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30 transition-all cursor-pointer">
                                        Save Student
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                {/* View Student Profile Modal */}
                <StudentProfileModal
                    student={selectedStudent}
                    onClose={() => setSelectedStudent(null)}
                />
            </div>
        </div>
    );
};

export default Students;

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Search, Filter, Eye, Download, CheckCircle, XCircle, Clock, Calendar, Mail, Phone } from 'lucide-react';

const AdmissionRequests = () => {
    // Mock Data
    const requests = [
        {
            id: 1,
            name: "Rahul Kumar",
            grade: "Grade 5",
            date: "2024-03-15",
            status: "Pending",
            parent: "Rajiv Sharma",
            email: "rajiv.s@example.com",
            phone: "+91 98765 43210",
            avatar: "R"
        },
        {
            id: 2,
            name: "Priya Singh",
            grade: "Grade 3",
            date: "2024-03-14",
            status: "Approved",
            parent: "Vikram Singh",
            email: "vikram.s@example.com",
            phone: "+91 98765 43211",
            avatar: "P"
        },
        {
            id: 3,
            name: "Amit Patel",
            grade: "Grade 8",
            date: "2024-03-14",
            status: "Rejected",
            parent: "Suresh Patel",
            email: "suresh.p@example.com",
            phone: "+91 98765 43212",
            avatar: "A"
        },
        {
            id: 4,
            name: "Sneha Gupta",
            grade: "Grade 1",
            date: "2024-03-13",
            status: "Pending",
            parent: "Anil Gupta",
            email: "anil.g@example.com",
            phone: "+91 98765 43213",
            avatar: "S"
        },
        {
            id: 5,
            name: "Arjun Reddy",
            grade: "Grade 6",
            date: "2024-03-12",
            status: "Pending",
            parent: "Kiran Reddy",
            email: "kiran.r@example.com",
            phone: "+91 98765 43214",
            avatar: "A"
        }
    ];

    const [selectedRequest, setSelectedRequest] = useState(null);
    const [filterStatus, setFilterStatus] = useState('All');

    const getStatusColor = (status) => {
        switch (status) {
            case 'Approved': return 'bg-green-100 text-green-700';
            case 'Rejected': return 'bg-red-100 text-red-700';
            default: return 'bg-amber-100 text-amber-700';
        }
    };

    return (
        <div className="space-y-6">
            {/* Header Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                        <Calendar size={24} />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-slate-800">24</p>
                        <p className="text-sm text-slate-500">New Applications</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                        <Clock size={24} />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-slate-800">12</p>
                        <p className="text-sm text-slate-500">Pending Review</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                        <CheckCircle size={24} />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-slate-800">156</p>
                        <p className="text-sm text-slate-500">Total Admitted</p>
                    </div>
                </div>
            </div>

            {/* Filters & Search */}
            <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex items-center gap-2 bg-white p-2 rounded-xl border border-gray-100 shadow-sm w-full sm:w-auto">
                    <Search className="text-slate-400 ml-2" size={20} />
                    <input
                        type="text"
                        placeholder="Search applicants..."
                        className="bg-transparent border-none focus:ring-0 text-sm w-full"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <select
                        className="bg-white border-gray-200 rounded-xl text-sm focus:ring-[#C5A572] focus:border-[#C5A572]"
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                    >
                        <option value="All">All Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50">
                        <Filter size={18} />
                        Filter
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#C5A572] text-white rounded-xl text-sm font-medium hover:bg-[#b09060] transition-colors">
                        <Download size={18} />
                        Export
                    </button>
                </div>
            </div>

            {/* Requests Table */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-50/50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Applicant ID</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Student Name</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Grade</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-right text-xs font-bold text-slate-400 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {requests.map((request) => (
                                <tr key={request.id} className="hover:bg-slate-50/50 transition-colors group cursor-pointer" onClick={() => setSelectedRequest(request)}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm font-medium text-slate-500">#APP-{2024000 + request.id}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[#C5A572]/10 text-[#C5A572] flex items-center justify-center font-bold text-xs">
                                                {request.avatar}
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-slate-800">{request.name}</p>
                                                <p className="text-xs text-slate-500">{request.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm text-slate-600 font-medium">{request.grade}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-1.5 text-slate-500">
                                            <Calendar size={14} />
                                            <span className="text-sm">{request.date}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                                            {request.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setSelectedRequest(request); }}
                                            className="p-2 text-slate-400 hover:text-[#C5A572] hover:bg-[#C5A572]/10 rounded-lg transition-colors"
                                        >
                                            <Eye size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Application Detail Modal */}
            {selectedRequest && createPortal(
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] backdrop-blur-sm p-4">
                    <div className="bg-white rounded-3xl w-full max-w-5xl shadow-2xl animate-in fade-in zoom-in duration-200 flex flex-col max-h-[90vh]">
                        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between shrink-0">
                            <div>
                                <h3 className="text-xl font-serif font-bold text-slate-800">Application Details</h3>
                                <p className="text-xs text-slate-500">ID: APP-{2024000 + selectedRequest.id}</p>
                            </div>
                            <button
                                onClick={() => setSelectedRequest(null)}
                                className="p-2 -mr-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                            >
                                <XCircle size={24} />
                            </button>
                        </div>

                        <div className="p-6 overflow-y-auto flex-1 space-y-6">
                            {/* Applicant Info */}
                            <div className="flex items-center gap-6">
                                <div className="w-20 h-20 rounded-2xl bg-[#C5A572] flex items-center justify-center text-3xl font-bold text-white shrink-0 shadow-lg">
                                    {selectedRequest.avatar}
                                </div>
                                <div className="space-y-2 flex-1">
                                    <div>
                                        <h4 className="text-2xl font-bold text-slate-800 leading-tight">{selectedRequest.name}</h4>
                                        <p className="text-sm text-slate-500 font-medium">Applying for <span className="font-semibold text-slate-700">{selectedRequest.grade}</span></p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(selectedRequest.status).replace('bg-', 'border-').replace('text-', 'border-opacity-20 ')} ${getStatusColor(selectedRequest.status)} bg-opacity-10`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${getStatusColor(selectedRequest.status).replace('bg-', 'bg-').replace('text-', '')}`} />
                                            {selectedRequest.status}
                                        </span>
                                        <span className="text-xs text-slate-500">• Applied on {selectedRequest.date}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Details Grid */}
                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Parent Information</h5>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-sm font-semibold text-slate-700">Father's Name</p>
                                            <p className="text-sm text-slate-600">{selectedRequest.parent}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-700">Mother's Name</p>
                                            <p className="text-sm text-slate-600">Sonia Sharma</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Contact Details</h5>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-sm font-semibold text-slate-700">Email Address</p>
                                            <p className="text-base text-slate-600 flex items-center gap-2"><Mail size={16} /> {selectedRequest.email}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-700">Phone Number</p>
                                            <p className="text-base text-slate-600 flex items-center gap-2"><Phone size={16} /> {selectedRequest.phone}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="space-y-4 pt-4 border-t border-gray-50">
                                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Additional Documents</h5>
                                <div className="grid grid-cols-2 gap-4">
                                    {['Birth Certificate', 'Previous Report Card', 'Address Proof'].map((doc) => (
                                        <div key={doc} className="p-3 border border-gray-200 rounded-xl flex items-center justify-between hover:border-[#C5A572] hover:bg-[#FDF8F0] cursor-pointer group transition-all">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#C5A572] group-hover:bg-white transition-colors">
                                                    <div className="text-[10px] font-bold">PDF</div>
                                                </div>
                                                <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900">{doc}</span>
                                            </div>
                                            <Eye size={18} className="text-slate-300 group-hover:text-[#C5A572]" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="px-6 py-4 bg-gray-50 flex justify-end gap-3 rounded-b-2xl border-t border-gray-100 shrink-0">
                            {selectedRequest.status === 'Pending' ? (
                                <>
                                    <button
                                        onClick={() => setSelectedRequest(null)}
                                        className="px-4 py-2 rounded-lg text-sm font-bold text-red-600 hover:bg-red-50 border border-transparent hover:border-red-100 transition-all"
                                    >
                                        Reject
                                    </button>
                                    <button className="px-6 py-2 rounded-lg text-sm font-bold text-white bg-[#C5A572] hover:bg-[#b09060] shadow-sm hover:shadow transition-all">
                                        Approve Admission
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => setSelectedRequest(null)}
                                    className="px-6 py-2 rounded-lg text-sm font-bold text-slate-600 hover:bg-slate-200 bg-slate-100 transition-all"
                                >
                                    Close
                                </button>
                            )}
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default AdmissionRequests;

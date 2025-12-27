import React, { useState } from 'react';
import { Search, Filter, Eye, CheckCircle, XCircle, MoreHorizontal, Mail, Phone, Calendar } from 'lucide-react';

const AdmissionRequests = () => {
    // Mock Data
    const [requests, setRequests] = useState([
        { id: 1, name: "Aarav Sharma", grade: "Grade 5", parent: "Rajiv Sharma", email: "rajiv.s@example.com", phone: "+91 98765 43210", date: "2024-03-15", status: "Pending", avatar: "AS" },
        { id: 2, name: "Ishita Patel", grade: "Grade 8", parent: "Meera Patel", email: "meera.p@example.com", phone: "+91 98765 43211", date: "2024-03-14", status: "Approved", avatar: "IP" },
        { id: 3, name: "Rohan Gupta", grade: "Grade 3", parent: "Amit Gupta", email: "amit.g@example.com", phone: "+91 98765 43212", date: "2024-03-12", status: "Rejected", avatar: "RG" },
        { id: 4, name: "Ananya Singh", grade: "Grade 1", parent: "Vikram Singh", email: "vikram.s@example.com", phone: "+91 98765 43213", date: "2024-03-10", status: "Pending", avatar: "AS" },
        { id: 5, name: "Vihaan Kumar", grade: "Grade 9", parent: "Sanjay Kumar", email: "sanjay.k@example.com", phone: "+91 98765 43214", date: "2024-03-08", status: "Pending", avatar: "VK" },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');

    // Filter Logic
    const filteredRequests = requests.filter(req => {
        const matchesSearch = req.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            req.parent.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'All' || req.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const getStatusColor = (status) => {
        switch (status) {
            case 'Approved': return 'bg-emerald-100 text-emerald-700';
            case 'Rejected': return 'bg-red-100 text-red-700';
            default: return 'bg-amber-100 text-amber-700';
        }
    };

    const [selectedRequest, setSelectedRequest] = useState(null);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-serif font-bold text-slate-800">Admission Requests</h1>
                <p className="text-sm text-slate-500 mt-1">Manage new student enrollments and applications</p>
            </div>

            {/* Filter Section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="relative w-full sm:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search by student or parent name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A572]/20 focus:border-[#C5A572] transition-all"
                    />
                </div>
                <div className="flexgap-3 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                    {['All', 'Pending', 'Approved', 'Rejected'].map((status) => (
                        <button
                            key={status}
                            onClick={() => setStatusFilter(status)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${statusFilter === status
                                ? 'bg-[#C5A572] text-white shadow-md'
                                : 'bg-white text-slate-600 hover:bg-slate-50 border border-gray-100'
                                }`}
                        >
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-gray-100">
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Applicant</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Grade</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Parent Details</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredRequests.map((req) => (
                                <tr
                                    key={req.id}
                                    onClick={() => setSelectedRequest(req)}
                                    className="hover:bg-slate-50/50 transition-colors group cursor-pointer"
                                >
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-[#C5A572]/10 text-[#C5A572] flex items-center justify-center font-bold text-sm">
                                                {req.avatar}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-slate-800 text-sm">{req.name}</p>
                                                <p className="text-xs text-slate-500">ID: APP-{2024000 + req.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">
                                            {req.grade}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium text-slate-800">{req.parent}</p>
                                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                                <div className="flex items-center gap-1">
                                                    <Mail size={10} /> {req.email}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                                <div className="flex items-center gap-1">
                                                    <Phone size={10} /> {req.phone}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar size={14} className="text-slate-400" />
                                            {req.date}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(req.status).replace('bg-', 'border-').replace('text-', 'border-opacity-20 ')} ${getStatusColor(req.status)} bg-opacity-10`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${getStatusColor(req.status).replace('bg-', 'bg-').replace('text-', '')}`} />
                                            {req.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={(e) => { e.stopPropagation(); setSelectedRequest(req); }}
                                                className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                title="View Details"
                                            >
                                                <Eye size={18} />
                                            </button>
                                            {req.status === 'Pending' && (
                                                <>
                                                    <button className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors" title="Approve">
                                                        <CheckCircle size={18} />
                                                    </button>
                                                    <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Reject">
                                                        <XCircle size={18} />
                                                    </button>
                                                </>
                                            )}
                                            {req.status !== 'Pending' && (
                                                <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                                                    <MoreHorizontal size={18} />
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination (Static) */}
                <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                    <p className="text-xs text-slate-500">Showing <span className="font-medium text-slate-800">1-5</span> of <span className="font-medium text-slate-800">12</span> requests</p>
                    <div className="flex gap-2">
                        <button className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
                        <button className="px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">Next</button>
                    </div>
                </div>
            </div>

            {/* Application Detail Modal */}
            {selectedRequest && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn">
                        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
                            <div>
                                <h3 className="text-xl font-serif font-bold text-slate-800">Application Details</h3>
                                <p className="text-xs text-slate-500">ID: APP-{2024000 + selectedRequest.id}</p>
                            </div>
                            <button
                                onClick={() => setSelectedRequest(null)}
                                className="p-2 -mr-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                            >
                                <XCircle size={20} />
                            </button>
                        </div>

                        <div className="p-6 space-y-8">
                            {/* Applicant Info */}
                            <div className="flex items-start gap-4">
                                <div className="w-16 h-16 rounded-full bg-[#C5A572]/10 text-[#C5A572] flex items-center justify-center text-xl font-bold">
                                    {selectedRequest.avatar}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-800">{selectedRequest.name}</h4>
                                    <p className="text-sm text-slate-500">Applying for <span className="font-semibold text-slate-700">{selectedRequest.grade}</span></p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(selectedRequest.status).replace('bg-', 'border-').replace('text-', 'border-opacity-20 ')} ${getStatusColor(selectedRequest.status)} bg-opacity-10`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${getStatusColor(selectedRequest.status).replace('bg-', 'bg-').replace('text-', '')}`} />
                                            {selectedRequest.status}
                                        </span>
                                        <span className="text-xs text-slate-400">• Applied on {selectedRequest.date}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Details Grid */}
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Parent Information</h5>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700">Father's Name</p>
                                        <p className="text-sm text-slate-600">{selectedRequest.parent}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700">Mother's Name</p>
                                        <p className="text-sm text-slate-600">Sonia Sharma</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Contact Details</h5>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700">Email Address</p>
                                        <p className="text-sm text-slate-600 flex items-center gap-2"><Mail size={14} /> {selectedRequest.email}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-700">Phone Number</p>
                                        <p className="text-sm text-slate-600 flex items-center gap-2"><Phone size={14} /> {selectedRequest.phone}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="space-y-3 pt-4 border-t border-gray-50">
                                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Additional Documents</h5>
                                <div className="grid grid-cols-2 gap-3">
                                    {['Birth Certificate', 'Previous Report Card', 'Address Proof'].map((doc) => (
                                        <div key={doc} className="p-3 border border-gray-200 rounded-lg flex items-center justify-between hover:border-[#C5A572] hover:bg-[#FDF8F0] cursor-pointer group transition-all">
                                            <div className="flex items-center gap-2">
                                                <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#C5A572] group-hover:bg-white transition-colors">
                                                    <div className="text-[10px] font-bold">PDF</div>
                                                </div>
                                                <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900">{doc}</span>
                                            </div>
                                            <Eye size={16} className="text-slate-300 group-hover:text-[#C5A572]" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="px-6 py-4 bg-gray-50 flex justify-end gap-3 rounded-b-xl border-t border-gray-100 sticky bottom-0">
                            {selectedRequest.status === 'Pending' ? (
                                <>
                                    <button
                                        onClick={() => setSelectedRequest(null)}
                                        className="px-4 py-2 rounded-lg text-sm font-semibold text-red-600 hover:bg-red-50 border border-transparent hover:border-red-100 transition-all"
                                    >
                                        Reject Application
                                    </button>
                                    <button className="px-6 py-2 rounded-lg text-sm font-semibold text-white bg-[#C5A572] hover:bg-[#b09060] shadow-sm hover:shadow transition-all">
                                        Approve Admission
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => setSelectedRequest(null)}
                                    className="px-6 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-200 bg-slate-100 transition-all"
                                >
                                    Close
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdmissionRequests;

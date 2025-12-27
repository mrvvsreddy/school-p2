import React, { useState } from 'react';
import {
    Search,
    Filter,
    MoreHorizontal,
    Mail,
    Phone,
    Calendar,
    CheckCircle,
    XCircle,
    Clock
} from 'lucide-react';

const Inquiries = () => {
    const [filter, setFilter] = useState('All');

    // Mock Data
    const inquiries = [
        {
            id: 1,
            name: 'Rahul Sharma',
            email: 'rahul.s@example.com',
            phone: '+91 98765 43210',
            subject: 'Admission for Grade 5',
            message: 'I would like to know about the fee structure and admission process for Grade 5.',
            date: '27 Dec, 2025',
            status: 'New'
        },
        {
            id: 2,
            name: 'Priya Patel',
            email: 'priya.p@example.com',
            phone: '+91 98765 43211',
            subject: 'Transport Inquiry',
            message: 'Does the school transport cover the Whitefield area?',
            date: '26 Dec, 2025',
            status: 'In Progress'
        },
        {
            id: 3,
            name: 'Amit Singh',
            email: 'amit.singh@example.com',
            phone: '+91 98765 43212',
            subject: 'Sports Facilities',
            message: 'Is there a swimming pool available for students?',
            date: '25 Dec, 2025',
            status: 'Resolved'
        },
        {
            id: 4,
            name: 'Sneha Gupta',
            email: 'sneha.g@example.com',
            phone: '+91 98765 43213',
            subject: 'Admission for Kindergarten',
            message: 'When do the admissions start for the next academic year?',
            date: '24 Dec, 2025',
            status: 'New'
        },
        {
            id: 5,
            name: 'Vikram Malhotra',
            email: 'vikram.m@example.com',
            phone: '+91 98765 43214',
            subject: 'Job Application',
            message: 'I am a Math teacher with 5 years experience looking for a vacancy.',
            date: '23 Dec, 2025',
            status: 'In Progress'
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'New': return 'bg-blue-50 text-blue-700 border-blue-100';
            case 'In Progress': return 'bg-yellow-50 text-yellow-700 border-yellow-100';
            case 'Resolved': return 'bg-green-50 text-green-700 border-green-100';
            default: return 'bg-gray-50 text-gray-700 border-gray-100';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'New': return <Clock size={14} />;
            case 'In Progress': return <Clock size={14} className="animate-pulse" />;
            case 'Resolved': return <CheckCircle size={14} />;
            default: return null;
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-xl font-bold text-gray-900">Inquiries</h1>
                    <p className="text-gray-500 text-xs">Manage and respond to parent inquiries.</p>
                </div>
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-xl text-gray-700 text-xs font-medium hover:bg-gray-50 transition-colors shadow-sm">
                        <Filter size={14} />
                        Filter
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-900 text-white rounded-xl text-xs font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20">
                        Export CSV
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Search Bar */}
                <div className="p-3 border-b border-gray-100 bg-gray-50/50">
                    <div className="relative max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input
                            type="text"
                            placeholder="Search by name, email or subject..."
                            className="w-full pl-9 pr-4 py-1.5 bg-white border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100">
                                <th className="py-3 px-4 text-[10px] font-semibold text-gray-500 uppercase tracking-wider w-10">
                                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                </th>
                                <th className="py-3 px-4 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Contact Details</th>
                                <th className="py-3 px-4 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Subject & Message</th>
                                <th className="py-3 px-4 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="py-3 px-4 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="py-3 px-4 text-[10px] font-semibold text-gray-500 uppercase tracking-wider text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {inquiries.map((inquiry) => (
                                <tr key={inquiry.id} className="hover:bg-gray-50 transition-colors group">
                                    <td className="py-3 px-4">
                                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                    </td>
                                    <td className="py-3 px-4">
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-gray-900 text-xs">{inquiry.name}</span>
                                            <div className="flex items-center gap-1.5 mt-0.5 text-[10px] text-gray-500">
                                                <Mail size={10} /> {inquiry.email}
                                            </div>
                                            <div className="flex items-center gap-1.5 mt-0.5 text-[10px] text-gray-500">
                                                <Phone size={10} /> {inquiry.phone}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 max-w-xs">
                                        <div className="font-medium text-gray-900 text-xs mb-0.5">{inquiry.subject}</div>
                                        <p className="text-[10px] text-gray-500 line-clamp-1">{inquiry.message}</p>
                                    </td>
                                    <td className="py-3 px-4">
                                        <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                            <Calendar size={12} />
                                            {inquiry.date}
                                        </div>
                                    </td>
                                    <td className="py-3 px-4">
                                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium border ${getStatusColor(inquiry.status)}`}>
                                            {getStatusIcon(inquiry.status)}
                                            {inquiry.status}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4 text-right">
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex justify-end gap-1">
                                            <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer" title="Reply">
                                                <Mail size={14} />
                                            </button>
                                            <button className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
                                                <MoreHorizontal size={14} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-3 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
                    <p className="text-[10px] text-gray-500">Showing 5 of 148 inquiries</p>
                    <div className="flex gap-2">
                        <button className="px-2 py-1 border border-gray-200 rounded-lg text-[10px] font-medium text-gray-600 hover:bg-gray-100 disabled:opacity-50 cursor-pointer">Previous</button>
                        <button className="px-2 py-1 border border-gray-200 rounded-lg text-[10px] font-medium text-gray-600 hover:bg-gray-100 cursor-pointer">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inquiries;

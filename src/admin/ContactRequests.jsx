import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import {
    Search,
    Star,
    Trash2,
    XCircle,
    Inbox,
    Mail,
    MessageSquare,
    Calendar,
    Phone
} from 'lucide-react';

const ContactRequests = () => {
    // Mock Data
    const [messages, setMessages] = useState([
        { id: 1, name: "Sneha Reddy", email: "sneha.r@example.com", subject: "Admissions Inquiry for Grade 5", preview: "Hello, I would like to know the fee structure for Grade 5...", date: "Just now", isRead: false, isStarred: true, phone: "+91 98765 43210" },
        { id: 2, name: "Rahul Verma", email: "rahul.v@example.com", subject: "Transport Facility Request", preview: "Is there a bus route available from Sector 62 to the school...", date: "2 hrs ago", isRead: false, isStarred: false, phone: "+91 98765 43211" },
        { id: 3, name: "Priya Singh", email: "priya.s@example.com", subject: "Syllabus Verification", preview: "Could you please confirm if the ICSE board syllabus is followed...", date: "Yesterday", isRead: true, isStarred: false, phone: "+91 98765 43212" },
        { id: 4, name: "Amit Kumar", email: "amit.k@example.com", subject: "Meeting with Principal", preview: "I am a parent of a student in Grade 8 and would like to request...", date: "Mar 12", isRead: true, isStarred: false, phone: "+91 98765 43213" },
        { id: 5, name: "Neha Gupta", email: "neha.g@example.com", subject: "Sports Day Participation", preview: "My son wants to participate in the upcoming inter-school sports...", date: "Mar 10", isRead: true, isStarred: true, phone: "+91 98765 43214" },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All'); // All, Unread, Starred
    const [selectedMessage, setSelectedMessage] = useState(null);

    // Filter Logic
    const filteredMessages = messages.filter(msg => {
        const matchesSearch = msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            msg.subject.toLowerCase().includes(searchTerm.toLowerCase());

        if (filter === 'Unread') return matchesSearch && !msg.isRead;
        if (filter === 'Starred') return matchesSearch && msg.isStarred;
        return matchesSearch;
    });

    const toggleStar = (id) => {
        setMessages(messages.map(msg => {
            if (msg.id === id) {
                const updatedMsg = { ...msg, isStarred: !msg.isStarred };
                if (selectedMessage && selectedMessage.id === id) {
                    setSelectedMessage(updatedMsg);
                }
                return updatedMsg;
            }
            return msg;
        }));
    };

    const markAsRead = (id) => {
        setMessages(messages.map(msg => msg.id === id ? { ...msg, isRead: true } : msg));
    }

    // Stats Logic
    const totalRequests = messages.length;
    const unreadRequests = messages.filter(m => !m.isRead).length;
    const starredRequests = messages.filter(m => m.isStarred).length;

    return (
        <div className="space-y-6">

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                        <Inbox size={24} />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-slate-800">{totalRequests}</p>
                        <p className="text-sm text-slate-500">Total Requests</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
                        <Mail size={24} />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-slate-800">{unreadRequests}</p>
                        <p className="text-sm text-slate-500">Unread Messages</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600">
                        <Star size={24} fill="currentColor" />
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-slate-800">{starredRequests}</p>
                        <p className="text-sm text-slate-500">Starred</p>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-gray-100 shadow-sm w-full sm:w-80">
                    <Search className="text-slate-400 ml-2" size={20} />
                    <input
                        type="text"
                        placeholder="Search requests..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-transparent border-none focus:ring-0 text-sm w-full text-slate-600 placeholder:text-slate-400"
                    />
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="bg-white border text-slate-600 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-[#C5A572] focus:border-[#C5A572] cursor-pointer shadow-sm hover:bg-gray-50 transition-colors"
                    >
                        <option value="All">All Messages</option>
                        <option value="Unread">Unread</option>
                        <option value="Starred">Starred</option>
                    </select>
                </div>
            </div>

            {/* Messages Table */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50/80">
                            <tr>
                                <th className="w-12 px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">
                                    <Star size={14} />
                                </th>
                                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Sender</th>
                                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Subject & Preview</th>
                                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredMessages.map((msg) => (
                                <tr
                                    key={msg.id}
                                    onClick={() => { markAsRead(msg.id); setSelectedMessage({ ...msg, isRead: true }); }}
                                    className={`hover:bg-slate-50/60 transition-colors group cursor-pointer ${!msg.isRead ? 'bg-[#FDF8F0]/40' : ''}`}
                                >
                                    <td className="px-6 py-4 text-center">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); toggleStar(msg.id); }}
                                            className={`p-1 rounded-full transition-colors ${msg.isStarred ? 'text-amber-400 hover:text-amber-500' : 'text-slate-300 hover:text-slate-400'}`}
                                        >
                                            <Star size={18} fill={msg.isStarred ? "currentColor" : "none"} />
                                        </button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${!msg.isRead ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500'}`}>
                                                {msg.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h3 className={`text-sm ${!msg.isRead ? 'font-bold text-slate-900' : 'font-semibold text-slate-700'}`}>{msg.name}</h3>
                                                <div className="text-xs text-slate-400">{msg.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 max-w-sm">
                                        <div className={`text-sm mb-0.5 ${!msg.isRead ? 'font-bold text-slate-900' : 'font-medium text-slate-800'}`}>
                                            {msg.subject}
                                            {!msg.isRead && <span className="ml-2 inline-block w-2 h-2 rounded-full bg-amber-500" />}
                                        </div>
                                        <p className="text-xs text-slate-500 line-clamp-1">{msg.preview}</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-500 font-medium whitespace-nowrap">
                                        {msg.date}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); /* Delete logic */ }}
                                            className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                                            title="Delete"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-6 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-400">Showing {filteredMessages.length} of {totalRequests} requests</p>
                    <div className="flex items-center gap-2">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 text-xs hover:bg-[#2C3E50] hover:text-white hover:border-[#2C3E50] transition-colors">&lt;</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2C3E50] text-white text-xs font-bold shadow-md">1</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-500 text-xs hover:bg-slate-50 transition-colors">2</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 text-xs hover:bg-[#2C3E50] hover:text-white hover:border-[#2C3E50] transition-colors">&gt;</button>
                    </div>
                </div>
            </div>

            {/* Message Detail Modal */}
            {selectedMessage && createPortal(
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    <div
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                        onClick={() => setSelectedMessage(null)}
                    />
                    <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-200">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100 shrink-0">
                            <div className="flex items-center gap-3">
                                <button
                                    className={`p-1.5 rounded-full transition-colors ${selectedMessage.isStarred ? 'bg-amber-50 text-amber-500' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                                    onClick={() => toggleStar(selectedMessage.id)}
                                >
                                    <Star size={18} fill={selectedMessage.isStarred ? "currentColor" : "none"} />
                                </button>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-800">{selectedMessage.subject}</h3>
                                    <p className="text-xs text-slate-500">{selectedMessage.date}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="w-8 h-8 rounded-full bg-red-50 text-red-400 flex items-center justify-center hover:bg-red-100 hover:text-red-500 transition-colors cursor-pointer">
                                    <Trash2 size={18} />
                                </button>
                                <button
                                    onClick={() => setSelectedMessage(null)}
                                    className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-slate-100 hover:text-slate-600 transition-colors cursor-pointer"
                                >
                                    <XCircle size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Scrollable Body */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                            {/* Sender Info */}
                            <div className="flex items-center gap-4 bg-slate-50/50 p-4 rounded-xl border border-gray-50">
                                <div className="w-12 h-12 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                                    {selectedMessage.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800">{selectedMessage.name}</p>
                                    <p className="text-sm text-slate-500">{selectedMessage.email}</p>
                                    {selectedMessage.phone && <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1"><Phone size={12} /> {selectedMessage.phone}</p>}
                                </div>
                            </div>

                            {/* Message Content */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Message</label>
                                <div className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">
                                    {selectedMessage.preview}
                                    <br /><br />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-gray-100 flex gap-3 justify-end bg-gray-50/50 rounded-b-2xl shrink-0">
                            <button
                                className="px-6 py-2.5 rounded-xl border border-gray-200 text-slate-600 font-semibold hover:bg-white hover:border-gray-300 transition-all text-sm cursor-pointer"
                            >
                                Mark as Unread
                            </button>
                            <button
                                className="px-6 py-2.5 rounded-xl bg-[#2C3E50] text-white font-semibold hover:bg-[#1a252f] shadow-lg shadow-blue-900/10 hover:shadow-blue-900/20 transition-all text-sm cursor-pointer flex items-center gap-2"
                            >
                                <MessageSquare size={16} />
                                Reply
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default ContactRequests;

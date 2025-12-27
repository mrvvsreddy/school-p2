import React, { useState } from 'react';
import { Search, Mail, Phone, Calendar, Star, Trash2, Reply, MoreHorizontal } from 'lucide-react';

const ContactRequests = () => {
    // Mock Data
    const [messages, setMessages] = useState([
        { id: 1, name: "Sneha Reddy", email: "sneha.r@example.com", subject: "Admissions Inquiry for Grade 5", preview: "Hello, I would like to know the fee structure for Grade 5...", date: "Just now", isRead: false, isStarred: true },
        { id: 2, name: "Rahul Verma", email: "rahul.v@example.com", subject: "Transport Facility Request", preview: "Is there a bus route available from Sector 62 to the school...", date: "2 hrs ago", isRead: false, isStarred: false },
        { id: 3, name: "Priya Singh", email: "priya.s@example.com", subject: "Syllabus Verification", preview: "Could you please confirm if the ICSE board syllabus is followed...", date: "Yesterday", isRead: true, isStarred: false },
        { id: 4, name: "Amit Kumar", email: "amit.k@example.com", subject: "Meeting with Principal", preview: "I am a parent of a student in Grade 8 and would like to request...", date: "Mar 12", isRead: true, isStarred: false },
        { id: 5, name: "Neha Gupta", email: "neha.g@example.com", subject: "Sports Day Participation", preview: "My son wants to participate in the upcoming inter-school sports...", date: "Mar 10", isRead: true, isStarred: true },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All'); // All, Unread, Starred

    // Filter Logic
    const filteredMessages = messages.filter(msg => {
        const matchesSearch = msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            msg.subject.toLowerCase().includes(searchTerm.toLowerCase());

        if (filter === 'Unread') return matchesSearch && !msg.isRead;
        if (filter === 'Starred') return matchesSearch && msg.isStarred;
        return matchesSearch;
    });

    const toggleStar = (id) => {
        setMessages(messages.map(msg => msg.id === id ? { ...msg, isStarred: !msg.isStarred } : msg));
    };

    const markAsRead = (id) => {
        setMessages(messages.map(msg => msg.id === id ? { ...msg, isRead: true } : msg));
    }

    const [selectedMessage, setSelectedMessage] = useState(null);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-serif font-bold text-slate-800">Contact Requests</h1>
                <p className="text-sm text-slate-500 mt-1">Manage inquiries and messages from the contact form</p>
            </div>

            {/* Filter Section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="relative w-full sm:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search subject or sender..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A572]/20 focus:border-[#C5A572] transition-all"
                    />
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                    {[
                        { label: 'All Messages', value: 'All' },
                        { label: 'Unread', value: 'Unread' },
                        { label: 'Starred', value: 'Starred' }
                    ].map((opt) => (
                        <button
                            key={opt.value}
                            onClick={() => setFilter(opt.value)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === opt.value
                                ? 'bg-[#C5A572] text-white shadow-md'
                                : 'bg-white text-slate-600 hover:bg-slate-50 border border-gray-100'
                                }`}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Messages List */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="divide-y divide-gray-50">
                    {filteredMessages.map((msg) => (
                        <div
                            key={msg.id}
                            onClick={() => { markAsRead(msg.id); setSelectedMessage(msg); }}
                            className={`p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:items-center hover:bg-slate-50 transition-colors cursor-pointer group ${!msg.isRead ? 'bg-[#FDF8F0]/30' : ''}`}
                        >
                            {/* Star & Avatar */}
                            <div className="flex items-center gap-4 min-w-[200px]">
                                <button
                                    onClick={(e) => { e.stopPropagation(); toggleStar(msg.id); }}
                                    className={`p-1 rounded-full transition-colors ${msg.isStarred ? 'text-amber-400 hover:text-amber-500' : 'text-slate-300 hover:text-slate-400'}`}
                                >
                                    <Star size={18} fill={msg.isStarred ? "currentColor" : "none"} />
                                </button>
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${!msg.isRead ? 'bg-[#C5A572] text-white' : 'bg-slate-100 text-slate-500'}`}>
                                        {msg.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <p className={`text-sm ${!msg.isRead ? 'font-bold text-slate-800' : 'font-medium text-slate-700'}`}>{msg.name}</p>
                                        <p className="text-xs text-slate-500">{msg.email}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-0.5">
                                    <h3 className={`text-sm truncate ${!msg.isRead ? 'font-bold text-slate-900' : 'font-medium text-slate-700'}`}>
                                        {msg.subject}
                                    </h3>
                                    {!msg.isRead && (
                                        <span className="w-2 h-2 rounded-full bg-[#C5A572]" />
                                    )}
                                </div>
                                <p className="text-sm text-slate-500 truncate">{msg.preview}</p>
                            </div>

                            {/* Date & Actions */}
                            <div className="flex items-center justify-between sm:justify-end gap-6 sm:w-48">
                                <span className="text-xs text-slate-400 whitespace-nowrap font-medium">{msg.date}</span>
                                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); markAsRead(msg.id); setSelectedMessage(msg); }}
                                        className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                        title="Reply"
                                    >
                                        <Reply size={16} />
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); /* Delete logic */ }}
                                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                        title="Delete"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Message Detail Modal */}
            {selectedMessage && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn flex flex-col">
                        {/* Header */}
                        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
                            <div className="flex items-center gap-3">
                                <button className={`p-1.5 rounded-full transition-colors ${selectedMessage.isStarred ? 'bg-amber-50 text-amber-500' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`} onClick={() => toggleStar(selectedMessage.id)}>
                                    <Star size={18} fill={selectedMessage.isStarred ? "currentColor" : "none"} />
                                </button>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-800">{selectedMessage.subject}</h3>
                                    <p className="text-xs text-slate-500">{selectedMessage.date}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                    <Trash2 size={18} />
                                </button>
                                <button
                                    onClick={() => setSelectedMessage(null)}
                                    className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                                >
                                    <MoreHorizontal size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="p-6 space-y-6 flex-1 overflow-y-auto">
                            {/* Sender Info */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold text-sm">
                                        {selectedMessage.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-800 text-sm">{selectedMessage.name}</p>
                                        <p className="text-xs text-slate-500">{selectedMessage.email}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors">
                                        View Profile
                                    </button>
                                </div>
                            </div>

                            {/* Message Content */}
                            <div className="prose prose-sm max-w-none text-slate-600 bg-slate-50/50 p-4 rounded-xl border border-gray-100">
                                <p className="whitespace-pre-wrap">{selectedMessage.preview} {selectedMessage.preview} (Expanded content for demonstration purposes...)</p>
                            </div>

                            {/* Reply Section */}
                            <div className="pt-4 border-t border-gray-100 space-y-3">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Reply to {selectedMessage.name.split(' ')[0]}</p>
                                <textarea
                                    className="w-full h-32 p-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] transition-all resize-none placeholder-slate-400"
                                    placeholder="Type your reply here..."
                                ></textarea>
                                <div className="flex justify-end gap-3">
                                    <button
                                        onClick={() => setSelectedMessage(null)}
                                        className="px-4 py-2 rounded-lg text-sm font-semibold text-slate-500 hover:text-slate-700 hover:bg-gray-100 transition-colors"
                                    >
                                        Close
                                    </button>
                                    <button className="px-6 py-2 rounded-lg text-sm font-semibold text-white bg-[#C5A572] hover:bg-[#b09060] shadow-sm hover:shadow transition-all flex items-center gap-2">
                                        <Reply size={16} />
                                        Send Reply
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactRequests;

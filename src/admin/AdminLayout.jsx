import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    GraduationCap,
    UserCircle,
    Settings,
    LogOut,
    Menu,
    X,
    Search,
    Bell,
    Mail,
    Globe,
    ChevronDown,
    Bus,
    FileText,
    AlertCircle,
    CreditCard,
    MessageSquare
} from 'lucide-react';

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const location = useLocation();

    // Menu items based on the reference image
    const menuItems = [
        { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/admin/students', icon: Users, label: 'Students' },
        { path: '/admin/teachers', icon: GraduationCap, label: 'Teachers' },
        { path: '/admin/class', icon: Users, label: 'Class' },
        { path: '/admin/exam', icon: FileText, label: 'Exam' },
        { path: '/admin/admissions', icon: Mail, label: 'Admissions' },
        { path: '/admin/contacts', icon: MessageSquare, label: 'Contact Requests' },
        { path: '/admin/settings', icon: Settings, label: 'Settings' },
    ];

    return (
        <div className="min-h-screen bg-[#F0F1F5] flex font-sans text-slate-600">
            {/* Sidebar */}
            <aside
                className={`
                    fixed inset-y-0 left-0 z-50 w-[220px] bg-white transform transition-transform duration-300 ease-in-out border-r border-gray-100
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                    lg:relative lg:translate-x-0
                `}
            >
                <div className="h-full flex flex-col">
                    {/* Logo Section */}
                    <div className="h-16 flex items-center px-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-orange-400 rotate-45 flex items-center justify-center">
                                <div className="w-4 h-4 bg-white rounded-md -rotate-45"></div>
                            </div>
                            <h1 className="text-xl font-bold text-slate-800 tracking-tight">ACERO</h1>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            // Naive active check - in real app might need exact match or startsWith
                            const isActive = location.pathname.startsWith(item.path);

                            return (
                                <Link
                                    key={item.label}
                                    to={item.path}
                                    className={`
                                        flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative
                                        ${isActive
                                            ? 'text-slate-900 font-semibold'
                                            : 'text-slate-400 hover:text-slate-600'
                                        }
                                    `}
                                >
                                    {/* Active Indicator Line */}
                                    {isActive && (
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-orange-400 rounded-r-full" />
                                    )}

                                    <Icon size={18} className={isActive ? 'text-orange-400' : 'text-slate-400 group-hover:text-slate-500'} />
                                    <span className={`text-sm ${isActive ? 'text-slate-900' : ''}`}>{item.label}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Logout */}
                    <div className="p-4 mt-auto">
                        <button className="flex items-center gap-4 px-4 py-3.5 text-slate-400 hover:text-red-500 transition-colors w-full">
                            <LogOut size={20} />
                            <span className="font-medium">Log out</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                {/* Header */}
                <header className="bg-[#F0F1F5] px-6 py-4 flex items-center justify-between z-40">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="lg:hidden p-2 text-slate-600 hover:bg-white rounded-lg"
                        >
                            <Menu size={20} />
                        </button>
                        <h2 className="text-xl font-bold text-slate-800">Dashboard</h2>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Search */}
                        <div className="hidden md:flex relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-56 pl-9 pr-4 py-2 bg-white rounded-full text-sm font-medium text-slate-600 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-100"
                            />
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 text-slate-500 font-medium hover:text-slate-700 text-sm">
                                <Globe size={16} />
                                <span>EN</span>
                                <ChevronDown size={14} />
                            </button>

                            <button className="relative p-1.5 bg-white rounded-full text-slate-400 hover:text-slate-600 shadow-sm">
                                <Mail size={18} />
                                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-400 border-2 border-white rounded-full"></span>
                            </button>

                            <button className="relative p-1.5 bg-white rounded-full text-slate-400 hover:text-slate-600 shadow-sm">
                                <Bell size={18} />
                                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-blue-500 border-2 border-white rounded-full"></span>
                            </button>
                        </div>

                        {/* Profile */}
                        <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop"
                                alt="Profile"
                                className="w-8 h-8 rounded-full object-cover shadow-sm"
                            />
                            <div className="hidden md:block text-left">
                                <p className="text-sm font-bold text-slate-800 leading-tight">Steven Jhon</p>
                                <p className="text-[10px] text-slate-500">Admin</p>
                            </div>
                            <ChevronDown size={14} className="text-slate-400" />
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-auto px-6 pb-6">
                    <div className="max-w-[1600px] mx-auto animate-fadeIn">
                        <Outlet />
                    </div>
                </main>
            </div>

            {/* Overlay for mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-40 lg:hidden backdrop-blur-sm"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </div>
    );
};

export default AdminLayout;

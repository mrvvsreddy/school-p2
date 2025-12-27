import React, { useState } from 'react';
import { Save, User, Bell, Shield, Globe, Monitor, Moon, Sun, Lock } from 'lucide-react';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('Profile');

    const tabs = [
        { id: 'Profile', icon: User, label: 'Profile Settings' },
        { id: 'Notifications', icon: Bell, label: 'Notifications' },
        { id: 'Security', icon: Shield, label: 'Security & Login' },
        { id: 'Appearance', icon: Monitor, label: 'Appearance' },
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-serif font-bold text-slate-800">Settings</h1>
                <p className="text-sm text-slate-500 mt-1">Manage your account preferences and school configuration</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Sidebar Navigation */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden sticky top-8">
                        <div className="p-2 space-y-1">
                            {tabs.map((tab) => {
                                const Icon = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === tab.id
                                                ? 'bg-[#C5A572]/10 text-[#C5A572]'
                                                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                            }`}
                                    >
                                        <Icon size={18} />
                                        {tab.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="lg:col-span-3 space-y-6">
                    {/* Profile Settings */}
                    {activeTab === 'Profile' && (
                        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-6">
                            <div className="flex items-center gap-4 pb-6 border-b border-gray-100">
                                <div className="w-20 h-20 rounded-full bg-[#C5A572] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                    AD
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-800">Admin User</h3>
                                    <p className="text-sm text-slate-500">Administrator</p>
                                    <button className="mt-2 text-xs font-semibold text-[#C5A572] hover:underline">Change Avatar</button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-slate-500 uppercase">First Name</label>
                                    <input type="text" defaultValue="Admin" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] focus:outline-none" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-slate-500 uppercase">Last Name</label>
                                    <input type="text" defaultValue="User" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] focus:outline-none" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-slate-500 uppercase">Email Address</label>
                                    <input type="email" defaultValue="admin@school.com" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] focus:outline-none" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-slate-500 uppercase">Phone Number</label>
                                    <input type="tel" defaultValue="+91 98765 43210" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] focus:outline-none" />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Security Settings */}
                    {activeTab === 'Security' && (
                        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-6">
                            <h3 className="text-lg font-bold text-slate-800">Change Password</h3>
                            <div className="space-y-4 max-w-md">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-slate-500 uppercase">Current Password</label>
                                    <div className="relative">
                                        <input type="password" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] focus:outline-none" />
                                        <Lock size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-slate-500 uppercase">New Password</label>
                                    <div className="relative">
                                        <input type="password" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] focus:outline-none" />
                                        <Lock size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-slate-500 uppercase">Confirm Password</label>
                                    <div className="relative">
                                        <input type="password" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:border-[#C5A572] focus:ring-1 focus:ring-[#C5A572] focus:outline-none" />
                                        <Lock size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Save Button */}
                    <div className="flex justify-end">
                        <button className="px-6 py-2.5 bg-[#C5A572] hover:bg-[#b09060] text-white font-semibold rounded-lg shadow-sm transition-all flex items-center gap-2">
                            <Save size={18} />
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;

import React, { useState } from 'react';
import {
    Save,
    User,
    Shield,
    Lock,
    Check,
    LogOut,
    Loader2,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('Profile');
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // State for different settings
    const [profile, setProfile] = useState({
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@school.com',
        phone: '+91 98765 43210',
        role: 'Super Administrator'
    });

    const handleSave = () => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        }, 1500);
    };

    const tabs = [
        { id: 'Profile', icon: User, label: 'Profile', desc: 'Personal details' },
        { id: 'Security', icon: Shield, label: 'Security', desc: 'Password & login' },
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky top-0 bg-slate-50/80 backdrop-blur-md z-10 py-4 mb-2">
                <div>
                    <h1 className="text-3xl font-serif font-bold text-slate-800">Settings</h1>
                    <p className="text-sm text-slate-500 mt-1">Manage school configuration and your account preferences</p>
                </div>

                <button
                    onClick={handleSave}
                    disabled={isLoading}
                    className={`
                        px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg flex items-center gap-2 transition-all
                        ${showSuccess
                            ? 'bg-green-500 text-white shadow-green-500/30'
                            : 'bg-[#C5A572] hover:bg-[#b09060] text-white shadow-[#C5A572]/30 hover:scale-105 active:scale-95'}
                        ${isLoading ? 'opacity-80 cursor-wait' : ''}
                    `}
                >
                    {isLoading ? (
                        <>
                            <Loader2 size={18} className="animate-spin" />
                            Saving...
                        </>
                    ) : showSuccess ? (
                        <>
                            <Check size={18} />
                            Saved!
                        </>
                    ) : (
                        <>
                            <Save size={18} />
                            Save Changes
                        </>
                    )}
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                {/* Sidebar Navigation */}
                <div className="lg:col-span-3 lg:sticky lg:top-24 space-y-2">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 group relative overflow-hidden ${isActive
                                    ? 'bg-white shadow-md shadow-[#C5A572]/10 text-[#C5A572]'
                                    : 'hover:bg-white text-slate-600 hover:shadow-sm'
                                    }`}
                            >
                                <div className={`
                                    w-10 h-10 rounded-lg flex items-center justify-center transition-colors
                                    ${isActive ? 'bg-[#C5A572]/10' : 'bg-slate-100 group-hover:bg-[#C5A572]/5'}
                                `}>
                                    <Icon size={20} className={isActive ? 'text-[#C5A572]' : 'text-slate-500 group-hover:text-[#C5A572]'} />
                                </div>
                                <div>
                                    <p className={`font-bold text-sm ${isActive ? 'text-slate-800' : 'text-slate-600'}`}>
                                        {tab.label}
                                    </p>
                                    <p className="text-xs text-slate-400 font-medium hidden sm:block">
                                        {tab.desc}
                                    </p>
                                </div>
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTabIndicator"
                                        className="absolute left-0 top-0 bottom-0 w-1 bg-[#C5A572]"
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Content Area */}
                <div className="lg:col-span-9">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm"
                        >
                            {/* PROFILE TAB */}
                            {activeTab === 'Profile' && (
                                <div className="space-y-8">
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-8 border-b border-gray-100">
                                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#C5A572] to-[#b09060] flex items-center justify-center text-white text-3xl font-bold shadow-xl shadow-[#C5A572]/20 relative group cursor-pointer transition-transform hover:scale-105">
                                            AD
                                            <div className="absolute inset-0 bg-black/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="text-xs font-semibold">Change</span>
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <h2 className="text-2xl font-bold text-slate-800">Admin User</h2>
                                            <div className="flex items-center gap-2">
                                                <span className="px-3 py-1 bg-[#C5A572]/10 text-[#C5A572] text-xs font-bold rounded-full border border-[#C5A572]/20">
                                                    {profile.role}
                                                </span>
                                                <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full border border-green-100 flex items-center gap-1">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                                    Active
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {[
                                            { label: 'First Name', key: 'firstName' },
                                            { label: 'Last Name', key: 'lastName' },
                                            { label: 'Email Address', key: 'email', type: 'email' },
                                            { label: 'Phone Number', key: 'phone', type: 'tel' }
                                        ].map((field) => (
                                            <div key={field.key} className="space-y-2 group">
                                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1 group-focus-within:text-[#C5A572] transition-colors">{field.label}</label>
                                                <input
                                                    type={field.type || 'text'}
                                                    value={profile[field.key]}
                                                    onChange={(e) => setProfile({ ...profile, [field.key]: e.target.value })}
                                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-transparent focus:bg-white focus:border-[#C5A572]/30 focus:shadow-lg focus:shadow-[#C5A572]/5 outline-none transition-all font-medium text-slate-700 placeholder:text-slate-400"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* SECURITY TAB */}
                            {activeTab === 'Security' && (
                                <div className="space-y-8">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h2 className="text-xl font-bold text-slate-800">Security</h2>
                                            <p className="text-sm text-slate-500">Manage your password settings.</p>
                                        </div>
                                        <button className="text-sm font-bold text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                                            <LogOut size={16} />
                                            Sign out all devices
                                        </button>
                                    </div>

                                    <div className="bg-slate-50 p-6 rounded-2xl space-y-4">
                                        <h3 className="font-bold text-slate-700 flex items-center gap-2">
                                            <Lock size={18} />
                                            Change Password
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <input type="password" placeholder="Current Password" className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-200 focus:border-[#C5A572] outline-none text-sm" />
                                            <input type="password" placeholder="New Password" className="w-full px-4 py-2.5 rounded-xl bg-white border border-gray-200 focus:border-[#C5A572] outline-none text-sm" />
                                        </div>
                                        <div className="flex justify-end">
                                            <button className="text-sm font-bold text-[#C5A572] hover:text-[#b09060]">Update Password</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Settings;

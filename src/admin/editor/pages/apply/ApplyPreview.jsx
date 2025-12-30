import React, { useMemo } from 'react';
import { User, Users, BookOpen, Send, Shield, CheckCircle2 } from 'lucide-react';

const ApplyPreview = ({ content }) => {
    // Parse content sections
    const sections = useMemo(() => {
        const map = {};
        if (!content || !Array.isArray(content)) return map;

        content.forEach(section => {
            let parsedContent = section.content;
            if (typeof parsedContent === 'string') {
                try {
                    parsedContent = JSON.parse(parsedContent);
                } catch { parsedContent = {}; }
            }
            map[section.section_key] = parsedContent || {};
        });
        return map;
    }, [content]);

    const hero = sections.hero || {};
    const studentSection = sections.student_section || {};
    const parentSection = sections.parent_section || {};
    const additionalSection = sections.additional_section || {};
    const submitSection = sections.submit_section || {};

    return (
        <div className="min-h-screen bg-gray-50 font-sans pb-24">
            {/* Header */}
            <div className="bg-primary text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
                        {hero.title || 'Online Application'}
                    </h1>
                    <p className="text-white/80 max-w-xl mx-auto text-base">
                        {hero.subtitle || 'Take the first step towards a bright future. Please fill out the form below accurately.'}
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-4 text-white/60 text-sm">
                        <Shield size={14} />
                        <span>{hero.security_text || 'Your data is encrypted and secure'}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-8 relative z-20">
                <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">

                    {/* Section 1: Student Details */}
                    <div className="p-6 md:p-8 border-b border-gray-100">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                <User size={20} />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">
                                    {studentSection.title || 'Student Details'}
                                </h2>
                                <p className="text-xs text-gray-500">
                                    {studentSection.subtitle || 'Information about the child'}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label>
                                <input
                                    disabled
                                    type="text"
                                    className="w-full p-2.5 border border-gray-200 rounded-lg text-gray-400 text-sm"
                                    placeholder="Enter student's full name"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Date of Birth</label>
                                <input
                                    disabled
                                    type="date"
                                    className="w-full p-2.5 border border-gray-200 rounded-lg text-gray-400 text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Gender *</label>
                                <select disabled className="w-full p-2.5 border border-gray-200 rounded-lg text-gray-400 text-sm bg-white">
                                    <option>Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Applying For Grade *</label>
                                <select disabled className="w-full p-2.5 border border-gray-200 rounded-lg text-gray-400 text-sm bg-white">
                                    <option>Select Grade</option>
                                    {(studentSection.grades || []).map((grade, idx) => (
                                        <option key={idx} value={grade.value}>{grade.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Parent Details */}
                    <div className="p-6 md:p-8 border-b border-gray-100 bg-gray-50/50">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-gray-900">
                                <Users size={20} />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">
                                    {parentSection.title || 'Parent / Guardian Details'}
                                </h2>
                                <p className="text-xs text-gray-500">
                                    {parentSection.subtitle || 'Contact information'}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Father's Name *</label>
                                <input disabled className="w-full p-2.5 border border-gray-200 rounded-lg text-gray-400 text-sm" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Mother's Name *</label>
                                <input disabled className="w-full p-2.5 border border-gray-200 rounded-lg text-gray-400 text-sm" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Email Address *</label>
                                <input disabled type="email" className="w-full p-2.5 border border-gray-200 rounded-lg text-gray-400 text-sm" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number *</label>
                                <input disabled type="tel" placeholder="+91 98765 43210" className="w-full p-2.5 border border-gray-200 rounded-lg text-gray-400 text-sm" />
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Additional Info */}
                    <div className="p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700">
                                <BookOpen size={20} />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">
                                    {additionalSection.title || 'Additional Information'}
                                </h2>
                                <p className="text-xs text-gray-500">
                                    {additionalSection.subtitle || 'Address and background'}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 text-left">
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Previous School</label>
                                <input disabled className="w-full p-2.5 border border-gray-200 rounded-lg text-gray-400 text-sm" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 mb-1">Residential Address *</label>
                                <textarea disabled rows="2" className="w-full p-2.5 border border-gray-200 rounded-lg text-gray-400 text-sm"></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Submit Bar */}
                    <div className="p-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                            <Shield size={12} />
                            {submitSection.privacy_text || 'Your information is protected and will not be shared.'}
                        </p>
                        <button
                            disabled
                            className="bg-primary text-white font-bold text-sm px-8 py-3 rounded-full shadow-lg flex items-center gap-2 opacity-75"
                        >
                            {submitSection.button_text || 'Submit Application'}
                            <Send size={16} />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ApplyPreview;

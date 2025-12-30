import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

const HeaderPreview = ({ content }) => {
    const sections = useMemo(() => {
        const map = {};
        if (!content || !Array.isArray(content)) return map;

        content.forEach(section => {
            let parsedContent = section.content;
            if (typeof parsedContent === 'string') {
                try { parsedContent = JSON.parse(parsedContent); } catch { parsedContent = {}; }
            }
            map[section.section_key] = parsedContent || {};
        });
        return map;
    }, [content]);

    const brand = sections.brand || {};
    const navigation = sections.navigation || {};
    const navLinks = navigation.links || [];

    return (
        <div className="min-h-[400px] bg-gray-100 p-8">
            <div className="text-center text-xs text-slate-400 mb-4 uppercase tracking-wider">Header Preview</div>

            {/* Simulated Header */}
            <div className="bg-white shadow-sm rounded-lg h-20 flex items-center px-6 max-w-4xl mx-auto">
                {/* Logo */}
                <div className="text-2xl font-serif font-bold text-primary tracking-tight">
                    {brand.logo_text || 'EduNet'}
                    <span className="text-amber-500">{brand.logo_accent || '.'}</span>
                </div>

                {/* Navigation */}
                <nav className="ml-auto flex items-center gap-6">
                    {navLinks.map((link, idx) => (
                        <span
                            key={idx}
                            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors uppercase tracking-wide cursor-pointer"
                        >
                            {link.name || 'Link'}
                        </span>
                    ))}
                </nav>
            </div>

            {/* Info */}
            <div className="mt-8 text-center text-xs text-slate-400">
                <p>This is a preview of how the header will appear on the website.</p>
                <p className="mt-1">The header contains {navLinks.length} navigation links.</p>
            </div>
        </div>
    );
};

export default HeaderPreview;

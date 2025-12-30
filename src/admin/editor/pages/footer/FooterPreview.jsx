import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const FooterPreview = ({ content }) => {
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
    const quickLinks = sections.quick_links || {};
    const programs = sections.programs || {};
    const contact = sections.contact_info || {};
    const copyright = sections.copyright || {};

    const socialLinks = brand.social_links || [];
    const quickLinksList = quickLinks.links || [];
    const programsList = programs.links || [];
    const copyrightLinks = copyright.links || [];

    const currentYear = new Date().getFullYear();
    const copyrightText = (copyright.text || '© {year} EduNet School').replace('{year}', currentYear);

    return (
        <div className="bg-primary-dark text-white pt-12 pb-6 text-sm">
            <div className="max-w-4xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

                    {/* Brand Column */}
                    <div>
                        <div className="text-xl font-serif font-bold text-white mb-4">
                            {brand.name || 'EduNet'}<span className="text-amber-400">{brand.accent || '.'}</span>
                        </div>
                        <p className="text-gray-300 text-xs leading-relaxed mb-4">
                            {brand.description || 'Description goes here'}
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((s, i) => (
                                <span key={i} className="text-gray-400 hover:text-white cursor-pointer text-xs">
                                    {s.label || 'Social'}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-base font-serif font-semibold mb-4 border-b border-white/20 pb-2 inline-block">
                            {quickLinks.title || 'Quick Links'}
                        </h3>
                        <ul className="space-y-2 text-xs text-gray-300">
                            {quickLinksList.map((link, i) => (
                                <li key={i}>{link.label || 'Link'}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h3 className="text-base font-serif font-semibold mb-4 border-b border-white/20 pb-2 inline-block">
                            {programs.title || 'Programs'}
                        </h3>
                        <ul className="space-y-2 text-xs text-gray-300">
                            {programsList.map((link, i) => (
                                <li key={i}>{link.label || 'Link'}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-base font-serif font-semibold mb-4 border-b border-white/20 pb-2 inline-block">
                            {contact.title || 'Get In Touch'}
                        </h3>
                        <ul className="space-y-3 text-xs text-gray-300">
                            <li className="flex items-start gap-2">
                                <MapPin size={14} className="text-amber-400 mt-0.5 shrink-0" />
                                <span>{contact.address || 'Address'}</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={14} className="text-amber-400 shrink-0" />
                                <span>{contact.phone || 'Phone'}</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={14} className="text-amber-400 shrink-0" />
                                <span>{contact.email || 'Email'}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
                    <p>{copyrightText}</p>
                    <div className="flex gap-4">
                        {copyrightLinks.map((link, i) => (
                            <span key={i}>{link.label || 'Link'}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterPreview;

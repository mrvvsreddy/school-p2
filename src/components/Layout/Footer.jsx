import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Loader2 } from 'lucide-react';
import FadeIn from '../UI/FadeIn';

const Footer = () => {
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchFooterContent();
    }, []);

    const fetchFooterContent = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/site-content/public/footer`);
            if (response.ok) {
                const data = await response.json();
                const parsed = {};
                data.forEach(section => {
                    let sectionContent = section.content;
                    if (typeof sectionContent === 'string') {
                        try { sectionContent = JSON.parse(sectionContent); } catch { sectionContent = {}; }
                    }
                    parsed[section.section_key] = sectionContent || {};
                });
                setContent(parsed);
            }
        } catch (err) {
            console.error('Failed to fetch footer content:', err);
        } finally {
            setLoading(false);
        }
    };

    // Don't render until data is loaded
    if (loading || !content) {
        return (
            <footer className="bg-primary-dark text-white py-16 flex items-center justify-center">
                <Loader2 className="animate-spin text-white" size={32} />
            </footer>
        );
    }

    const brand = content.brand || {};
    const quickLinks = content.quick_links || {};
    const programs = content.programs || {};
    const contactInfo = content.contact_info || {};
    const copyright = content.copyright || {};

    const socialLinks = brand.social_links || [];
    const quickLinksList = quickLinks.links || [];
    const programsList = programs.links || [];
    const copyrightLinks = copyright.links || [];

    const currentYear = new Date().getFullYear();
    const copyrightText = (copyright.text || '').replace('{year}', currentYear);

    const getSocialIcon = (label) => {
        const lower = (label || '').toLowerCase();
        if (lower.includes('facebook')) return <Facebook size={18} />;
        if (lower.includes('twitter')) return <Twitter size={18} />;
        if (lower.includes('instagram')) return <Instagram size={18} />;
        if (lower.includes('linkedin')) return <Linkedin size={18} />;
        return null;
    };

    return (
        <footer className="bg-primary-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <FadeIn delay={100}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                        {/* Column 1: Brand & About */}
                        <div>
                            <div className="text-2xl font-serif font-bold text-white mb-6">
                                {brand.name}<span className="text-accent">{brand.accent}</span>
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                {brand.description}
                            </p>
                            <div className="flex gap-4">
                                {socialLinks.map((social, i) => (
                                    <a key={i} href={social.url || '#'} className="text-gray-400 hover:text-white transition-colors">
                                        {getSocialIcon(social.label)}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div>
                            <h3 className="text-lg font-serif font-semibold mb-6 border-b border-white/20 pb-2 inline-block">
                                {quickLinks.title}
                            </h3>
                            <ul className="space-y-3 text-sm text-gray-300">
                                {quickLinksList.map((link, i) => (
                                    <li key={i}>
                                        <Link to={link.url || '#'} className="hover:text-accent transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Programs */}
                        <div>
                            <h3 className="text-lg font-serif font-semibold mb-6 border-b border-white/20 pb-2 inline-block">
                                {programs.title}
                            </h3>
                            <ul className="space-y-3 text-sm text-gray-300">
                                {programsList.map((link, i) => (
                                    <li key={i}>
                                        <Link to={link.url || '#'} className="hover:text-accent transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4: Contact Info */}
                        <div>
                            <h3 className="text-lg font-serif font-semibold mb-6 border-b border-white/20 pb-2 inline-block">
                                {contactInfo.title}
                            </h3>
                            <ul className="space-y-4 text-sm text-gray-300">
                                {contactInfo.address && (
                                    <li className="flex items-start gap-3">
                                        <MapPin size={18} className="text-accent mt-1 shrink-0" />
                                        <span>{contactInfo.address}</span>
                                    </li>
                                )}
                                {contactInfo.phone && (
                                    <li className="flex items-center gap-3">
                                        <Phone size={18} className="text-accent shrink-0" />
                                        <span>{contactInfo.phone}</span>
                                    </li>
                                )}
                                {contactInfo.email && (
                                    <li className="flex items-center gap-3">
                                        <Mail size={18} className="text-accent shrink-0" />
                                        <span>{contactInfo.email}</span>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                        <p>{copyrightText}</p>
                        <div className="flex gap-6">
                            {copyrightLinks.map((link, i) => (
                                <Link key={i} to={link.url || '#'} className="hover:text-white">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </footer>
    );
};

export default Footer;

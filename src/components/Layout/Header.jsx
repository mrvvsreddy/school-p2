import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Loader2 } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        setIsMounted(true);
        fetchHeaderContent();
    }, []);

    const fetchHeaderContent = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/v1/site-content/public/header`);
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
            console.error('Failed to fetch header content:', err);
        } finally {
            setLoading(false);
        }
    };

    // Don't render until data is loaded
    if (loading || !content) {
        return (
            <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50 h-20 flex items-center justify-center">
                <Loader2 className="animate-spin text-primary" size={24} />
            </header>
        );
    }

    const brand = content.brand || {};
    const navigation = content.navigation || {};
    const navLinks = navigation.links || [];

    return (
        <header className={`bg-white shadow-sm fixed top-0 left-0 w-full z-50 h-20 transition-transform duration-700 ease-out transform ${isMounted ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
            <div className="container mx-auto px-4 md:px-6 h-full flex items-center justify-between">

                {/* Logo Area */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="text-2xl font-serif font-bold text-primary tracking-tight">
                        {brand.logo_text}<span className="text-accent">{brand.logo_accent}</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link, i) => (
                        <Link
                            key={i}
                            to={link.path || '/'}
                            className={`text-sm font-medium transition-colors uppercase tracking-wide relative group ${location.pathname === link.path ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                        </Link>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center gap-4">
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-gray-700"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-20 shadow-lg py-4">
                    <nav className="flex flex-col">
                        {navLinks.map((link, i) => (
                            <Link
                                key={i}
                                to={link.path || '/'}
                                className="px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;

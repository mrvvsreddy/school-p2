import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Admissions', path: '/admissions' },
        { name: 'Academics', path: '/academics' },
        { name: 'Infrastructure', path: '/infrastructure' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50 h-20">
            <div className="container mx-auto px-4 md:px-6 h-full flex items-center justify-between">

                {/* Logo Area */}
                <Link to="/" className="flex items-center gap-2">
                    {/* Placeholder for Logo - extracting from design color */}
                    <div className="text-2xl font-serif font-bold text-primary tracking-tight">
                        EduNet<span className="text-accent">.</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors uppercase tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Action Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    <button className="text-gray-500 hover:text-primary">
                        <Search size={20} />
                    </button>
                    <button className="bg-white border boundary-gray-300 text-gray-700 px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-gray-50 transition-colors">
                        Virtual Tour
                    </button>
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
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
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

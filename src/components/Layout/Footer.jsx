import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Column 1: Brand & About */}
                    <div>
                        <div className="text-2xl font-serif font-bold text-white mb-6">
                            EduNet<span className="text-accent">.</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            The highest reputed educational institution in Boston. We focus on paying strong attention to every student, ensuring they achieve their potential.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={18} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={18} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={18} /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-serif font-semibold mb-6 border-b border-white/20 pb-2 inline-block">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link to="/admissions" className="hover:text-accent transition-colors">Admissions</Link></li>
                            <li><Link to="/academics" className="hover:text-accent transition-colors">Academics</Link></li>
                            <li><Link to="/faculty" className="hover:text-accent transition-colors">Faculty</Link></li>
                            <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Programs */}
                    <div>
                        <h3 className="text-lg font-serif font-semibold mb-6 border-b border-white/20 pb-2 inline-block">Programs</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><Link to="/academics#arts" className="hover:text-accent transition-colors">Arts & Humanities</Link></li>
                            <li><Link to="/academics#science" className="hover:text-accent transition-colors">Science & Technology</Link></li>
                            <li><Link to="/academics#business" className="hover:text-accent transition-colors">Business & Management</Link></li>
                            <li><Link to="/academics#engineering" className="hover:text-accent transition-colors">Engineering</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h3 className="text-lg font-serif font-semibold mb-6 border-b border-white/20 pb-2 inline-block">Get In Touch</h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-accent mt-1 shrink-0" />
                                <span>123 School Lane, Boston, MA 02108, United States</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-accent shrink-0" />
                                <span>+1 (555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-accent shrink-0" />
                                <span>admissions@edunet.edu</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <p>&copy; {new Date().getFullYear()} EduNet School. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React, { useState } from 'react';
import { HiArrowRight, HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Footer = () => {
    // Top Stats logic or hardcoded
    const stats = [
        { value: "150+", label: "Degree programs" },
        { value: "20%", label: "International Students" },
        { value: "20", label: "Years of Experience" },
    ];

    return (
        <footer>
            {/* Top CTA & Stats Section */}
            <div className="bg-white py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 border-2 border-edu-red rotate-45 flex items-center justify-center">
                                <span className="text-edu-red text-2xl -rotate-45">🎓</span>
                            </div>
                        </div>
                        <span className="text-edu-red font-bold uppercase tracking-widest text-xs">Knowledge is power</span>
                        <h2 className="text-3xl lg:text-5xl font-serif font-bold text-edu-dark mt-4 leading-tight">
                            Education, empowering them to <span className="text-edu-red underline decoration-edu-red/30 underline-offset-8">become</span>
                            <br /> well-rounded <span className="text-edu-red">leaders</span> who make a positive
                            <br /> impact on the world.
                        </h2>
                    </div>

                    {/* Stats row */}
                    <div className="flex flex-wrap justify-between items-center border-t border-b border-gray-100 py-12 mb-16">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex-1 text-center py-4 border-r last:border-0 border-gray-100 min-w-[200px]">
                                <h4 className="text-4xl lg:text-5xl font-bold font-serif text-gray-200">{stat.value}</h4>
                                <p className="tex-xs font-bold uppercase tracking-widest text-edu-red mt-2">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Admission Form + Image Split */}
                    <div className="flex flex-col lg:flex-row shadow-2xl rounded-sm overflow-hidden bg-white">
                        <div className="w-full lg:w-1/2 h-96 lg:h-auto relative">
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop"
                                alt="Admission"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
                            <h3 className="text-3xl font-serif font-bold mb-8">Apply for <span className="underline decoration-edu-red/30">admission?</span></h3>
                            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                                Make a grand entrance with the most prestigious university. We are always accepting
                                new students for the upcoming academic year.
                            </p>
                            <div className="flex gap-4">
                                <input
                                    type="email"
                                    placeholder="Your Email Address"
                                    className="flex-1 bg-gray-50 border-none px-6 py-4 text-sm focus:ring-1 focus:ring-edu-red outline-none"
                                />
                                <button className="bg-edu-red text-white px-8 py-4 uppercase font-bold text-xs tracking-widest hover:bg-edu-dark transition-colors">
                                    Subscribe <HiArrowRight className="inline ml-1 mb-0.5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Links - Dark Red Background */}
            <div className="bg-[#5C0B14] text-white pt-24 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                        {/* Brand Column */}
                        <div>
                            <div className="flex items-center gap-2 mb-8">
                                <div className="w-8 h-8 bg-white/10 rotate-45 flex items-center justify-center rounded-sm">
                                    <span className="text-white font-bold -rotate-45">E</span>
                                </div>
                                <span className="text-2xl font-bold font-serif tracking-tight">EDUHET.</span>
                            </div>
                            <p className="text-white/60 text-sm leading-relaxed mb-8">
                                The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                            </p>
                            <div className="flex gap-4">
                                {/* Social Icons */}
                                {['Fb', 'Tw', 'In', 'Yt'].map((social) => (
                                    <a key={social} href="#" className="w-8 h-8 border border-white/20 flex items-center justify-center text-xs hover:bg-white hover:text-edu-red transition-all rounded-sm">
                                        {social}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Essential Links */}
                        <div>
                            <h4 className="font-bold font-serif text-lg mb-8">Essential</h4>
                            <ul className="space-y-4 text-sm text-white/60">
                                {['About', 'Admissions', 'Academics', 'Research', 'Campus Life'].map(item => (
                                    <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>

                        {/* Programs */}
                        <div>
                            <h4 className="font-bold font-serif text-lg mb-8">Programs</h4>
                            <ul className="space-y-4 text-sm text-white/60">
                                {['Undergraduate', 'Graduate', 'Professional', 'Continuing Education', 'Online Learning'].map(item => (
                                    <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                                ))}
                            </ul>
                        </div>

                        {/* Get in Touch */}
                        <div>
                            <h4 className="font-bold font-serif text-lg mb-8">Get in Touch</h4>
                            <ul className="space-y-6 text-sm text-white/60">
                                <li className="flex items-start gap-4">
                                    <HiOutlinePhone className="text-xl shrink-0 mt-1" />
                                    <div>
                                        <p>+1 123 456 7890</p>
                                        <p className="text-xs opacity-60">Mon - Fri 9am - 6pm</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <HiOutlineMail className="text-xl shrink-0 mt-1" />
                                    <div>
                                        <p>info@eduhet.com</p>
                                        <p className="text-xs opacity-60">Online Support</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <HiOutlineLocationMarker className="text-xl shrink-0 mt-1" />
                                    <div>
                                        <p>New York, USA</p>
                                        <p className="text-xs opacity-60">NY 10012, US</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
                        <p>Copyright © 2024 EDUHET. All Rights Reserved.</p>
                        <div className="flex gap-8 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white">Privacy Policy</a>
                            <a href="#" className="hover:text-white">Terms of Use</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, GraduationCap } from 'lucide-react';

const NotFound = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <div className="min-h-screen bg-[#FCFCFC] relative flex items-center justify-center p-6 overflow-hidden">
            <Helmet>
                <title>404 - Page Not Found | EduNet School</title>
            </Helmet>

            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(#6d0b1a 1px, transparent 1px)`,
                    backgroundSize: '32px 32px'
                }}
            />

            {/* Decorative Blobs */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                className="absolute -top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full border border-primary/5 border-dashed"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                className="absolute top-[20%] -left-[10%] w-[40vw] h-[40vw] rounded-full border border-primary/5 border-dashed"
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center"
            >
                {/* 404 Display */}
                <motion.div
                    variants={itemVariants}
                    className="relative mb-6"
                >
                    <h1 className="text-[140px] md:text-[220px] font-serif font-black leading-none text-primary/5 select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white p-4 rounded-full shadow-xl shadow-primary/10 border border-primary/10">
                            <Search size={48} className="text-primary" />
                        </div>
                    </div>
                </motion.div>

                {/* Text Content */}
                <motion.div variants={itemVariants} className="max-w-xl mx-auto mb-10 mt-[-40px]">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-dark mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-sans">
                        We couldn't find the page you're looking for. It might have been removed, renamed, or you might have typed the link incorrectly.
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto mb-12">
                    <button
                        onClick={() => window.history.back()}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg border-2 border-primary/20 hover:border-primary text-primary font-semibold transition-all duration-300 hover:bg-primary/5 group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Go Back
                    </button>
                    <Link
                        to="/"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-primary text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
                    >
                        <Home size={20} />
                        Back to Home
                    </Link>
                </motion.div>

                {/* Quick Links Section */}
                <motion.div variants={itemVariants} className="w-full border-t border-gray-200 pt-8">
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">Popular Destinations</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: 'Admissions', path: '/admissions' },
                            { label: 'Academics', path: '/academics' },
                            { label: 'Facilities', path: '/facilities' },
                            { label: 'Contact Us', path: '/contact' },
                        ].map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="group flex items-center justify-center p-3 rounded-lg bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
                            >
                                <span className="text-gray-600 group-hover:text-primary font-medium">{link.label}</span>
                            </Link>
                        ))}
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-12 text-gray-400 text-sm">
                    © {new Date().getFullYear()} EduNet School. All rights reserved.
                </motion.div>
            </motion.div>
        </div>
    );
};

export default NotFound;

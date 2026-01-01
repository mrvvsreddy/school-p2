import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { AlertTriangle, Home, RefreshCw, ArrowLeft, ShieldAlert, Mail } from 'lucide-react';

const ErrorPage = ({
    title = "Something Went Wrong",
    message = "We encountered an unexpected error. Please try again later.",
    showRetry = true,
    errorCode = null
}) => {
    const handleRetry = () => {
        window.location.reload();
    };

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <div className="min-h-screen bg-[#FCFCFC] relative flex items-center justify-center p-6 overflow-hidden">
            <Helmet>
                <title>Error | EduNet School</title>
            </Helmet>

            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(#6d0b1a 1px, transparent 1px)`,
                    backgroundSize: '32px 32px'
                }}
            />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 w-full max-w-lg bg-white p-8 md:p-12 rounded-2xl shadow-xl shadow-gray-200 border border-gray-100/50 text-center"
            >
                {/* Icon */}
                <motion.div
                    variants={itemVariants}
                    className="w-20 h-20 mx-auto mb-8 relative"
                >
                    <div className="absolute inset-0 bg-red-50 rounded-full animate-pulse" />
                    <div className="relative bg-white border-2 border-red-100 rounded-full w-full h-full flex items-center justify-center text-red-500 shadow-sm">
                        <AlertTriangle size={36} />
                    </div>
                </motion.div>

                {/* Error Code Tag */}
                {errorCode && (
                    <motion.div variants={itemVariants} className="mb-6">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 font-mono text-xs uppercase tracking-wider font-semibold border border-red-100">
                            <ShieldAlert size={12} />
                            Code: {errorCode}
                        </span>
                    </motion.div>
                )}

                {/* Content */}
                <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 tracking-tight">
                    {title}
                </motion.h1>

                <motion.p variants={itemVariants} className="text-gray-500 text-lg mb-10 leading-relaxed font-sans">
                    {message}
                </motion.p>

                {/* Actions */}
                <motion.div variants={itemVariants} className="space-y-3">
                    {showRetry && (
                        <button
                            onClick={handleRetry}
                            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary-light transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5"
                        >
                            <RefreshCw size={18} className="animate-[spin_4s_linear_infinite]" />
                            <span>Try Again</span>
                        </button>
                    )}

                    <Link
                        to="/"
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all"
                    >
                        <Home size={18} />
                        <span>Return Home</span>
                    </Link>
                </motion.div>

                <motion.button
                    variants={itemVariants}
                    onClick={() => window.location.href = "mailto:support@edunet.com"}
                    className="mt-8 text-gray-400 hover:text-primary text-sm font-medium transition-colors flex items-center justify-center gap-2 mx-auto group"
                >
                    <Mail size={14} />
                    <span>Contact Support</span>
                </motion.button>
            </motion.div>
        </div>
    );
};

export default ErrorPage;

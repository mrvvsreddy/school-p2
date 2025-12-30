import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-primary flex items-center justify-center p-4">
            <Helmet>
                <title>404 - Page Not Found | EduNet School</title>
            </Helmet>

            <div className="text-center">
                {/* Large 404 */}
                <div className="relative mb-8">
                    <h1 className="text-[180px] md:text-[250px] font-black text-white/5 leading-none select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-24 h-24 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                                <Search size={48} className="text-amber-400" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Page Not Found</h2>
                        </div>
                    </div>
                </div>

                <p className="text-gray-400 text-lg max-w-md mx-auto mb-8">
                    Oops! The page you're looking for doesn't exist or has been moved to a new location.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-primary font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                        <Home size={20} />
                        Go Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all duration-300 border border-white/20"
                    >
                        <ArrowLeft size={20} />
                        Go Back
                    </button>
                </div>

                {/* Helpful Links */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <p className="text-gray-500 text-sm mb-4">You might be looking for:</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {[
                            { label: 'About Us', path: '/about' },
                            { label: 'Academics', path: '/academics' },
                            { label: 'Admissions', path: '/admissions' },
                            { label: 'Contact', path: '/contact' },
                        ].map(link => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-sm text-gray-400 hover:text-amber-400 transition-colors px-3 py-1 rounded-full bg-white/5 hover:bg-white/10"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;

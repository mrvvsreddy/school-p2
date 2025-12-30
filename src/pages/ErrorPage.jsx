import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, Home, RefreshCw, ArrowLeft } from 'lucide-react';

const ErrorPage = ({
    title = "Something Went Wrong",
    message = "We encountered an unexpected error. Please try again later.",
    showRetry = true,
    errorCode = null
}) => {
    const handleRetry = () => {
        window.location.reload();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 flex items-center justify-center p-4">
            <Helmet>
                <title>Error | EduNet School</title>
            </Helmet>

            <div className="text-center max-w-lg">
                {/* Error Icon */}
                <div className="w-24 h-24 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center animate-pulse">
                    <AlertTriangle size={48} className="text-red-400" />
                </div>

                {/* Error Code */}
                {errorCode && (
                    <span className="inline-block px-3 py-1 bg-red-500/20 text-red-400 text-sm font-mono rounded-full mb-4">
                        Error {errorCode}
                    </span>
                )}

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {title}
                </h1>

                {/* Message */}
                <p className="text-gray-400 text-lg mb-8">
                    {message}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {showRetry && (
                        <button
                            onClick={handleRetry}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-primary font-bold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            <RefreshCw size={20} />
                            Try Again
                        </button>
                    )}
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all duration-300 border border-white/20"
                    >
                        <Home size={20} />
                        Go Home
                    </Link>
                </div>

                {/* Back Button */}
                <button
                    onClick={() => window.history.back()}
                    className="mt-6 inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                    <ArrowLeft size={16} />
                    Go back to previous page
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;

import React from 'react';
import { Helmet } from 'react-helmet-async';

const Infrastructure = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Helmet>
                <title>Infrastructure | EduNet School</title>
                <meta name="description" content="World-class facilities at EduNet School. Libraries, labs, sports fields, and smart classrooms." />
            </Helmet>

            <div className="bg-primary text-white py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Infrastructure</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 py-12">
                <p className="text-gray-700">Our campus is equipped with state-of-the-art facilities to ensure a conductive learning environment.</p>
                {/* Placeholder for images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <div className="h-64 bg-gray-200 rounded-sm"></div>
                    <div className="h-64 bg-gray-200 rounded-sm"></div>
                </div>
            </div>
        </div>
    );
}

export default Infrastructure;

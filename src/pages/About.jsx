import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Helmet>
                <title>About Us | EduNet School</title>
                <meta name="description" content="Learn about EduNet School's history, mission, and vision. 50 years of excellence in education." />
            </Helmet>

            <div className="bg-primary text-white py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About Us</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="bg-white p-8 rounded-sm shadow-sm">
                    <h2 className="text-2xl font-serif font-bold mb-4">Our History</h2>
                    <p className="mb-4 text-gray-700">Founded in 1985, EduNet School has been a beacon of knowledge...</p>
                    <h2 className="text-2xl font-serif font-bold mb-4 mt-8">Mission & Vision</h2>
                    <p className="text-gray-700">To empower students to become global leaders...</p>
                </div>
            </div>
        </div>
    );
}

export default About;

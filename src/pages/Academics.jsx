import React from 'react';
import { Helmet } from 'react-helmet-async';

const Academics = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Helmet>
                <title>Academics | EduNet School</title>
                <meta name="description" content="Explore our academic programs: Arts, Science, Business, and Engineering." />
            </Helmet>

            <div className="bg-primary text-white py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Academics</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 py-12">
                <section id="arts" className="mb-12">
                    <h2 className="text-2xl font-serif font-bold mb-4 border-b pb-2">Arts & Humanities</h2>
                    <p className="text-gray-700">Fostering creativity and critical thinking...</p>
                </section>
                <section id="science" className="mb-12">
                    <h2 className="text-2xl font-serif font-bold mb-4 border-b pb-2">Science & Technology</h2>
                    <p className="text-gray-700">Cutting-edge labs and research opportunities...</p>
                </section>
                <section id="business" className="mb-12">
                    <h2 className="text-2xl font-serif font-bold mb-4 border-b pb-2">Business & Management</h2>
                    <p className="text-gray-700">Developing future entrepreneurs...</p>
                </section>
            </div>
        </div>
    );
}

export default Academics;

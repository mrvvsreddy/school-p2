import React from 'react';
import FadeIn from '../UI/FadeIn';

const Methodology = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:w-1/2">
                        <FadeIn>
                            <span className="text-accent font-bold tracking-widest text-xs uppercase block mb-2">How We Teach</span>
                            <h2 className="text-4xl font-serif font-bold text-primary mb-6">Innovative Methodology</h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                We believe learning goes beyond textbooks. Our methodology integrates modern pedagogies with traditional values to clearer a holistic learning environment.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mt-8">
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-lg mb-2 text-primary">Experiential</h4>
                                    <p className="text-sm text-gray-600">Learning by doing through projects and experiments.</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-lg mb-2 text-primary">Collaborative</h4>
                                    <p className="text-sm text-gray-600">Group activities that foster teamwork and communication.</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-lg mb-2 text-primary">Digital-Native</h4>
                                    <p className="text-sm text-gray-600">Smart classrooms and e-learning integration.</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                    <h4 className="font-bold text-lg mb-2 text-primary">Personalized</h4>
                                    <p className="text-sm text-gray-600">Tailored attention to individual student needs.</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                    <div className="md:w-1/2 relative">
                        <FadeIn delay={200}>
                            <div className="absolute -inset-4 bg-primary/5 rounded-2xl -z-10 transform rotate-3"></div>
                            <img
                                src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2670&auto=format&fit=crop"
                                alt="Classroom Interaction"
                                className="rounded-xl shadow-2xl w-full"
                            />
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;

import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="bg-gradient-to-br from-white to-gray-50 relative overflow-hidden pt-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between min-h-[500px] gap-8">

                    {/* Left: Content - More Concise & Dynamic */}
                    <div className="w-full md:w-5/12 z-10 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="w-8 h-[2px] bg-accent"></span>
                            <span className="text-primary font-bold uppercase tracking-widest text-[10px]">Welcome to EduNet</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 text-gray-900">
                            Inspiring <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Excellence</span> <br />
                            in Education.
                        </h1>

                        <p className="text-base text-gray-600 mb-8 max-w-sm leading-relaxed">
                            A legacy of 50 years in shaping leaders. Join a diverse community dedicated to holistic growth and academic brilliance.
                        </p>

                        <button className="group bg-primary text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider flex items-center gap-2 transition-all hover:bg-primary-dark hover:shadow-lg hover:pr-6">
                            Explore Campus <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>

                    {/* Right: Modern Dynamic Image Layout */}
                    <div className="w-full md:w-6/12 relative h-[400px] md:h-[500px]">
                        {/* Main Image with dynamic border radius */}
                        <div className="absolute inset-0 bg-gray-200 rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-700">
                            <img
                                src="/hero-student.png"
                                alt="Student walking on campus"
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.src = 'https://placehold.co/800x600/6d0b1a/white?text=EduNet+Student' }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl animate-bounce-slow hidden md:block">
                            <div className="flex items-center gap-3">
                                <div className="bg-accent/20 p-2 rounded-full">
                                    <span className="text-2xl font-bold text-primary">#1</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase">Ranked</p>
                                    <p className="text-sm font-bold text-gray-900">Best in Boston</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;

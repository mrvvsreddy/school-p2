import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = ({ data, loading }) => {
    // Default values for fallback
    const heroData = data || {};
    const tagline = heroData.tagline || 'Welcome to EduNet';
    const title = heroData.title || 'Inspiring Excellence in Education.';
    const subtitle = heroData.subtitle || 'A legacy of 50 years in shaping leaders. Join a diverse community dedicated to holistic growth and academic brilliance.';
    const buttonText = heroData.button?.text || 'Explore Campus';
    const buttonUrl = heroData.button?.url || '/about';
    const image = heroData.image || '/hero-student.png';
    const badge = heroData.badge || { rank: '#1', text: 'Best in Boston' };

    return (
        <section className="bg-gradient-to-br from-white to-gray-50 relative overflow-hidden py-8 md:py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Left: Content */}
                    <div className="w-full md:w-5/12 z-10 order-2 md:order-1">
                        <div className="inline-flex items-center gap-2 mb-3">
                            <span className="w-8 h-[2px] bg-accent"></span>
                            <span className="text-primary font-bold uppercase tracking-widest text-[10px]">{tagline}</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-4 text-gray-900">
                            {title}
                        </h1>

                        <p className="text-sm md:text-base text-gray-600 mb-6 max-w-sm leading-relaxed">
                            {subtitle}
                        </p>

                        <Link
                            to={buttonUrl}
                            className="group bg-primary text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-all hover:bg-primary-dark hover:shadow-lg"
                        >
                            {buttonText} <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full md:w-6/12 relative h-[280px] md:h-[350px] order-1 md:order-2">
                        <div className="absolute inset-0 bg-gray-200 rounded-tl-[80px] rounded-br-[80px] overflow-hidden shadow-xl">
                            <img
                                src={image}
                                alt="Student walking on campus"
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.src = 'https://placehold.co/800x600/6d0b1a/white?text=EduNet+Student' }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-lg hidden md:block">
                            <div className="flex items-center gap-2">
                                <span className="text-xl font-bold text-primary">{badge.rank}</span>
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase">Ranked</p>
                                    <p className="text-xs font-bold text-gray-900">{badge.text}</p>
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

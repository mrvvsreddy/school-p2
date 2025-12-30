import React from 'react';
import FadeIn from '../UI/FadeIn';

const AcademicsHero = ({ data }) => {
    // If no data, don't render
    if (!data) return null;

    return (
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src={data.image}
                    alt="Academic Excellence"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = 'https://placehold.co/1920x900/580000/white?text=Academics' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <FadeIn delay={0}>
                    {data.tagline && (
                        <span className="text-secondary font-bold tracking-[0.2em] text-sm uppercase mb-6 block">
                            {data.tagline}
                        </span>
                    )}
                    {data.title && (
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-white skew-y-0">
                            {data.title}
                        </h1>
                    )}
                    {data.subtitle && (
                        <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto font-light leading-relaxed">
                            {data.subtitle}
                        </p>
                    )}
                </FadeIn>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </div>
    );
};

export default AcademicsHero;

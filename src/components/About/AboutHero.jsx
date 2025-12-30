import React from 'react';
import FadeIn from '../UI/FadeIn';

const AboutHero = ({ data }) => {
    if (!data) return null;

    return (
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src={data.image}
                    alt="School Building"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <FadeIn delay={0}>
                    {data.tagline && <span className="text-secondary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">{data.tagline}</span>}
                    {data.title && <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white drop-shadow-md">{data.title}</h1>}
                    {data.subtitle && (
                        <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
                            {data.subtitle}
                        </p>
                    )}
                </FadeIn>
            </div>
        </div>
    );
};

export default AboutHero;

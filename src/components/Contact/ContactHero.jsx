import React from 'react';
import FadeIn from '../UI/FadeIn';

const ContactHero = ({ data }) => {
    if (!data) return null;

    return (
        <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
            <div className="absolute inset-0 z-0">
                {data.image && (
                    <img
                        src={data.image}
                        alt="Contact Us"
                        className="w-full h-full object-cover opacity-80"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/90"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <FadeIn>
                    {data.tagline && <span className="text-secondary font-bold tracking-[0.2em] text-sm uppercase mb-4 block">{data.tagline}</span>}
                    {data.title && <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white drop-shadow-md">{data.title}</h1>}
                    {data.subtitle && <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">{data.subtitle}</p>}
                </FadeIn>
            </div>
        </div>
    );
};

export default ContactHero;

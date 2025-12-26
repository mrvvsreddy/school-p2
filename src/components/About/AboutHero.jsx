import React from 'react';
import FadeIn from '../UI/FadeIn';

const AboutHero = () => {
    return (
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2669&auto=format&fit=crop"
                    alt="School Building"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = 'https://placehold.co/1920x1080/580000/white?text=EduNet+History' }}
                />
                <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <FadeIn delay={0}>
                    <span className="text-secondary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Since 1985</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white drop-shadow-md">Our Legacy</h1>
                    <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
                        Cultivating knowledge, character, and community for over four decades.
                    </p>
                </FadeIn>
            </div>
        </div>
    );
};

export default AboutHero;

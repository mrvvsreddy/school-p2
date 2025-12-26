import React from 'react';
import FadeIn from '../UI/FadeIn';

const AdmissionsHero = () => {
    return (
        <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop"
                    alt="Students studying"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = 'https://placehold.co/1920x800/580000/white?text=%20' }}
                />
                <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <FadeIn delay={0}>
                    <span className="text-secondary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Join Our Community</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white drop-shadow-md">Admissions Open</h1>
                    <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
                        Begin your journey towards academic excellence and personal growth for the 2024-25 academic year.
                    </p>
                </FadeIn>
            </div>
        </div>
    );
};

export default AdmissionsHero;

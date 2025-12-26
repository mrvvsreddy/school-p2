import React from 'react';
import FadeIn from '../UI/FadeIn';

const ContactHero = () => {
    return (
        <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gray-900">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1423666639041-f1400517185b?q=80&w=2674&auto=format&fit=crop"
                    alt="Contact Us"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/90"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <FadeIn>
                    <span className="text-secondary font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Get in Touch</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white drop-shadow-md">Contact Us</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
                        We are here to answer your questions and welcome you to our community.
                    </p>
                </FadeIn>
            </div>
        </div>
    );
};

export default ContactHero;

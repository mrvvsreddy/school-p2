import React from 'react';
import FadeIn from '../UI/FadeIn';
import { Wifi, Monitor, Server, Lock } from 'lucide-react';

const DigitalCampus = () => {
    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden">
            {/* Tech Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')]"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <FadeIn>
                            <span className="text-secondary font-bold tracking-widest text-xs uppercase block mb-2">Future Ready</span>
                            <h2 className="text-4xl font-serif font-bold mb-6 text-white">Digital Campus</h2>
                            <p className="text-lg text-white/80 mb-8 leading-relaxed">
                                Seamlessly integrating technology into education. Our campus is enabled with high-speed connectivity and smart infrastructure to support 21st-century learning.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-3 rounded-lg text-accent">
                                        <Wifi size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-white">Campus WiFi</h4>
                                        <p className="text-sm text-gray-400">Secure high-speed internet access across the school.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-3 rounded-lg text-accent">
                                        <Monitor size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-white">Smart Boards</h4>
                                        <p className="text-sm text-gray-400">Interactive panels in every classroom.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-3 rounded-lg text-accent">
                                        <Server size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-white">LMS Integration</h4>
                                        <p className="text-sm text-gray-400">Digital assignments and progress tracking.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-3 rounded-lg text-accent">
                                        <Lock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-white">Cyber Safety</h4>
                                        <p className="text-sm text-gray-400">Advanced firewalls and content filtering.</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="lg:w-1/2">
                        <FadeIn delay={200}>
                            <div className="relative">
                                <div className="absolute inset-0 bg-accent/20 rounded-2xl transform rotate-6 translate-x-4 translate-y-4"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop"
                                    alt="Digital Learning"
                                    className="rounded-2xl shadow-2xl relative z-10 border border-white/10"
                                />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DigitalCampus;

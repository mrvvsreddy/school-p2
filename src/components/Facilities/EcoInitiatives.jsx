import React from 'react';
import FadeIn from '../UI/FadeIn';
import { Sun, Droplets, Recycle, TreePine, ArrowUpRight } from 'lucide-react';

const EcoInitiatives = () => {
    return (
        <section className="py-32 bg-slate-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-500/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-teal-500/10 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <FadeIn>
                            <span className="text-emerald-400 font-bold tracking-widest text-xs uppercase block mb-3 pl-1">Sustainability</span>
                            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
                                A Living Laboratory <br /> for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Greener Future</span>
                            </h2>
                        </FadeIn>
                    </div>
                    <FadeIn delay={200}>
                        <p className="text-gray-400 max-w-md text-lg leading-relaxed">
                            Our campus isn't just a place to learn—it's a testament to our commitment to the planet. We integrate sustainable practices into daily life.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
                    {/* Solar - Large Card */}
                    <div className="md:col-span-8 relative group rounded-3xl overflow-hidden h-[300px] md:h-full">
                        <img
                            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2672&auto=format&fit=crop"
                            alt="Solar Power"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                            <div className="flex justify-between items-end">
                                <div>
                                    <div className="bg-emerald-500/20 backdrop-blur-md p-3 rounded-lg text-emerald-300 w-fit mb-4">
                                        <Sun size={24} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-2">Solar Powered Campus</h3>
                                    <p className="text-gray-300 max-w-lg">Generating 40% of our energy needs through rooftop photovoltaic arrays.</p>
                                </div>
                                <div className="bg-white/10 p-3 rounded-full backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <ArrowUpRight size={24} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column Stack */}
                    <div className="md:col-span-4 flex flex-col gap-6 h-full">
                        {/* Green Cover */}
                        <div className="flex-1 relative group rounded-3xl overflow-hidden min-h-[250px]">
                            <img
                                src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2527&auto=format&fit=crop"
                                alt="Green Cover"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500"></div>
                            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                <div className="self-end bg-emerald-900/40 backdrop-blur-md p-2 rounded-lg text-emerald-300">
                                    <TreePine size={20} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">Urban Forest</h3>
                                    <p className="text-sm text-gray-200">500+ trees & botanical gardens.</p>
                                </div>
                            </div>
                        </div>

                        {/* Rainwater */}
                        <div className="flex-1 relative group rounded-3xl overflow-hidden min-h-[250px]">
                            <img
                                src="https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2670&auto=format&fit=crop"
                                alt="Rain"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-blue-950/40 group-hover:bg-blue-900/30 transition-colors duration-500"></div>
                            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                <div className="self-end bg-blue-500/20 backdrop-blur-md p-2 rounded-lg text-blue-300">
                                    <Droplets size={20} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">Water Conservation</h3>
                                    <p className="text-sm text-gray-200">Advanced rainwater harvesting systems.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                        <div className="text-3xl font-bold text-emerald-400 mb-1">40%</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">Renewable Energy</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                        <div className="text-3xl font-bold text-blue-400 mb-1">100%</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">Water Recycled</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                        <div className="text-3xl font-bold text-yellow-400 mb-1">ZERO</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">Plastic Zone</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                        <div className="text-3xl font-bold text-purple-400 mb-1">AQI</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">Monitored 24/7</div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default EcoInitiatives;

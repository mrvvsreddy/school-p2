import React from 'react';

const FounderMessage = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* Left: Image Collage - Refined */}
                    <div className="w-full lg:w-1/2 relative min-h-[500px] flex items-center justify-center">
                        {/* Main large image */}
                        <div className="relative z-10 w-4/5 ml-auto">
                            <div className="relative overflow-hidden rounded-sm shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1544531320-94a2dc5b231d?q=80&w=800&auto=format&fit=crop"
                                    alt="Founder with students"
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                    onError={(e) => { e.target.src = 'https://placehold.co/800x600/f3f4f6/6d0b1a?text=Founder+Interaction' }}
                                />
                                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                            </div>
                        </div>

                        {/* Secondary overlapping image */}
                        <div className="absolute bottom-0 left-0 z-20 w-3/5 border-[12px] border-white rounded-sm shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                                alt="Founder Portrait"
                                className="w-full h-auto"
                                onError={(e) => { e.target.src = 'https://placehold.co/400x500/6d0b1a/white?text=Founder' }}
                            />
                        </div>

                        {/* Decorative Seal/Badge - Fixed Position */}
                        <div className="absolute top-10 right-0 z-30 animate-pulse-slow">
                            <div className="bg-white p-2 rounded-full shadow-lg">
                                <div className="border border-dashed border-primary rounded-full w-28 h-28 flex flex-col items-center justify-center text-center p-2 bg-white">
                                    <span className="text-2xl font-bold text-primary block leading-none">50</span>
                                    <span className="text-[10px] font-bold text-gray-600 uppercase tracking-wider">Years of<br /> Excellence</span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Pattern bg */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-gray-100 rounded-full -z-10 opacity-60 mix-blend-multiply"></div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block relative pl-12 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-[2px] before:bg-primary">
                            Our History
                        </span>

                        <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-gray-900 leading-tight">
                            Message from the <br />
                            <span className="relative inline-block">
                                main founder
                                <span className="absolute bottom-2 left-0 w-full h-[0.2em] bg-accent/40 -z-10"></span>
                            </span>
                        </h2>

                        <p className="text-gray-600 mb-8 leading-loose text-lg font-light">
                            We focus on providing comprehensive education that nurtures strict discipline, character building, and academic success. Our institution has a 50-year history of excellence in producing leaders who change the world.
                        </p>

                        <div className="relative pl-8 mb-10">
                            <span className="absolute left-0 top-0 text-6xl text-primary/20 font-serif leading-none">"</span>
                            <blockquote className="text-xl font-serif text-gray-800 italic leading-relaxed">
                                True education is not just about academic excellence, but about character, integrity, and the ability to make a positive impact on the world.
                            </blockquote>
                        </div>

                        <div className="flex items-center gap-6 mt-8 border-t border-gray-100 pt-8">
                            <img
                                src="https://randomuser.me/api/portraits/women/68.jpg"
                                alt="Linda A. Jonathon"
                                className="w-16 h-16 rounded-full object-cover border-2 border-primary p-0.5"
                            />
                            <div>
                                <h4 className="text-xl font-serif font-bold text-gray-900">Linda A. Jonathon</h4>
                                <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1">Founder & Principal</p>
                            </div>
                            <div className="ml-auto">
                                <span className="font-cursive text-4xl text-primary rotate-[-2deg] block opacity-80">Linda J.</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FounderMessage;

import React from 'react';

const FounderMessage = ({ data, loading }) => {
    // Default values for fallback
    const founderData = data || {};
    const tagline = founderData.tagline || 'Our History';
    const title = founderData.title || 'Message from the main founder';
    const description = founderData.description || 'We focus on providing comprehensive education that nurtures strict discipline, character building, and academic success. Our institution has a 50-year history of excellence in producing leaders who change the world.';
    const quote = founderData.quote || 'True education is not just about academic excellence, but about character, integrity, and the ability to make a positive impact on the world.';
    const yearsBadge = founderData.years_badge || '50';
    const yearsLabel = founderData.years_label || 'Years';
    const founder = founderData.founder || {
        name: 'Linda A. Jonathon',
        role: 'Founder & Principal',
        image: 'https://randomuser.me/api/portraits/women/68.jpg'
    };
    const mainImage = founderData.images?.main || 'https://images.unsplash.com/photo-1544531320-94a2dc5b231d?q=80&w=800&auto=format&fit=crop';

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-12 items-center">

                    {/* Left: Image with Badge */}
                    <div className="w-full lg:w-1/2 relative flex items-center justify-center">
                        {/* Main image */}
                        <div className="relative z-10 w-full max-w-[300px]">
                            <div className="relative overflow-hidden rounded-sm shadow-xl aspect-square bg-gray-100">
                                <img
                                    src={mainImage}
                                    alt="Founder"
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.target.src = 'https://placehold.co/400x400/f3f4f6/6d0b1a?text=Founder' }}
                                />
                            </div>
                        </div>

                        {/* Decorative Seal/Badge */}
                        <div className="absolute top-0 right-0 lg:right-16 z-30">
                            <div className="bg-white p-2 rounded-full shadow-lg">
                                <div className="border border-dashed border-primary rounded-full w-20 h-20 flex flex-col items-center justify-center text-center p-2 bg-white">
                                    <span className="text-lg font-bold text-primary block leading-none">{yearsBadge}</span>
                                    <span className="text-[8px] font-bold text-gray-600 uppercase tracking-wider">{yearsLabel}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-3 block relative pl-12 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-[2px] before:bg-primary">
                            {tagline}
                        </span>

                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gray-900 leading-tight">
                            {title}
                        </h2>

                        <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                            {description}
                        </p>

                        <div className="relative pl-6 mb-8">
                            <span className="absolute left-0 top-0 text-4xl text-primary/20 font-serif leading-none">"</span>
                            <blockquote className="text-base md:text-lg font-serif text-gray-800 italic leading-relaxed">
                                {quote}
                            </blockquote>
                        </div>

                        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                            <img
                                src={founder.image}
                                alt={founder.name}
                                className="w-12 h-12 rounded-full object-cover border-2 border-primary p-0.5"
                                onError={(e) => { e.target.src = 'https://placehold.co/100x100/6d0b1a/white?text=F' }}
                            />
                            <div>
                                <h4 className="text-lg font-serif font-bold text-gray-900">{founder.name}</h4>
                                <p className="text-xs text-primary font-bold uppercase tracking-widest">{founder.role}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FounderMessage;

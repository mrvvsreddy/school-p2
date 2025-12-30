import React from 'react';

const FounderMessage = ({ data, loading }) => {
    // If loading or no data, don't render
    if (loading || !data) return null;

    const founder = data.founder || {};
    const mainImage = data.images?.main;

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-12 items-center">

                    {/* Left: Image with Badge */}
                    <div className="w-full lg:w-1/2 relative flex items-center justify-center">
                        {/* Main image */}
                        {mainImage && (
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
                        )}

                        {/* Decorative Seal/Badge */}
                        {data.years_badge && (
                            <div className="absolute top-0 right-0 lg:right-16 z-30">
                                <div className="bg-white p-2 rounded-full shadow-lg">
                                    <div className="border border-dashed border-primary rounded-full w-20 h-20 flex flex-col items-center justify-center text-center p-2 bg-white">
                                        <span className="text-lg font-bold text-primary block leading-none">{data.years_badge}</span>
                                        <span className="text-[8px] font-bold text-gray-600 uppercase tracking-wider">{data.years_label || 'Years'}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right: Text Content */}
                    <div className="w-full lg:w-1/2">
                        {data.tagline && (
                            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-3 block relative pl-12 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-8 before:h-[2px] before:bg-primary">
                                {data.tagline}
                            </span>
                        )}

                        {data.title && (
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-gray-900 leading-tight">
                                {data.title}
                            </h2>
                        )}

                        {data.description && (
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                                {data.description}
                            </p>
                        )}

                        {data.quote && (
                            <div className="relative pl-6 mb-8">
                                <span className="absolute left-0 top-0 text-4xl text-primary/20 font-serif leading-none">"</span>
                                <blockquote className="text-base md:text-lg font-serif text-gray-800 italic leading-relaxed">
                                    {data.quote}
                                </blockquote>
                            </div>
                        )}

                        {founder.name && (
                            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                                {founder.image && (
                                    <img
                                        src={founder.image}
                                        alt={founder.name}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-primary p-0.5"
                                        onError={(e) => { e.target.src = 'https://placehold.co/100x100/6d0b1a/white?text=F' }}
                                    />
                                )}
                                <div>
                                    <h4 className="text-lg font-serif font-bold text-gray-900">{founder.name}</h4>
                                    {founder.role && (
                                        <p className="text-xs text-primary font-bold uppercase tracking-widest">{founder.role}</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FounderMessage;

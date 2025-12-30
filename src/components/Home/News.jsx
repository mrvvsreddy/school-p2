import React from 'react';
import { Calendar } from 'lucide-react';

const News = ({ data, loading }) => {
    // If loading or no data, don't render
    if (loading || !data) return null;

    const items = data.items || [];
    if (items.length === 0) return null;

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 text-center text-primary-dark">
                {data.tagline && (
                    <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">{data.tagline}</span>
                )}
                {data.title && (
                    <h2 className="text-4xl font-serif font-bold mb-16 text-gray-900">
                        {data.title}
                    </h2>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <div key={item.id || index} className="group text-left cursor-pointer">
                            <div className="relative overflow-hidden mb-6 rounded-sm">
                                {item.image && (
                                    <img
                                        src={item.image}
                                        alt={item.title || 'News'}
                                        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        onError={(e) => { e.target.src = 'https://placehold.co/600x400/6d0b1a/white?text=EduNet+News' }}
                                    />
                                )}
                                {item.date && item.month && (
                                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-3 text-center min-w-[60px] shadow-lg">
                                        <span className="block text-2xl font-bold font-serif text-gray-900">{item.date}</span>
                                        <span className="block text-xs uppercase font-bold text-primary tracking-wider">{item.month}</span>
                                    </div>
                                )}
                            </div>
                            <div>
                                {item.title && (
                                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                        {item.title} {item.subtitle && `(${item.subtitle})`}
                                    </h3>
                                )}
                                <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest">
                                    <Calendar size={12} />
                                    <span>Last updated: Dec 30, 2024</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;

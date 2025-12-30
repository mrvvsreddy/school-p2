import React from 'react';
import { Clock } from 'lucide-react';
import FadeIn from '../UI/FadeIn';

const Timeline = ({ data }) => {
    if (!data) return null;

    const tagline = data.tagline;
    const title = data.title;
    const items = data.items || data.events || [];

    if (items.length === 0) return null;

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <FadeIn className="text-center mb-16">
                    {tagline && <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-2">{tagline}</span>}
                    {title && <h2 className="text-4xl font-serif font-bold text-gray-900">{title}</h2>}
                </FadeIn>

                <div className="relative max-w-3xl mx-auto">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>

                    <div className="space-y-16">
                        {items.map((item, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <FadeIn key={index} delay={index * 100}>
                                    <div className="relative">
                                        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white z-10 border-4 border-white shadow-lg">
                                            <Clock size={16} />
                                        </div>
                                        <div className={`pt-2 ${isLeft ? 'pr-[52%] text-right' : 'pl-[52%] text-left'}`}>
                                            <div className="text-5xl font-serif font-bold text-gray-900 leading-none">{item.year}</div>
                                            {item.title && <h3 className="text-xl font-bold text-gray-900 mt-1">{item.title}</h3>}
                                            {(item.description || item.desc) && <p className="text-gray-600 mt-1">{item.description || item.desc}</p>}
                                        </div>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;

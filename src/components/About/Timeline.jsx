import React from 'react';
import { Clock } from 'lucide-react';
import FadeIn from '../UI/FadeIn';

const defaultHistoryData = [
    { year: '1985', title: 'The Foundation', description: 'EduNet School opens its doors with 50 students and a vision for holistic education.' },
    { year: '1995', title: 'Campus Expansion', description: 'Inauguration of the new science wing and sports complex to support growing student needs.' },
    { year: '2010', title: 'Global Partnership', description: 'Established exchange programs with leading institutions in UK and Singapore.' },
    { year: '2023', title: 'Digital Transformation', description: 'Launch of the Smart Campus initiative, integrating technology into every classroom.' }
];

const Timeline = ({ data }) => {
    const tagline = data?.tagline || 'Our Journey';
    const title = data?.title || 'Through the Decades';
    // Handle both 'items' and 'events' array names
    const items = data?.items || data?.events || defaultHistoryData;

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <FadeIn className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-2">{tagline}</span>
                    <h2 className="text-4xl font-serif font-bold text-gray-900">{title}</h2>
                </FadeIn>

                <div className="relative max-w-3xl mx-auto">
                    {/* Central vertical line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>

                    <div className="space-y-16">
                        {items.map((item, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <FadeIn key={index} delay={index * 100}>
                                    <div className="relative">
                                        {/* Center dot */}
                                        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white z-10 border-4 border-white shadow-lg">
                                            <Clock size={16} />
                                        </div>

                                        {/* Content - alternates left/right */}
                                        <div className={`pt-2 ${isLeft ? 'pr-[52%] text-right' : 'pl-[52%] text-left'}`}>
                                            <div className="text-5xl font-serif font-bold text-gray-900 leading-none">{item.year}</div>
                                            <h3 className="text-xl font-bold text-gray-900 mt-1">{item.title}</h3>
                                            <p className="text-gray-600 mt-1">{item.description || item.desc}</p>
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

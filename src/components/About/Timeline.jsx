import React from 'react';
import { Clock } from 'lucide-react';
import FadeIn from '../UI/FadeIn';

const historyData = [
    { year: '1985', title: 'The Foundation', desc: 'EduNet School opens its doors with 50 students and a vision for holistic education.' },
    { year: '1995', title: 'Campus Expansion', desc: 'Inauguration of the new science wing and sports complex to support growing student needs.' },
    { year: '2010', title: 'Global Partnership', desc: 'Established exchange programs with leading institutions in UK and Singapore.' },
    { year: '2023', title: 'Digital Transformation', desc: 'Launch of the Smart Campus initiative, integrating technology into every classroom.' }
];

const TimelineContent = ({ year, title, desc, align }) => (
    <div className={`text-${align}`}>
        <div className="text-6xl font-serif font-bold text-gray-200 mb-2">{year}</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{desc}</p>
    </div>
);

const Timeline = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <FadeIn className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-2">Our Journey</span>
                    <h2 className="text-4xl font-serif font-bold text-gray-900">Through the Decades</h2>
                </FadeIn>

                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200 hidden md:block"></div>

                    <div className="space-y-12 md:space-y-24">
                        {historyData.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <FadeIn key={index} delay={index * 100} className="flex flex-col md:flex-row items-center gap-8">
                                    {/* Left Side */}
                                    <div className={`flex-1 ${isEven ? 'md:order-1' : 'md:order-3'} text-center ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                                        {!isEven ? (
                                            <TimelineContent year={item.year} title={item.title} desc={item.desc} align={isEven ? 'right' : 'left'} />
                                        ) : (
                                            <div className="hidden md:block" aria-hidden="true"></div>
                                        )}
                                    </div>

                                    {/* Center Icon */}
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shrink-0 z-10 border-4 border-white shadow-lg md:order-2">
                                        <Clock size={20} />
                                    </div>

                                    {/* Right Side */}
                                    <div className={`flex-1 ${isEven ? 'md:order-3' : 'md:order-1'} text-center ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                                        {isEven ? (
                                            <TimelineContent year={item.year} title={item.title} desc={item.desc} align={isEven ? 'left' : 'right'} />
                                        ) : (
                                            <div className="hidden md:block" aria-hidden="true"></div>
                                        )}
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

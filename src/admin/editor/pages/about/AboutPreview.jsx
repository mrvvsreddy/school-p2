import React from 'react';
import { Target, Eye, Clock } from 'lucide-react';

const AboutPreview = ({ content }) => {
    // Transform content array to object
    const contentMap = {};
    if (Array.isArray(content)) {
        content.forEach(section => {
            contentMap[section.section_key] = section.content;
        });
    }

    // Hero Section
    const renderHero = () => {
        const data = contentMap.hero || {};
        return (
            <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={data.image || 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2669&auto=format&fit=crop'}
                        alt="School"
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.src = 'https://placehold.co/1920x600/580000/white?text=About+Us' }}
                    />
                    <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <span className="text-amber-400 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
                        {data.tagline || 'Since 1985'}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
                        {data.title || 'Our Legacy'}
                    </h1>
                    <p className="text-lg text-white/90 max-w-xl mx-auto">
                        {data.subtitle || 'Cultivating knowledge, character, and community for over four decades.'}
                    </p>
                </div>
            </div>
        );
    };

    // Mission & Vision Section
    const renderMissionVision = () => {
        const data = contentMap.mission_vision || {};
        const mission = data.mission || { title: 'Our Mission', description: 'To provide a transformative educational experience.' };
        const vision = data.vision || { title: 'Our Vision', description: 'To be a globally recognized institution.' };

        return (
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-primary">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                                <Target size={24} />
                            </div>
                            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{mission.title}</h2>
                            <p className="text-gray-600 leading-relaxed">{mission.description}</p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-amber-500">
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-6">
                                <Eye size={24} />
                            </div>
                            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">{vision.title}</h2>
                            <p className="text-gray-600 leading-relaxed">{vision.description}</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    // Timeline Section
    const renderTimeline = () => {
        const data = contentMap.timeline || {};
        const items = data.items || [
            { year: '1985', title: 'The Foundation', description: 'EduNet School opens its doors.' },
            { year: '2023', title: 'Digital Era', description: 'Launch of Smart Campus initiative.' }
        ];

        return (
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-2">
                            {data.tagline || 'Our Journey'}
                        </span>
                        <h2 className="text-3xl font-serif font-bold text-gray-900">
                            {data.title || 'Through the Decades'}
                        </h2>
                    </div>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200 hidden md:block"></div>
                        <div className="space-y-8">
                            {items.map((item, index) => (
                                <div key={index} className="flex flex-col md:flex-row items-center gap-6">
                                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left md:order-3'}`}>
                                        {index % 2 === 0 ? (
                                            <div>
                                                <div className="text-4xl font-serif font-bold text-gray-200 mb-1">{item.year}</div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                                                <p className="text-gray-600 text-sm">{item.description}</p>
                                            </div>
                                        ) : <div className="hidden md:block"></div>}
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0 z-10 border-4 border-white shadow-lg md:order-2">
                                        <Clock size={16} />
                                    </div>
                                    <div className={`flex-1 ${index % 2 !== 0 ? 'md:text-left' : 'md:text-right md:order-1'}`}>
                                        {index % 2 !== 0 ? (
                                            <div>
                                                <div className="text-4xl font-serif font-bold text-gray-200 mb-1">{item.year}</div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                                                <p className="text-gray-600 text-sm">{item.description}</p>
                                            </div>
                                        ) : <div className="hidden md:block"></div>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    // Leadership Section
    const renderLeadership = () => {
        const data = contentMap.leadership || {};
        const members = data.members || [
            { name: 'Dr. Sarah Mitchell', role: 'Principal', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400' },
            { name: 'James Anderson', role: 'Vice Principal', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400' }
        ];

        return (
            <section className="py-16 bg-primary text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <span className="text-amber-400 font-bold tracking-widest text-xs uppercase block mb-2">
                            {data.tagline || 'Leadership'}
                        </span>
                        <h2 className="text-3xl font-serif font-bold text-white">
                            {data.title || 'Guiding Our Path'}
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {members.slice(0, 4).map((person, idx) => (
                            <div key={idx} className="relative group overflow-hidden rounded-lg bg-black/20">
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                    onError={(e) => { e.target.src = 'https://placehold.co/400x300/6d0b1a/white?text=Leader' }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent">
                                    <div className="absolute bottom-0 left-0 w-full p-4">
                                        <h3 className="text-sm font-bold font-serif text-white">{person.name}</h3>
                                        <p className="text-amber-400 text-xs uppercase tracking-wider">{person.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    return (
        <div className="bg-white min-h-full">
            {renderHero()}
            {renderMissionVision()}
            {renderTimeline()}
            {renderLeadership()}
        </div>
    );
};

export default AboutPreview;

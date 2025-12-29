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
            <div className="relative h-[35vh] min-h-[250px] flex items-center justify-center overflow-hidden">
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
                    <span className="text-amber-400 font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
                        {data.tagline || 'Since 1985'}
                    </span>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold mb-3 text-white">
                        {data.title || 'Our Legacy'}
                    </h1>
                    <p className="text-sm text-white/90 max-w-lg mx-auto">
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
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-primary">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                <Target size={20} />
                            </div>
                            <h2 className="text-xl font-serif font-bold text-gray-900 mb-3">{mission.title}</h2>
                            <p className="text-gray-600 text-sm leading-relaxed">{mission.description}</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-amber-500">
                            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-4">
                                <Eye size={20} />
                            </div>
                            <h2 className="text-xl font-serif font-bold text-gray-900 mb-3">{vision.title}</h2>
                            <p className="text-gray-600 text-sm leading-relaxed">{vision.description}</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    // Timeline Section
    const renderTimeline = () => {
        const data = contentMap.timeline || {};
        // Handle both 'items' and 'events' array names
        const items = data.items || data.events || [
            { year: '1985', title: 'The Foundation', description: 'EduNet School opens its doors with 50 students.' },
            { year: '1995', title: 'Campus Expansion', description: 'Inauguration of the new science wing.' },
            { year: '2010', title: 'Global Partnership', description: 'Established exchange programs.' },
            { year: '2023', title: 'Digital Transformation', description: 'Launch of the Smart Campus initiative.' }
        ];

        return (
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-8">
                        <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-1">
                            {data.tagline || 'Our Journey'}
                        </span>
                        <h2 className="text-2xl font-serif font-bold text-gray-900">
                            {data.title || 'Through the Decades'}
                        </h2>
                    </div>

                    <div className="relative max-w-xl mx-auto">
                        {/* Central vertical line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>

                        <div className="space-y-8">
                            {items.map((item, index) => {
                                const isLeft = index % 2 === 0;
                                return (
                                    <div key={index} className="relative">
                                        {/* Center dot */}
                                        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white z-10 border-2 border-white shadow">
                                            <Clock size={10} />
                                        </div>

                                        {/* Content - alternates left/right */}
                                        <div className={`pt-1 ${isLeft ? 'pr-[55%] text-right' : 'pl-[55%] text-left'}`}>
                                            <div className="text-2xl font-serif font-bold text-gray-900">{item.year}</div>
                                            <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                                            <p className="text-gray-600 text-xs">{item.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
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
            { name: 'James Anderson', role: 'Vice Principal', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400' },
            { name: 'Emily Chen', role: 'Head of Academics', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400' },
            { name: 'Robert Wilson', role: 'Sports Director', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400' }
        ];

        return (
            <section className="py-12 bg-primary text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-8">
                        <span className="text-amber-400 font-bold tracking-widest text-xs uppercase block mb-1">
                            {data.tagline || 'Leadership'}
                        </span>
                        <h2 className="text-2xl font-serif font-bold text-white">
                            {data.title || 'Guiding Our Path'}
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {members.map((person, idx) => (
                            <div key={idx} className="relative group overflow-hidden rounded-lg bg-black/20">
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className="w-full h-32 object-cover opacity-80"
                                    onError={(e) => { e.target.src = 'https://placehold.co/200x150/6d0b1a/white?text=Leader' }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent">
                                    <div className="absolute bottom-0 left-0 w-full p-2">
                                        <h3 className="text-xs font-bold font-serif text-white">{person.name}</h3>
                                        <p className="text-amber-400 text-[10px] uppercase tracking-wider">{person.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    // Campus Gallery Section
    const renderCampusGallery = () => {
        const data = contentMap.campus_gallery || {};
        const images = data.images || [
            { url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800', label: 'Main Quadrangle' },
            { url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400', label: 'Science Labs' },
            { url: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=400', label: 'Sports Complex' },
            { url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800', label: 'Modern Library' }
        ];

        return (
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                        {data.title || 'Life on Campus'}
                    </h2>
                    <div className={`grid ${images.length <= 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'} gap-2`}>
                        {images.map((img, idx) => (
                            <div key={idx} className="relative rounded-lg overflow-hidden group aspect-[4/3]">
                                <img
                                    src={img.url || img.src}
                                    alt={img.label || img.alt}
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.target.src = 'https://placehold.co/400x200/f3f4f6/6d0b1a?text=Campus' }}
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white font-bold text-xs">{img.label || img.alt}</span>
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
            {renderCampusGallery()}
        </div>
    );
};

export default AboutPreview;

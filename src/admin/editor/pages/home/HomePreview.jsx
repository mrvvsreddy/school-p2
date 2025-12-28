import React from 'react';
import { ChevronRight, Target, Eye, GraduationCap, Globe, Users, Trophy, ArrowRight } from 'lucide-react';

// Live Preview Component - Renders home sections directly with passed content
const HomePreview = ({ content }) => {
    // Transform content array to object keyed by section_key
    const sections = {};
    if (content && Array.isArray(content)) {
        content.forEach(section => {
            sections[section.section_key] = section.content;
        });
    }

    return (
        <div className="w-full h-full overflow-y-auto bg-white">
            {/* Hero Section Preview */}
            <HeroPreview data={sections.hero} />

            {/* Founder Message Preview */}
            <FounderPreview data={sections.founder_message} />

            {/* Features Preview */}
            <FeaturesPreview data={sections.features} />

            {/* Academies Preview */}
            <AcademiesPreview data={sections.academies} />

            {/* News Preview */}
            <NewsPreview data={sections.news} />
        </div>
    );
};

// Hero Section Preview
const HeroPreview = ({ data }) => {
    if (!data) return null;

    return (
        <section className="bg-gradient-to-br from-white to-gray-50 relative overflow-hidden pt-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between min-h-[400px] gap-8 py-8">
                    {/* Left Content */}
                    <div className="w-full md:w-5/12 z-10">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="w-8 h-[2px] bg-amber-500"></span>
                            <span className="text-primary font-bold uppercase tracking-widest text-[10px]">
                                {data.tagline || 'Welcome to EduNet'}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-4 text-gray-900">
                            {data.title || 'Inspiring Excellence in Education.'}
                        </h1>

                        <p className="text-sm text-gray-600 mb-6 max-w-sm leading-relaxed">
                            {data.subtitle || 'A legacy of 50 years in shaping leaders.'}
                        </p>

                        <button className="group bg-primary text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                            {data.button?.text || 'Explore Campus'}
                            <ChevronRight size={14} />
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="w-full md:w-6/12 relative h-[300px]">
                        <div className="absolute inset-0 bg-gray-200 rounded-tl-[80px] rounded-br-[80px] overflow-hidden shadow-xl">
                            <img
                                src={data.image || '/hero-student.png'}
                                alt="Hero"
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.src = 'https://placehold.co/800x600/6d0b1a/white?text=Hero+Image' }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>

                        {/* Badge */}
                        {data.badge && (
                            <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-lg hidden md:block">
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-bold text-primary">{data.badge.rank}</span>
                                    <span className="text-xs font-bold text-gray-600">{data.badge.text}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Founder Message Preview
const FounderPreview = ({ data }) => {
    if (!data) return null;

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left Images */}
                    <div className="w-full lg:w-1/2 relative min-h-[350px] flex items-center justify-center">
                        <div className="relative z-10 w-4/5 ml-auto">
                            <div className="relative overflow-hidden rounded-sm shadow-xl aspect-square w-full max-w-[280px]">
                                <img
                                    src={data.images?.main || 'https://images.unsplash.com/photo-1544531320-94a2dc5b231d?q=80&w=800'}
                                    alt="Founder"
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.target.src = 'https://placehold.co/400x400/f3f4f6/6d0b1a?text=Founder' }}
                                />
                            </div>
                        </div>

                        {/* Years Badge */}
                        {data.years_badge && (
                            <div className="absolute top-4 right-0 z-20 bg-white p-2 rounded-full shadow-lg">
                                <div className="border border-dashed border-primary rounded-full w-20 h-20 flex flex-col items-center justify-center">
                                    <span className="text-xl font-bold text-primary">{data.years_badge}</span>
                                    <span className="text-[8px] font-bold text-gray-600 uppercase">{data.years_label || 'Years'}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
                            {data.tagline || 'Our History'}
                        </span>
                        <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900">
                            {data.title || 'Message from the main founder'}
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                            {data.description || 'Our institution has a long history of excellence.'}
                        </p>

                        {data.quote && (
                            <div className="relative pl-6 mb-6">
                                <span className="absolute left-0 top-0 text-4xl text-primary/20 font-serif">"</span>
                                <blockquote className="text-base font-serif text-gray-800 italic leading-relaxed">
                                    {data.quote}
                                </blockquote>
                            </div>
                        )}

                        {data.founder && (
                            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                                <img
                                    src={data.founder.image || 'https://randomuser.me/api/portraits/women/68.jpg'}
                                    alt={data.founder.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                                />
                                <div>
                                    <h4 className="font-serif font-bold text-gray-900">{data.founder.name}</h4>
                                    <p className="text-xs text-primary font-bold uppercase">{data.founder.role}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Features Preview
const FeaturesPreview = ({ data }) => {
    if (!data) return null;

    const features = data.features || [];
    const iconMap = {
        GraduationCap: GraduationCap,
        Globe: Globe,
        Users: Users
    };

    return (
        <section className="bg-[#580000] text-white py-16 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div className="max-w-xl">
                        <span className="text-amber-400 font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
                            {data.tagline || 'Why EduNet?'}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white leading-tight">
                            {data.title || 'A legacy of distinction'}
                        </h2>
                    </div>
                    <button className="border border-white/30 hover:bg-white hover:text-primary px-4 py-2 rounded-full text-xs font-bold uppercase transition-all">
                        {data.button?.text || 'Discover More'}
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {features.map((feature, index) => {
                        const IconComponent = iconMap[feature.icon] || GraduationCap;
                        return (
                            <div key={index} className="group bg-white/5 border border-white/10 p-6 rounded-sm hover:bg-white transition-all">
                                <div className="mb-6 p-3 inline-block rounded-full bg-white/10 group-hover:bg-primary/10 text-white group-hover:text-primary">
                                    <IconComponent size={28} />
                                </div>
                                <h3 className="text-lg font-serif font-bold mb-2 text-white group-hover:text-primary">{feature.title}</h3>
                                <p className="text-white/70 group-hover:text-gray-600 text-xs leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Stats */}
                {data.stats && (
                    <div className="mt-12 border-t border-white/10 pt-6 flex flex-wrap justify-center gap-8 opacity-80">
                        {data.stats.map((stat, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <Trophy size={16} className="text-amber-400" />
                                <span className="text-xs font-medium">{stat.text}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

// Academies Preview
const AcademiesPreview = ({ data }) => {
    if (!data) return null;

    const academies = data.academies || [];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">
                    {data.tagline || 'Our Areas'}
                </span>
                <h2 className="text-3xl font-serif font-bold mb-8 text-gray-900">
                    {data.title || 'Academies expertise'}
                </h2>

                <div className="space-y-3">
                    {academies.slice(0, 5).map((academy, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-white border-l-4 border-l-primary rounded-sm shadow-sm"
                        >
                            <div className="flex items-center gap-4">
                                {academy.image && (
                                    <img
                                        src={academy.image}
                                        alt={academy.name}
                                        className="w-12 h-12 rounded object-cover"
                                        onError={(e) => { e.target.style.display = 'none'; }}
                                    />
                                )}
                                <span className="text-lg font-serif font-bold text-primary">{academy.id}.</span>
                                <div>
                                    <h3 className="font-bold text-gray-900">{academy.name}</h3>
                                    <p className="text-xs text-gray-500">{academy.description}</p>
                                </div>
                            </div>
                            <ChevronRight size={16} className="text-gray-400" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// News Preview
const NewsPreview = ({ data }) => {
    if (!data) return null;

    const items = data.items || [];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-2 block">
                    {data.tagline || 'Our Blog'}
                </span>
                <h2 className="text-3xl font-serif font-bold mb-10 text-gray-900">
                    {data.title || 'Announcements & news feeds'}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <div key={index} className="group text-left cursor-pointer">
                            <div className="relative overflow-hidden mb-4 rounded-sm">
                                <img
                                    src={item.image || `https://placehold.co/600x400/6d0b1a/white?text=News+${index + 1}`}
                                    alt={item.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                                    onError={(e) => { e.target.src = 'https://placehold.co/600x400/6d0b1a/white?text=News' }}
                                />
                                <div className="absolute top-3 left-3 bg-white/95 p-2 text-center min-w-[50px] shadow">
                                    <span className="block text-lg font-bold text-gray-900">{item.date}</span>
                                    <span className="block text-[10px] uppercase font-bold text-primary">{item.month}</span>
                                </div>
                            </div>
                            <h3 className="font-serif font-bold text-gray-900 group-hover:text-primary transition-colors">
                                {item.title} ({item.subtitle})
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomePreview;

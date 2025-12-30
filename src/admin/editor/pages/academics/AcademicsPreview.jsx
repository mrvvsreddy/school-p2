import React, { useState } from 'react';
import { BookOpen, Star, Compass, Microscope, Palette, Briefcase, Globe, Code, Music } from 'lucide-react';

// Icon mapping
const iconMap = {
    Microscope,
    Code,
    Briefcase,
    Palette,
    Globe,
    Music,
    Star,
    Compass,
    BookOpen
};

const AcademicsPreview = ({ content }) => {
    const [activeTab, setActiveTab] = useState('primary');

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
                        src={data.image || 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2670&auto=format&fit=crop'}
                        alt="Academic Excellence"
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.src = 'https://placehold.co/1920x600/580000/white?text=Academics' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 mix-blend-multiply"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <span className="text-amber-400 font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
                        {data.tagline || 'Unlock Your Potential'}
                    </span>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold mb-3 text-white">
                        {data.title || 'Academic Excellence'}
                    </h1>
                    <p className="text-sm text-white/90 max-w-lg mx-auto">
                        {data.subtitle || 'A rigorous and inspiring curriculum designed to foster critical thinking, creativity, and global leadership.'}
                    </p>
                </div>
            </div>
        );
    };

    // Curriculum Section - Tabbed interface matching live CurriculumSection.jsx
    const renderCurriculum = () => {
        const data = contentMap.curriculum || {};

        // Default data matching live component structure
        const defaultCurricula = {
            primary: {
                title: "Primary Years (KG - Grade 5)",
                icon: "Star",
                description: "Building strong foundations through play-based learning and inquiry.",
                features: [
                    "Literacy & Numeracy focus",
                    "Environmental awareness",
                    "Creative arts & music",
                    "Physical education"
                ],
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
            },
            middle: {
                title: "Middle School (Grade 6 - 8)",
                icon: "Compass",
                description: "Encouraging independence and exploring diverse subject areas.",
                features: [
                    "Subject-specialized learning",
                    "STEM projects & robotics",
                    "Debate & public speaking",
                    "Community service initiatives"
                ],
                image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2670&auto=format&fit=crop"
            },
            senior: {
                title: "Senior School (Grade 9 - 12)",
                icon: "BookOpen",
                description: "Rigorous preparation for board exams and university opportunities.",
                features: [
                    "Stream selection assistance",
                    "Advanced laboratory work",
                    "Career counseling",
                    "Leadership roles"
                ],
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
            }
        };

        const curricula = data.curricula || defaultCurricula;
        const curriculumKeys = Object.keys(curricula);

        // Ensure activeTab is valid
        const currentTab = curriculumKeys.includes(activeTab) ? activeTab : curriculumKeys[0] || 'primary';
        const activeData = curricula[currentTab] || defaultCurricula.primary;
        const TabIcon = iconMap[activeData.icon] || Star;

        // Get features (handle both array of strings and array of objects)
        const features = activeData.features?.map(f => typeof f === 'string' ? f : f.text) || [];

        return (
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Header */}
                    <div className="text-center mb-12 md:mb-16">
                        <span className="text-amber-500 font-bold tracking-widest text-xs uppercase block mb-2">
                            {data.tagline || 'Our Pathway'}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                            {data.title || 'Curriculum Structure'}
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                        {/* Tabs */}
                        <div className="lg:w-1/3 flex flex-col gap-3 md:gap-4 w-full">
                            {curriculumKeys.map((key) => {
                                const curr = curricula[key];
                                const CurrIcon = iconMap[curr.icon] || Star;
                                const isActive = currentTab === key;

                                // Split title to get name and grade range
                                const titleParts = curr.title?.split('(') || [key];
                                const name = titleParts[0]?.trim();
                                const gradeRange = titleParts[1]?.replace(')', '').trim();

                                return (
                                    <button
                                        key={key}
                                        onClick={() => setActiveTab(key)}
                                        className={`text-left p-4 md:p-6 rounded-xl transition-all duration-300 flex items-center gap-3 md:gap-4 group ${isActive
                                            ? 'bg-primary text-white shadow-xl scale-[1.02] md:scale-105'
                                            : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        <div className={`p-2 md:p-3 rounded-full transition-colors ${isActive ? 'bg-white/20' : 'bg-gray-200 text-gray-500'
                                            }`}>
                                            <CurrIcon size={20} className={isActive ? 'text-white' : ''} />
                                        </div>
                                        <div>
                                            <h3 className={`font-bold text-base md:text-lg ${isActive ? 'text-white' : 'text-gray-900'
                                                }`}>
                                                {name || 'Grade Level'}
                                            </h3>
                                            {gradeRange && (
                                                <p className={`text-xs md:text-sm ${isActive ? 'text-white/70' : 'text-gray-400'
                                                    }`}>
                                                    {gradeRange}
                                                </p>
                                            )}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Content Panel */}
                        <div className="lg:w-2/3 w-full">
                            <div
                                key={currentTab}
                                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                            >
                                <div className="md:flex">
                                    {/* Text Content */}
                                    <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                                            {activeData.title || 'Grade Level'}
                                        </h3>
                                        <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                                            {activeData.description || 'Description for this curriculum level.'}
                                        </p>

                                        {/* Features as bullet points */}
                                        {features.length > 0 && (
                                            <ul className="space-y-2 md:space-y-3">
                                                {features.map((feature, i) => (
                                                    <li key={i} className="flex items-center gap-2 md:gap-3 text-gray-700 text-sm md:text-base">
                                                        <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>

                                    {/* Image */}
                                    <div className="md:w-1/2 min-h-[200px] md:min-h-[300px] relative">
                                        <img
                                            src={activeData.image || 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop'}
                                            alt={activeData.title || 'Curriculum'}
                                            className="absolute inset-0 w-full h-full object-cover"
                                            onError={(e) => { e.target.src = 'https://placehold.co/600x400/f3f4f6/6d0b1a?text=Curriculum' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    // Departments Section
    const renderDepartments = () => {
        const data = contentMap.departments || {};
        const departments = data.departments || [
            { icon: 'Microscope', name: "Science", desc: "Physics, Chemistry, Biology labs" },
            { icon: 'Code', name: "Technology", desc: "Computer Science, AI, Robotics" },
            { icon: 'Briefcase', name: "Commerce", desc: "Business Studies, Economics, Accountancy" },
            { icon: 'Palette', name: "Arts", desc: "Fine Arts, Design, Psychology" },
            { icon: 'Globe', name: "Humanities", desc: "History, Political Science, Sociology" },
            { icon: 'Music', name: "Performing Arts", desc: "Music, Dance, Theater" },
        ];

        return (
            <section className="py-12 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="text-center mb-8">
                        <span className="text-amber-400 font-bold tracking-widest text-xs uppercase block mb-1">
                            {data.tagline || 'Areas of Study'}
                        </span>
                        <h2 className="text-2xl font-serif font-bold text-white">
                            {data.title || 'Academic Departments'}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {departments.map((dept, index) => {
                            const IconComp = iconMap[dept.icon] || Microscope;
                            const hasCustomIcon = dept.customIcon && dept.customIcon.trim() !== '';

                            return (
                                <div
                                    key={index}
                                    className="group bg-white/5 border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-amber-400 mb-4 group-hover:bg-amber-400 group-hover:text-primary transition-colors overflow-hidden">
                                        {hasCustomIcon ? (
                                            <img
                                                src={dept.customIcon}
                                                alt={dept.name}
                                                className="w-8 h-8 object-contain"
                                                onError={(e) => { e.target.style.display = 'none' }}
                                            />
                                        ) : (
                                            <IconComp size={24} />
                                        )}
                                    </div>
                                    <h3 className="text-lg font-bold mb-1 text-white group-hover:text-amber-400 transition-colors">
                                        {dept.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                                        {dept.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    };

    // Methodology Section
    const renderMethodology = () => {
        const data = contentMap.methodology || {};
        const cards = data.cards || [
            { title: "Experiential", description: "Learning by doing through projects and experiments." },
            { title: "Collaborative", description: "Group activities that foster teamwork and communication." },
            { title: "Digital-Native", description: "Smart classrooms and e-learning integration." },
            { title: "Personalized", description: "Tailored attention to individual student needs." }
        ];

        return (
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="md:w-1/2">
                            <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-1">
                                {data.tagline || 'How We Teach'}
                            </span>
                            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                                {data.title || 'Innovative Methodology'}
                            </h2>
                            <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                                {data.description || 'We believe learning goes beyond textbooks. Our methodology integrates modern pedagogies with traditional values to create a holistic learning environment.'}
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {cards.map((card, index) => (
                                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                                        <h4 className="font-bold text-sm mb-1 text-primary">{card.title}</h4>
                                        <p className="text-xs text-gray-600">{card.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="md:w-1/2 relative">
                            <div className="absolute -inset-4 bg-primary/5 rounded-xl -z-10 transform rotate-3"></div>
                            <img
                                src={data.image || 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2670&auto=format&fit=crop'}
                                alt="Classroom Interaction"
                                className="rounded-lg shadow-xl w-full h-64 object-cover"
                                onError={(e) => { e.target.src = 'https://placehold.co/600x400/f3f4f6/6d0b1a?text=Methodology' }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    return (
        <div className="bg-white min-h-full">
            {renderHero()}
            {renderCurriculum()}
            {renderMethodology()}
            {renderDepartments()}
        </div>
    );
};

export default AcademicsPreview;

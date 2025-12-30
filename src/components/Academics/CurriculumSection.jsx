import React, { useState } from 'react';
import FadeIn from '../UI/FadeIn';
import { BookOpen, Star, Compass } from 'lucide-react';

// Icon mapping
const iconMap = {
    Star,
    Compass,
    BookOpen
};

const CurriculumSection = ({ data }) => {
    const [activeTab, setActiveTab] = useState(null);

    // If no data or no curricula, don't render
    if (!data || !data.curricula) return null;

    const curricula = data.curricula;
    const curriculumKeys = Object.keys(curricula);

    // Set initial active tab if not set
    const currentTab = activeTab && curriculumKeys.includes(activeTab)
        ? activeTab
        : curriculumKeys[0];

    const activeData = curricula[currentTab];
    if (!activeData) return null;

    // Get icon component
    const ActiveIcon = iconMap[activeData.icon] || Star;

    // Get features (handle both array of strings and array of objects)
    const features = activeData.features?.map(f => typeof f === 'string' ? f : f.text) || [];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    {data.tagline && (
                        <span className="text-accent font-bold tracking-widest text-xs uppercase block mb-2">
                            {data.tagline}
                        </span>
                    )}
                    {data.title && (
                        <h2 className="text-4xl font-serif font-bold text-primary">{data.title}</h2>
                    )}
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Tabs */}
                    <div className="lg:w-1/3 flex flex-col gap-4 w-full">
                        {curriculumKeys.map((key) => {
                            const curr = curricula[key];
                            if (!curr) return null;

                            const TabIcon = iconMap[curr.icon] || Star;
                            const isActive = currentTab === key;

                            // Split title to get name and grade range
                            const titleParts = curr.title?.split('(') || [key];
                            const name = titleParts[0]?.trim();
                            const gradeRange = titleParts[1]?.replace(')', '').trim();

                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`text-left p-6 rounded-xl transition-all duration-300 flex items-center gap-4 group ${isActive
                                        ? 'bg-primary text-white shadow-xl scale-105'
                                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    <div className={`p-3 rounded-full ${isActive ? 'bg-white/20' : 'bg-gray-200 text-gray-500'}`}>
                                        <TabIcon size={24} />
                                    </div>
                                    <div>
                                        <h3 className={`font-bold text-lg ${isActive ? 'text-white' : 'text-gray-900'}`}>
                                            {name || 'Curriculum'}
                                        </h3>
                                        {gradeRange && (
                                            <p className={`text-sm ${isActive ? 'text-white/70' : 'text-gray-400'}`}>
                                                {gradeRange}
                                            </p>
                                        )}
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Content */}
                    <div className="lg:w-2/3 w-full">
                        <FadeIn key={currentTab} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative">
                            <div className="md:flex">
                                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                                    {activeData.title && (
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{activeData.title}</h3>
                                    )}
                                    {activeData.description && (
                                        <p className="text-gray-600 mb-8 leading-relaxed">
                                            {activeData.description}
                                        </p>
                                    )}
                                    {features.length > 0 && (
                                        <ul className="space-y-3">
                                            {features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                {activeData.image && (
                                    <div className="md:w-1/2 min-h-[300px] relative">
                                        <img
                                            src={activeData.image}
                                            alt={activeData.title || 'Curriculum'}
                                            className="absolute inset-0 w-full h-full object-cover"
                                            onError={(e) => { e.target.src = 'https://placehold.co/600x400/f3f4f6/6d0b1a?text=Curriculum' }}
                                        />
                                    </div>
                                )}
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurriculumSection;

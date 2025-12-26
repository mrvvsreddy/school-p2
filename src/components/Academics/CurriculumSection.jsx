import React, { useState } from 'react';
import FadeIn from '../UI/FadeIn';
import { BookOpen, Star, Compass } from 'lucide-react';

const CurriculumSection = () => {
    const [activeTab, setActiveTab] = useState('primary');

    const curricula = {
        primary: {
            title: "Primary Years (KG - Grade 5)",
            icon: Star,
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
            icon: Compass,
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
            icon: BookOpen,
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

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold tracking-widest text-xs uppercase block mb-2">Our Pathway</span>
                    <h2 className="text-4xl font-serif font-bold text-primary">Curriculum Structure</h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Tabs */}
                    <div className="lg:w-1/3 flex flex-col gap-4 w-full">
                        {Object.entries(curricula).map(([key, data]) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`text-left p-6 rounded-xl transition-all duration-300 flex items-center gap-4 group ${activeTab === key
                                    ? 'bg-primary text-white shadow-xl scale-105'
                                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <div className={`p-3 rounded-full ${activeTab === key ? 'bg-white/20' : 'bg-gray-200 text-gray-500'}`}>
                                    <data.icon size={24} />
                                </div>
                                <div>
                                    <h3 className={`font-bold text-lg ${activeTab === key ? 'text-white' : 'text-gray-900'}`}>{data.title.split('(')[0]}</h3>
                                    <p className={`text-sm ${activeTab === key ? 'text-white/70' : 'text-gray-400'}`}>{data.title.split('(')[1]?.replace(')', '')}</p>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="lg:w-2/3 w-full">
                        <FadeIn key={activeTab} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative">
                            <div className="md:flex">
                                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{curricula[activeTab].title}</h3>
                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        {curricula[activeTab].description}
                                    </p>
                                    <ul className="space-y-3">
                                        {curricula[activeTab].features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-700">
                                                <div className="w-2 h-2 bg-accent rounded-full"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/2 min-h-[300px] relative">
                                    <img
                                        src={curricula[activeTab].image}
                                        alt={curricula[activeTab].title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurriculumSection;

import React from 'react';
import { Target, Eye } from 'lucide-react';
import FadeIn from '../UI/FadeIn';

const MissionVision = ({ data }) => {
    const mission = data?.mission || {
        title: 'Our Mission',
        description: 'To provide a transformative educational experience that empowers students to achieve academic excellence, develop strong character, and become responsible global citizens who contribute positively to society.'
    };
    const vision = data?.vision || {
        title: 'Our Vision',
        description: 'To be a globally recognized institution enabling learners to thrive in a dynamic world through innovation, inclusivity, and a relentless pursuit of knowledge.'
    };

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <FadeIn delay={100} className="bg-white p-10 rounded-lg shadow-xl border-t-4 border-primary relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Target size={150} className="text-primary" />
                        </div>
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                            <Target size={32} />
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">{mission.title}</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {mission.description}
                        </p>
                    </FadeIn>

                    <FadeIn delay={200} className="bg-white p-10 rounded-lg shadow-xl border-t-4 border-accent relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Eye size={150} className="text-accent" />
                        </div>
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform">
                            <Eye size={32} />
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">{vision.title}</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {vision.description}
                        </p>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;

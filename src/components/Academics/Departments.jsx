import React from 'react';
import FadeIn from '../UI/FadeIn';
import { Microscope, Palette, Briefcase, Globe, Code, Music } from 'lucide-react';

// Icon mapping
const iconMap = {
    Microscope,
    Code,
    Briefcase,
    Palette,
    Globe,
    Music
};

const Departments = ({ data }) => {
    // If no data or no departments, don't render
    if (!data || !data.departments || data.departments.length === 0) return null;

    const departments = data.departments;

    return (
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    {data.tagline && (
                        <span className="text-accent font-bold tracking-widest text-xs uppercase block mb-2">
                            {data.tagline}
                        </span>
                    )}
                    {data.title && (
                        <h2 className="text-4xl font-serif font-bold text-white">{data.title}</h2>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {departments.map((dept, index) => {
                        const IconComp = iconMap[dept.icon] || Microscope;
                        const hasCustomIcon = dept.customIcon && dept.customIcon.trim() !== '';

                        return (
                            <FadeIn key={index} delay={index * 100}>
                                <div className="group bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                                    <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-primary transition-colors overflow-hidden">
                                        {hasCustomIcon ? (
                                            <img
                                                src={dept.customIcon}
                                                alt={dept.name || 'Department'}
                                                className="w-8 h-8 object-contain"
                                                onError={(e) => { e.target.style.display = 'none' }}
                                            />
                                        ) : (
                                            <IconComp size={32} />
                                        )}
                                    </div>
                                    {dept.name && (
                                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent transition-colors">
                                            {dept.name}
                                        </h3>
                                    )}
                                    {dept.desc && (
                                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                            {dept.desc}
                                        </p>
                                    )}
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Departments;

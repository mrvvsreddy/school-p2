import React from 'react';
import FadeIn from '../UI/FadeIn';
import { Book, FlaskConical, Trophy, Bus, Coffee, Dumbbell } from 'lucide-react';

const iconMap = {
    Book,
    FlaskConical,
    Trophy,
    Bus,
    Coffee,
    Dumbbell
};

const FacilityGrid = ({ data }) => {
    if (!data) return null;

    const tagline = data.tagline;
    const title = data.title;
    const facilities = data.facilities || [];

    if (facilities.length === 0) return null;

    const getIcon = (iconName) => iconMap[iconName] || Book;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    {tagline && <span className="text-accent font-bold tracking-widest text-xs uppercase block mb-2">{tagline}</span>}
                    {title && <h2 className="text-4xl font-serif font-bold text-primary">{title}</h2>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilities.map((fac, idx) => {
                        const IconComponent = getIcon(fac.icon);
                        return (
                            <FadeIn key={idx} delay={idx * 100}>
                                <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100 relative h-96">
                                    <div className="absolute inset-0">
                                        {fac.image && (
                                            <img
                                                src={fac.image}
                                                alt={fac.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                                    </div>

                                    <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary mb-4 opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                            <IconComponent size={24} />
                                        </div>
                                        {fac.title && <h3 className="text-2xl font-bold text-white mb-2">{fac.title}</h3>}
                                        {fac.desc && (
                                            <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                                {fac.desc}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FacilityGrid;

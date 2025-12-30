import React from 'react';
import FadeIn from '../UI/FadeIn';
import { Wifi, Monitor, Server, Lock } from 'lucide-react';

const iconMap = {
    Wifi,
    Monitor,
    Server,
    Lock
};

const DigitalCampus = ({ data }) => {
    if (!data) return null;

    const tagline = data.tagline;
    const title = data.title;
    const description = data.description;
    const image = data.image;
    const features = data.features || [];

    const getIcon = (iconName) => iconMap[iconName] || Wifi;

    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit.png')]"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <FadeIn>
                            {tagline && <span className="text-secondary font-bold tracking-widest text-xs uppercase block mb-2">{tagline}</span>}
                            {title && <h2 className="text-4xl font-serif font-bold mb-6 text-white">{title}</h2>}
                            {description && <p className="text-lg text-white/80 mb-8 leading-relaxed">{description}</p>}

                            {features.length > 0 && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {features.map((feature, idx) => {
                                        const IconComponent = getIcon(feature.icon);
                                        return (
                                            <div key={idx} className="flex items-start gap-4">
                                                <div className="bg-white/10 p-3 rounded-lg text-accent">
                                                    <IconComponent size={24} />
                                                </div>
                                                <div>
                                                    {feature.title && <h4 className="font-bold text-lg text-white">{feature.title}</h4>}
                                                    {feature.desc && <p className="text-sm text-gray-400">{feature.desc}</p>}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </FadeIn>
                    </div>

                    <div className="lg:w-1/2">
                        <FadeIn delay={200}>
                            {image && (
                                <div className="relative">
                                    <img
                                        src={image}
                                        alt="Digital Campus"
                                        className="rounded-2xl shadow-2xl border border-white/10"
                                    />
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent"></div>
                                </div>
                            )}
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DigitalCampus;

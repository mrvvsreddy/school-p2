import React from 'react';
import FadeIn from '../UI/FadeIn';
import { Sun, Droplets, Recycle, TreePine, ArrowUpRight } from 'lucide-react';

const iconMap = {
    Sun,
    Droplets,
    Recycle,
    TreePine
};

const EcoInitiatives = ({ data }) => {
    if (!data) return null;

    const tagline = data.tagline;
    const title = data.title;
    const subtitle = data.subtitle;
    const description = data.description;
    const initiatives = data.initiatives || [];

    const getIcon = (iconName) => iconMap[iconName] || TreePine;

    // Separate main feature from others
    const mainFeature = initiatives[0];
    const otherFeatures = initiatives.slice(1);

    return (
        <section className="py-32 bg-slate-950 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-500/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-teal-500/10 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <FadeIn>
                            {tagline && <span className="text-emerald-400 font-bold tracking-widest text-xs uppercase block mb-3 pl-1">{tagline}</span>}
                            {title && (
                                <h2 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
                                    {title} <br />{subtitle && <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">{subtitle}</span>}
                                </h2>
                            )}
                        </FadeIn>
                    </div>
                    <FadeIn delay={200}>
                        {description && <p className="text-gray-400 max-w-md text-lg leading-relaxed">{description}</p>}
                    </FadeIn>
                </div>

                {initiatives.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
                        {mainFeature && (
                            <div className="md:col-span-8 relative group rounded-3xl overflow-hidden h-[300px] md:h-full">
                                {mainFeature.image && (
                                    <img
                                        src={mainFeature.image}
                                        alt={mainFeature.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            {mainFeature.icon && (
                                                <div className="bg-emerald-500/20 backdrop-blur-md p-3 rounded-lg text-emerald-300 w-fit mb-4">
                                                    {React.createElement(getIcon(mainFeature.icon), { size: 24 })}
                                                </div>
                                            )}
                                            {mainFeature.title && <h3 className="text-3xl font-bold text-white mb-2">{mainFeature.title}</h3>}
                                            {mainFeature.desc && <p className="text-gray-300 max-w-lg">{mainFeature.desc}</p>}
                                        </div>
                                        <div className="bg-white/10 p-3 rounded-full backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                            <ArrowUpRight size={24} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {otherFeatures.length > 0 && (
                            <div className="md:col-span-4 flex flex-col gap-6 h-full">
                                {otherFeatures.map((feature, idx) => (
                                    <div key={idx} className="flex-1 relative group rounded-3xl overflow-hidden min-h-[180px]">
                                        {feature.image && (
                                            <img
                                                src={feature.image}
                                                alt={feature.title}
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 p-6 w-full">
                                            {feature.icon && (
                                                <div className="bg-emerald-500/20 backdrop-blur-md p-2 rounded-lg text-emerald-300 w-fit mb-3">
                                                    {React.createElement(getIcon(feature.icon), { size: 18 })}
                                                </div>
                                            )}
                                            {feature.title && <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>}
                                            {feature.desc && <p className="text-sm text-gray-300">{feature.desc}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default EcoInitiatives;

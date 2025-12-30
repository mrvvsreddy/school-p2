import React from 'react';
import FadeIn from '../UI/FadeIn';
import { ShieldCheck, Video, Users, Bell } from 'lucide-react';

const iconMap = {
    ShieldCheck,
    Video,
    Users,
    Bell
};

const SafetySecurity = ({ data }) => {
    if (!data) return null;

    const tagline = data.tagline;
    const title = data.title;
    const description = data.description;
    const image = data.image;
    const features = data.features || [];
    const badge = data.badge || {};

    const getIcon = (iconName) => iconMap[iconName] || ShieldCheck;

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 order-2 lg:order-1 relative">
                        <FadeIn delay={200}>
                            {image && (
                                <img
                                    src={image}
                                    alt="Student Safety"
                                    className="rounded-2xl shadow-xl w-full"
                                />
                            )}
                            {badge.title && (
                                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
                                    <div className="flex items-center gap-4">
                                        <ShieldCheck className="text-green-600 w-10 h-10" />
                                        <div>
                                            <p className="font-bold text-gray-900">{badge.title}</p>
                                            {badge.subtitle && <p className="text-xs text-gray-500">{badge.subtitle}</p>}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </FadeIn>
                    </div>

                    <div className="lg:w-1/2 order-1 lg:order-2">
                        <FadeIn>
                            {tagline && <span className="text-secondary font-bold tracking-widest text-xs uppercase block mb-2">{tagline}</span>}
                            {title && <h2 className="text-4xl font-serif font-bold mb-6 text-primary">{title}</h2>}
                            {description && <p className="text-lg text-gray-700 mb-8 leading-relaxed">{description}</p>}

                            {features.length > 0 && (
                                <div className="space-y-6">
                                    {features.map((feature, idx) => {
                                        const IconComponent = getIcon(feature.icon);
                                        return (
                                            <div key={idx} className="flex gap-4">
                                                <div className="bg-white p-3 shadow-sm rounded-lg h-fit text-primary border border-gray-100">
                                                    <IconComponent size={24} />
                                                </div>
                                                <div>
                                                    {feature.title && <h4 className="font-bold text-gray-900">{feature.title}</h4>}
                                                    {feature.desc && <p className="text-sm text-gray-600">{feature.desc}</p>}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SafetySecurity;

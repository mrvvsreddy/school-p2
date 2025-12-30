import React from 'react';
import FadeIn from '../UI/FadeIn';

const Leadership = ({ data }) => {
    if (!data) return null;

    const tagline = data.tagline;
    const title = data.title;
    const members = data.members || [];

    if (members.length === 0) return null;

    return (
        <section className="py-24 bg-primary text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    {tagline && <span className="text-accent font-bold tracking-widest text-xs uppercase block mb-2">{tagline}</span>}
                    {title && <h2 className="text-4xl font-serif font-bold text-white">{title}</h2>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {members.map((person, idx) => (
                        <FadeIn key={idx} delay={idx * 100} className="group relative overflow-hidden rounded-lg bg-black/20">
                            <img
                                src={person.image || person.img}
                                alt={person.name}
                                className="w-full h-80 object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent">
                                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                                    {person.name && <h3 className="text-xl font-bold font-serif text-white">{person.name}</h3>}
                                    {person.role && <p className="text-accent text-sm font-medium uppercase tracking-wider">{person.role}</p>}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;

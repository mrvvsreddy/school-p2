import React from 'react';
import FadeIn from '../UI/FadeIn';

// Default data - used when no props provided
const defaultLeadershipData = [
    { name: "Dr. Sarah Mitchell", role: "Principal", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
    { name: "James Anderson", role: "Vice Principal", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
    { name: "Emily Chen", role: "Head of Academics", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" },
    { name: "Robert Wilson", role: "Sports Director", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop" }
];

const Leadership = ({ data }) => {
    // Use props data if provided, otherwise use defaults
    const tagline = data?.tagline || 'Leadership';
    const title = data?.title || 'Guiding Our Path';
    const members = data?.members || defaultLeadershipData;

    return (
        <section className="py-24 bg-primary text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold tracking-widest text-xs uppercase block mb-2">{tagline}</span>
                    <h2 className="text-4xl font-serif font-bold text-white">{title}</h2>
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
                                    <h3 className="text-xl font-bold font-serif text-white">{person.name}</h3>
                                    <p className="text-accent text-sm font-medium uppercase tracking-wider">{person.role}</p>
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

import React from 'react';
import FadeIn from '../UI/FadeIn';

const Methodology = ({ data }) => {
    // If no data, don't render
    if (!data) return null;

    const cards = data.cards || [];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:w-1/2">
                        <FadeIn>
                            {data.tagline && (
                                <span className="text-accent font-bold tracking-widest text-xs uppercase block mb-2">
                                    {data.tagline}
                                </span>
                            )}
                            {data.title && (
                                <h2 className="text-4xl font-serif font-bold text-primary mb-6">{data.title}</h2>
                            )}
                            {data.description && (
                                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                    {data.description}
                                </p>
                            )}
                            {cards.length > 0 && (
                                <div className="grid grid-cols-2 gap-6 mt-8">
                                    {cards.map((card, index) => (
                                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                                            {card.title && (
                                                <h4 className="font-bold text-lg mb-2 text-primary">{card.title}</h4>
                                            )}
                                            {card.description && (
                                                <p className="text-sm text-gray-600">{card.description}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </FadeIn>
                    </div>
                    {data.image && (
                        <div className="md:w-1/2 relative">
                            <FadeIn delay={200}>
                                <div className="absolute -inset-4 bg-primary/5 rounded-2xl -z-10 transform rotate-3"></div>
                                <img
                                    src={data.image}
                                    alt="Classroom Interaction"
                                    className="rounded-xl shadow-2xl w-full"
                                    onError={(e) => { e.target.src = 'https://placehold.co/800x600/f3f4f6/6d0b1a?text=Methodology' }}
                                />
                            </FadeIn>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Methodology;

import React from 'react';
import FadeIn from '../UI/FadeIn';

const defaultCampusData = [
    { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop", label: "Main Quadrangle" },
    { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", label: "Science Labs" },
    { url: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=800&auto=format&fit=crop", label: "Sports Complex" },
    { url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop", label: "Modern Library" },
];

const CampusGallery = ({ data }) => {
    const title = data?.title || 'Life on Campus';
    const images = data?.images || defaultCampusData;

    // Calculate grid columns based on number of images
    const getGridClass = () => {
        const count = images.length;
        if (count === 1) return 'grid-cols-1';
        if (count === 2) return 'grid-cols-2';
        if (count === 3) return 'grid-cols-3';
        return 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
    };

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12">{title}</h2>
                <div className={`grid ${getGridClass()} gap-4 md:gap-6`}>
                    {images.map((place, idx) => (
                        <FadeIn
                            key={idx}
                            delay={idx * 100}
                            className="relative rounded-2xl overflow-hidden group aspect-[4/3]"
                        >
                            <img
                                src={place.url || place.src || place.img}
                                alt={place.label || place.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-bold text-xl">{place.label || place.alt}</span>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CampusGallery;

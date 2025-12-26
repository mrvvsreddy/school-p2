import React from 'react';
import FadeIn from '../UI/FadeIn';

const campusData = [
    { img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop", label: "Main Quadrangle", colSpan: "col-span-2 row-span-2" },
    { img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", label: "Science Labs", colSpan: "col-span-1 row-span-1" },
    { img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=800&auto=format&fit=crop", label: "Sports Complex", colSpan: "col-span-1 row-span-1" },
    { img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop", label: "Modern Library", colSpan: "col-span-2 row-span-1" },
];

const CampusGallery = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-4xl font-serif font-bold text-gray-900 mb-12">Life on Campus</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 h-[600px]">
                    {campusData.map((place, idx) => (
                        <FadeIn key={idx} delay={idx * 100} className={`${place.colSpan} relative rounded-2xl overflow-hidden group`}>
                            <img src={place.img} alt={place.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-bold text-xl">{place.label}</span>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CampusGallery;

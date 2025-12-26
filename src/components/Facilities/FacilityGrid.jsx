import React from 'react';
import FadeIn from '../UI/FadeIn';
import { Book, FlaskConical, Trophy, Bus, Coffee, Dumbbell } from 'lucide-react';

const FacilityGrid = () => {
    const facilities = [
        {
            icon: Book,
            title: "Resource Centre",
            desc: "A vast library with digital archives, study pods, and over 20,000 volumes.",
            image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop"
        },
        {
            icon: FlaskConical,
            title: "Advanced Labs",
            desc: "Physics, Chemistry, and Biology labs equipped with modern apparatus for hands-on learning.",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop"
        },
        {
            icon: Trophy,
            title: "Sports Complex",
            desc: "Indoor stadium, swimming pool, cricket ground, and professional coaching courts.",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
        },
        {
            icon: Bus,
            title: "Transport Fleet",
            desc: "Safe, GPS-enabled AC buses covering all major routes in the city.",
            image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop"
        },
        {
            icon: Coffee,
            title: "Cafeteria",
            desc: "Hygienic, nutritious meals served in a clean and spacious dining hall.",
            image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=2194&auto=format&fit=crop"
        },
        {
            icon: Dumbbell,
            title: "Fitness Center",
            desc: "Modern gymnasium and yoga studio to promote physical well-being.",
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold tracking-widest text-xs uppercase block mb-2">Campus Life</span>
                    <h2 className="text-4xl font-serif font-bold text-primary">Student Amenities</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {facilities.map((fac, idx) => (
                        <FadeIn key={idx} delay={idx * 100}>
                            <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100 relative h-96">
                                {/* Image Background */}
                                <div className="absolute inset-0">
                                    <img
                                        src={fac.image}
                                        alt={fac.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary mb-4 opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        <fac.icon size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{fac.title}</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                        {fac.desc}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FacilityGrid;

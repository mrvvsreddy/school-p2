import React from 'react';
import { GraduationCap, BookOpen, Monitor, ArrowRight, Trophy, Users, Globe } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <GraduationCap strokeWidth={1} size={40} />,
            title: "Academic Excellence",
            description: "World-class curriculum designed to foster critical thinking and innovation.",
            link: "Explore Programs"
        },
        {
            icon: <Globe strokeWidth={1} size={40} />,
            title: "Global Perspective",
            description: "Diverse community representing 50+ nations, preparing students for a connected world.",
            link: "International"
        },
        {
            icon: <Users strokeWidth={1} size={40} />,
            title: "Vibrant Community",
            description: "Over 100 student clubs, sports teams, and cultural organizations.",
            link: "Student Life"
        }
    ];

    return (
        <section className="bg-[#580000] text-white py-24 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-800/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-center md:text-left">
                    <div className="max-w-2xl">
                        <span className="text-accent font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Why EduNet?</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                            A legacy of <span className="italic text-accent/90">distinction</span> and <br />
                            future-ready learning.
                        </h2>
                    </div>
                    <div className="flex-shrink-0">
                        <button className="border border-white/30 hover:bg-white hover:text-primary px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300">
                            Discover More
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white hover:text-primary text-white transition-all duration-500 rounded-sm hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
                            <div className="mb-8 p-4 inline-block rounded-full bg-white/10 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-500">
                                {feature.icon}
                            </div>

                            <h3 className="text-2xl font-serif font-bold mb-4 text-white group-hover:text-primary transition-colors">{feature.title}</h3>
                            <p className="text-white/70 group-hover:text-gray-600 text-sm leading-relaxed mb-8 transition-colors duration-500">
                                {feature.description}
                            </p>

                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent group-hover:text-primary transition-colors">
                                <span>{feature.link}</span>
                                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Stats Strip */}
                <div className="mt-20 border-t border-white/10 pt-10 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-80">
                    <div className="flex items-center gap-3">
                        <Trophy size={20} className="text-accent" />
                        <span className="text-sm font-medium tracking-wide">Top 10 Research Universities</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Users size={20} className="text-accent" />
                        <span className="text-sm font-medium tracking-wide">98% Graduate Employment Rate</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Globe size={20} className="text-accent" />
                        <span className="text-sm font-medium tracking-wide">Alumni in 120 Countries</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Features;

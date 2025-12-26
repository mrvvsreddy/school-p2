import React from 'react';
import FadeIn from '../UI/FadeIn';
import { Microscope, Palette, Briefcase, Globe, Code, Music } from 'lucide-react';

const Departments = () => {
    const depts = [
        { icon: Microscope, name: "Science", desc: "Physics, Chemistry, Biology labs" },
        { icon: Code, name: "Technology", desc: "Computer Science, AI, Robotics" },
        { icon: Briefcase, name: "Commerce", desc: "Business Studies, Economics, Accountancy" },
        { icon: Palette, name: "Arts", desc: "Fine Arts, Design, Psychology" },
        { icon: Globe, name: "Humanities", desc: "History, Political Science, Sociology" },
        { icon: Music, name: "Performing Arts", desc: "Music, Dance, Theater" },
    ];

    return (
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold tracking-widest text-xs uppercase block mb-2">Areas of Study</span>
                    <h2 className="text-4xl font-serif font-bold text-white">Academic Departments</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {depts.map((dept, index) => (
                        <FadeIn key={index} delay={index * 100}>
                            <div className="group bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                                <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-primary transition-colors">
                                    <dept.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent transition-colors">{dept.name}</h3>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{dept.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Departments;

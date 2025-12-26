import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import FadeIn from '../UI/FadeIn';

const InfoGrid = () => {
    const cards = [
        {
            icon: Phone,
            title: "Call Us",
            lines: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
        },
        {
            icon: Mail,
            title: "Email Us",
            lines: ["admissions@edunet.edu", "info@edunet.edu"],
        },
        {
            icon: Clock,
            title: "Office Hours",
            lines: ["Mon - Fri: 8:00 AM - 4:00 PM", "Sat: 9:00 AM - 1:00 PM"],
        },
        {
            icon: MapPin,
            title: "Visit Us",
            lines: ["123 School Lane, Boston,", "MA 02108, United States"],
        },
    ];

    return (
        <div className="flex flex-col gap-4 h-full pt-6">
            {cards.map((card, idx) => (
                <FadeIn key={idx} delay={idx * 100}>
                    <div className="group bg-white p-5 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100/50 hover:border-primary/20 hover:shadow-[0_8px_24px_rgba(153,27,27,0.08)] transition-all duration-300 flex items-start gap-5 cursor-pointer relative overflow-hidden">

                        {/* Interactive Stripe */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>

                        {/* Icon Box */}
                        <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0 mt-1">
                            <card.icon size={22} className="transition-transform duration-300 group-hover:scale-90" />
                        </div>

                        {/* Text Content */}
                        <div className="flex-grow">
                            <h3 className="text-lg font-serif font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">{card.title}</h3>
                            <div className="text-sm text-gray-500 font-medium space-y-0.5 leading-relaxed">
                                {card.lines.map((line, i) => (
                                    <p key={i} className="group-hover:text-gray-700 transition-colors">{line}</p>
                                ))}
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="self-center text-gray-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            <ArrowRight size={18} className="text-primary" />
                        </div>
                    </div>
                </FadeIn>
            ))}
        </div>
    );
};

export default InfoGrid;

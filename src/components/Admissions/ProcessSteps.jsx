import React from 'react';
import { FileText, UserCheck, CreditCard, School, ArrowRight } from 'lucide-react';
import FadeIn from '../UI/FadeIn';

const steps = [
    {
        id: 1,
        title: "Submit Application",
        desc: "Complete the online application form with personal details and academic history.",
        icon: FileText
    },
    {
        id: 2,
        title: "Entrance Assessment",
        desc: "Participate in a written assessment or interview tailored to the grade level.",
        icon: UserCheck
    },
    {
        id: 3,
        title: "Document Verification",
        desc: "Submit necessary documents including transcripts and birth certificates for verification.",
        icon: School
    },
    {
        id: 4,
        title: "Fee Payment & Enrollment",
        desc: "Upon selection, secure your seat by paying the admission fee to confirm enrollment.",
        icon: CreditCard
    }
];

const ProcessSteps = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <FadeIn className="text-center mb-20">
                    <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-2">How to Apply</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Admission Process</h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-0 w-full h-0.5 bg-gray-200 z-0"></div>

                    {steps.map((step, idx) => (
                        <FadeIn key={step.id} delay={idx * 150} className="relative group text-center z-10">
                            {/* Step Number Circle */}
                            <div className="w-32 h-32 mx-auto bg-white rounded-full border-4 border-gray-100 flex items-center justify-center mb-8 relative group-hover:border-primary transition-colors duration-500 shadow-sm group-hover:shadow-xl">
                                <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <step.icon size={32} />
                                </div>
                                <div className="absolute -top-3 -right-3 w-10 h-10 bg-accent text-gray-900 font-bold rounded-full flex items-center justify-center shadow-md text-sm border-2 border-white">
                                    {step.id}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">{step.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed max-w-[250px] mx-auto">
                                {step.desc}
                            </p>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSteps;

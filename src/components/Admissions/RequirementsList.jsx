import React from 'react';
import { FileText, School, Baby, GraduationCap, HeartPulse, CreditCard, Plane, FileCheck } from 'lucide-react';
import FadeIn from '../UI/FadeIn';

const requirements = [
    {
        icon: FileText,
        text: "Completed Application Form",
        subtext: "With 2 passport-size recent photos"
    },
    {
        icon: GraduationCap,
        text: "Official Transcripts",
        subtext: "Report cards from previous school (Last 2 years)"
    },
    {
        icon: Baby,
        text: "Birth Certificate",
        subtext: "Original required for verification"
    },
    {
        icon: School,
        text: "Transfer Certificate (TC)",
        subtext: "Issued by the previous school authority"
    },
    {
        icon: HeartPulse,
        text: "Medical Fitness Certificate",
        subtext: "Signed by a registered practitioner"
    },
    {
        icon: CreditCard,
        text: "Identity Proof",
        subtext: "Aadhar Card copy of student & parents"
    },
    {
        icon: Plane,
        text: "Passport Copy",
        subtext: "Mandatory for international students"
    }
];

const RequirementsList = () => {
    return (
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
            {/* Dark theme for contrast */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <FadeIn delay={0} className="relative">
                            <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-lg"></div>
                            <img
                                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
                                alt="Application Review"
                                className="rounded-xl shadow-2xl border border-white/10 relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            {/* Floating Card */}
                            <div className="absolute -bottom-10 -right-10 bg-white text-gray-900 p-6 rounded-lg shadow-xl hidden md:block max-w-xs z-20">
                                <div className="flex gap-4 items-center">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <FileCheck size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg">Quick Verification</p>
                                        <p className="text-xs text-gray-500">2-3 working days processing time</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="lg:w-1/2">
                        <FadeIn delay={200}>
                            <span className="text-accent font-bold tracking-widest text-xs uppercase block mb-2">Checklist</span>
                            <h2 className="text-4xl font-serif font-bold mb-8 text-white">Required Documents</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {requirements.map((req, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors group">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-gray-900 transition-colors shrink-0">
                                            <req.icon size={20} />
                                        </div>
                                        <div>
                                            <span className="text-gray-200 font-bold text-sm block group-hover:text-white transition-colors">{req.text}</span>
                                            <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">{req.subtext}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RequirementsList;

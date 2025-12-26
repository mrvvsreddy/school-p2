import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import FadeIn from '../UI/FadeIn';

const ApplyCTA = () => {
    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full mix-blend-overlay filter blur-3xl -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white text-shadow-lg">Ready to Join Us?</h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light tracking-wide">
                        Applications for the 2024-25 academic session are now open. Secure your child's future with EduNet School.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link
                            to="/apply"
                            className="group relative px-8 py-4 bg-white text-primary font-bold text-lg rounded-full overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Apply Online Now
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
                        </Link>

                        <Link
                            to="/contact"
                            className="group px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold text-lg rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95 backdrop-blur-sm"
                        >
                            <Phone size={20} className="group-hover:rotate-12 transition-transform" />
                            Contact Admissions
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default ApplyCTA;

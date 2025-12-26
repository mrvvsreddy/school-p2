import React from 'react';
import FadeIn from '../UI/FadeIn';
import { ShieldCheck, Video, Users, Bell } from 'lucide-react';

const SafetySecurity = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 order-2 lg:order-1 relative">
                        <FadeIn delay={200}>
                            <img
                                src="https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2670&auto=format&fit=crop"
                                alt="Student Safety"
                                className="rounded-2xl shadow-xl w-full"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
                                <div className="flex items-center gap-4">
                                    <ShieldCheck className="text-green-600 w-10 h-10" />
                                    <div>
                                        <p className="font-bold text-gray-900">Certified Safe</p>
                                        <p className="text-xs text-gray-500">ISO 9001 Compliant Campus</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="lg:w-1/2 order-1 lg:order-2">
                        <FadeIn>
                            <span className="text-secondary font-bold tracking-widest text-xs uppercase block mb-2">Safety First</span>
                            <h2 className="text-4xl font-serif font-bold mb-6 text-primary">Secure Learning Environment</h2>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                The safety of our students is non-negotiable. We maintain a vigilant, secure, and caring atmosphere where every child feels protected.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="bg-white p-3 shadow-sm rounded-lg h-fit text-primary border border-gray-100"><Video size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">24/7 Surveillance</h4>
                                        <p className="text-sm text-gray-600">CCTV coverage of all common areas and classrooms.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-white p-3 shadow-sm rounded-lg h-fit text-primary border border-gray-100"><Users size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Trained Personnel</h4>
                                        <p className="text-sm text-gray-600">Professional security staff and vetted support personnel.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-white p-3 shadow-sm rounded-lg h-fit text-primary border border-gray-100"><Bell size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Emergency Protocols</h4>
                                        <p className="text-sm text-gray-600">Regular fire drills and rapid response systems.</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SafetySecurity;

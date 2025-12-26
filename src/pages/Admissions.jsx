import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Download } from 'lucide-react';

const Admissions = () => {
    const requirements = [
        "Completed Application Form",
        "Official Transcripts from previous school",
        "Birth Certificate Copy",
        "2 Recent Passport-sized Photographs",
        "Medical Fitness Certificate"
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            <Helmet>
                <title>Admissions | EduNet School</title>
                <meta name="description" content="Join EduNet School. Apply now for the upcoming academic year. Check admission requirements and process here." />
                <script type="application/ld+json">
                    {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "What are the admission requirements?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We require a completed application form, official transcripts, birth certificate copy, and recent photographs."
                }
              }]
            }
          `}
                </script>
            </Helmet>

            {/* Hero Banner */}
            <div className="bg-primary text-white py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Admissions</h1>
                    <p className="text-lg opacity-90 max-w-2xl">Start your journey with us. We welcome students from all backgrounds who are eager to learn and grow.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <section className="bg-white p-8 rounded-sm shadow-sm mb-8">
                            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Admission Process</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Our admission process is designed to be transparent and merit-based. We look for students who demonstrate academic potential and a willingness to participate in our vibrant school community.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">1</div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Submit Application</h3>
                                        <p className="text-sm text-gray-600">Fill out the online application form or visit our admissions office.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">2</div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Entrance Assessment</h3>
                                        <p className="text-sm text-gray-600">Schedule a written test and interview dependent on the grade level.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">3</div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">Final Review & Fee Payment</h3>
                                        <p className="text-sm text-gray-600">Successful candidates will receive an offer letter. Secure the seat by paying the admission fee.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="bg-white p-8 rounded-sm shadow-sm">
                            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Requirements</h2>
                            <ul className="space-y-3">
                                {requirements.map((req, btn) => (
                                    <li key={btn} className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle size={18} className="text-green-600" />
                                        {req}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div>
                        <div className="bg-white p-6 rounded-sm shadow-sm mb-6 sticky top-24">
                            <h3 className="text-xl font-serif font-bold mb-4">Downloads</h3>
                            <div className="space-y-3">
                                <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded hover:bg-gray-50 text-left text-sm font-medium text-gray-700">
                                    <span>Admission Form 2024-25</span>
                                    <Download size={16} />
                                </button>
                                <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded hover:bg-gray-50 text-left text-sm font-medium text-gray-700">
                                    <span>Fee Structure</span>
                                    <Download size={16} />
                                </button>
                                <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded hover:bg-gray-50 text-left text-sm font-medium text-gray-700">
                                    <span>School Prospectus</span>
                                    <Download size={16} />
                                </button>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <h3 className="text-xl font-serif font-bold mb-4">Need Help?</h3>
                                <p className="text-sm text-gray-600 mb-4">Contact our admissions office for guidance.</p>
                                <a href="/contact" className="block w-full bg-primary text-white text-center py-2 rounded-sm font-bold uppercase text-xs tracking-wider hover:bg-primary-light transition-colors">Contact Us</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Admissions;

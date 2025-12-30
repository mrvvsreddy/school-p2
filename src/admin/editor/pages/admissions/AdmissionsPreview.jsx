import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
    FileText, UserCheck, School, CreditCard, GraduationCap, Baby, HeartPulse, Plane, Download,
    Plus, Minus, HelpCircle, ArrowRight, Phone, FileCheck
} from 'lucide-react';

// Icon mapping for process steps
const stepIconMap = {
    FileText, UserCheck, School, CreditCard
};

// Icon mapping for requirements
const reqIconMap = {
    FileText, GraduationCap, Baby, School, HeartPulse, CreditCard, Plane
};

const AdmissionsPreview = ({ content }) => {
    const [openFaqIndex, setOpenFaqIndex] = useState(0);

    // Transform content array to object keyed by section_key
    const sectionData = useMemo(() => {
        if (!content || !Array.isArray(content)) return {};
        const dataMap = {};
        content.forEach(section => {
            let parsedContent = section.content;
            if (typeof parsedContent === 'string') {
                try {
                    parsedContent = JSON.parse(parsedContent);
                } catch (e) {
                    parsedContent = {};
                }
            }
            dataMap[section.section_key] = parsedContent || {};
        });
        return dataMap;
    }, [content]);

    const heroData = sectionData.hero || {};
    const processData = sectionData.process || {};
    const requirementsData = sectionData.requirements || {};
    const downloadsData = sectionData.downloads || {};
    const faqData = sectionData.faq || {};
    const ctaData = sectionData.cta || {};

    // Defaults
    const defaultSteps = [
        { id: 1, title: "Submit Application", desc: "Complete the online application form.", icon: 'FileText' },
        { id: 2, title: "Entrance Assessment", desc: "Participate in a written assessment.", icon: 'UserCheck' },
        { id: 3, title: "Document Verification", desc: "Submit documents for verification.", icon: 'School' },
        { id: 4, title: "Fee Payment & Enrollment", desc: "Pay admission fee to confirm enrollment.", icon: 'CreditCard' }
    ];
    const steps = processData.steps?.length > 0 ? processData.steps : defaultSteps;

    const defaultReqs = [
        { icon: 'FileText', text: "Completed Application Form", subtext: "With 2 passport-size photos" },
        { icon: 'GraduationCap', text: "Official Transcripts", subtext: "Last 2 years" },
        { icon: 'Baby', text: "Birth Certificate", subtext: "Original required" }
    ];
    const requirements = requirementsData.requirements?.length > 0 ? requirementsData.requirements : defaultReqs;

    const defaultDocs = [
        { title: "Admission Application Form", size: "1.2 MB", desc: "Main application form." },
        { title: "Fee Structure 2024-25", size: "850 KB", desc: "Fee breakdown." }
    ];
    const documents = downloadsData.documents?.length > 0 ? downloadsData.documents : defaultDocs;

    const defaultFaqs = [
        { question: "What is the age criteria for admission?", answer: "For Kindergarten, the child should be 4 years old as of June 1st." },
        { question: "Is there an entrance test?", answer: "Entrance assessments are conducted for Grade 1 onwards." }
    ];
    const faqs = faqData.faqs?.length > 0 ? faqData.faqs : defaultFaqs;

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroData.image || "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop"}
                        alt="Admissions"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <span className="text-secondary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
                        {heroData.tagline || 'Join Our Community'}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-white">
                        {heroData.title || 'Admissions Open'}
                    </h1>
                    <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto font-light">
                        {heroData.subtitle || 'Begin your journey towards academic excellence.'}
                    </p>
                </div>
            </div>

            {/* Process Steps Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-2">
                            {processData.tagline || 'How to Apply'}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
                            {processData.title || 'Admission Process'}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        <div className="hidden md:block absolute top-[60px] left-0 w-full h-0.5 bg-gray-200"></div>
                        {steps.map((step, idx) => {
                            const StepIcon = stepIconMap[step.icon] || FileText;
                            return (
                                <div key={idx} className="relative text-center z-10">
                                    <div className="w-32 h-32 mx-auto bg-white rounded-full border-4 border-gray-100 flex items-center justify-center mb-8 shadow-sm">
                                        <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                                            <StepIcon size={32} />
                                        </div>
                                        <div className="absolute -top-3 -right-3 w-10 h-10 bg-accent text-gray-900 font-bold rounded-full flex items-center justify-center text-sm border-2 border-white">
                                            {step.id || idx + 1}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">{step.title}</h3>
                                    <p className="text-gray-600 text-sm max-w-[250px] mx-auto">{step.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Requirements Section */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-lg"></div>
                                <img
                                    src={requirementsData.image || "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200"}
                                    alt="Requirements"
                                    className="rounded-xl shadow-2xl border border-white/10 relative z-10 grayscale"
                                />
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <span className="text-accent font-bold tracking-widest text-xs uppercase block mb-2">
                                {requirementsData.tagline || 'Checklist'}
                            </span>
                            <h2 className="text-4xl font-serif font-bold mb-8 text-white">
                                {requirementsData.title || 'Required Documents'}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {requirements.map((req, idx) => {
                                    const ReqIcon = reqIconMap[req.icon] || FileText;
                                    return (
                                        <div key={idx} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg">
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent shrink-0">
                                                <ReqIcon size={20} />
                                            </div>
                                            <div>
                                                <span className="text-gray-200 font-bold text-sm block">{req.text}</span>
                                                <span className="text-xs text-gray-500">{req.subtext}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Downloads Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest text-xs uppercase block mb-2">
                            {downloadsData.tagline || 'Resources'}
                        </span>
                        <h2 className="text-4xl font-serif font-bold text-gray-900">
                            {downloadsData.title || 'Downloadable Forms'}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {documents.map((doc, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg h-full flex flex-col relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] -mr-4 -mt-4"></div>
                                <div className="w-14 h-14 bg-red-50 text-primary rounded-xl flex items-center justify-center mb-6">
                                    <FileText size={28} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{doc.title}</h3>
                                <p className="text-sm text-gray-500 mb-8">{doc.desc}</p>
                                <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-100">
                                    <span className="text-xs font-bold text-gray-400 uppercase">{doc.size}</span>
                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                                        <Download size={18} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-1">
                            <span className="text-accent font-bold tracking-widest text-xs uppercase block mb-2">
                                {faqData.tagline || 'Support'}
                            </span>
                            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                                {faqData.title || 'Frequently Asked Questions'}
                            </h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                {faqData.intro || 'Here are answers to some common queries to help you make an informed choice.'}
                            </p>
                            <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                                <div className="flex items-center gap-3 mb-3 text-primary">
                                    <HelpCircle size={24} />
                                    <span className="font-bold">Still have questions?</span>
                                </div>
                                <p className="text-sm text-gray-600 mb-4">Our admissions team is here to help you.</p>
                                <span className="text-sm font-bold text-primary">Contact Admissions →</span>
                            </div>
                        </div>
                        <div className="lg:col-span-2 space-y-4">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className={`border rounded-xl transition-all ${openFaqIndex === idx ? 'border-primary shadow-lg bg-white' : 'border-gray-100 bg-gray-50'}`}>
                                    <button
                                        className="w-full flex items-center justify-between p-6 text-left"
                                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)}
                                    >
                                        <span className={`font-serif font-bold text-lg ${openFaqIndex === idx ? 'text-primary' : 'text-gray-800'}`}>
                                            {faq.question}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaqIndex === idx ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                                            {openFaqIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                                        </div>
                                    </button>
                                    {openFaqIndex === idx && (
                                        <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
                </div>
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
                        {ctaData.title || 'Ready to Join Us?'}
                    </h2>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light">
                        {ctaData.subtitle || 'Applications for the academic session are now open.'}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link
                            to={ctaData.primary_button?.url || '/apply'}
                            className="px-8 py-4 bg-white text-primary font-bold text-lg rounded-full shadow-lg inline-flex items-center gap-2"
                        >
                            {ctaData.primary_button?.text || 'Apply Online Now'}
                            <ArrowRight size={20} />
                        </Link>
                        <Link
                            to={ctaData.secondary_button?.url || '/contact'}
                            className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold text-lg rounded-full flex items-center gap-2"
                        >
                            <Phone size={20} />
                            {ctaData.secondary_button?.text || 'Contact Admissions'}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdmissionsPreview;

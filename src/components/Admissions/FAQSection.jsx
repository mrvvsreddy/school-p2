import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import FadeIn from '../UI/FadeIn';

const faqs = [
    {
        question: "What is the age criteria for Kindergarten admission?",
        answer: "For Kindergarten (KG-1), the child should be 4 years old as of June 1st of the academic year. For Nursery, the minimum age is 3 years."
    },
    {
        question: "Is there an entrance test for all grades?",
        answer: "Entrance assessments are conducted for Grade 1 onwards to understand the student's proficiency in English, Mathematics, and Science. For Kindergarten, we have a friendly interaction session."
    },
    {
        question: "Do you offer school transport facilities?",
        answer: "Yes, we have a fleet of GPS-enabled buses covering a radius of 25km from the school campus. Route details and fee structure can be obtained from the transport office."
    },
    {
        question: " What is the student-teacher ratio?",
        answer: "We maintain a healthy student-teacher ratio of 25:1 to ensure personalized attention and effective learning for every child."
    },
    {
        question: "Are there any scholarships available?",
        answer: "Yes, merit-based scholarships are available for deserving students from Grade 8 onwards, as well as for outstanding achievements in sports and arts."
    }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Title & Intro */}
                    <div className="lg:col-span-1">
                        <FadeIn>
                            <span className="text-accent font-bold tracking-widest text-xs uppercase block mb-2">Support</span>
                            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Finiding the right school is a big decision. Here are answers to some common queries to help you make an informed choice.
                            </p>
                            <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                                <div className="flex items-center gap-3 mb-3 text-primary">
                                    <HelpCircle size={24} />
                                    <span className="font-bold">Still have questions?</span>
                                </div>
                                <p className="text-sm text-gray-600 mb-4">Our admissions team is here to help you.</p>
                                <a href="/contact" className="text-sm font-bold text-primary hover:underline">Contact Admissions &rarr;</a>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="lg:col-span-2 space-y-4">
                        {faqs.map((faq, idx) => (
                            <FadeIn key={idx} delay={idx * 50}>
                                <div className={`border rounded-xl transition-all duration-300 ${openIndex === idx ? 'border-primary shadow-lg bg-white' : 'border-gray-100 bg-gray-50 hover:bg-white'}`}>
                                    <button
                                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                        onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                                    >
                                        <span className={`font-serif font-bold text-lg ${openIndex === idx ? 'text-primary' : 'text-gray-800'}`}>
                                            {faq.question}
                                        </span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === idx ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                                            {openIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                                        </div>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${openIndex === idx ? 'max-h-96' : 'max-h-0'}`}
                                    >
                                        <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-transparent">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;

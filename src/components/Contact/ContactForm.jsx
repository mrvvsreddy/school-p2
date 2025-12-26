import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
    const [focused, setFocused] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="bg-white/80 backdrop-blur-lg p-8 md:p-12 rounded-2xl shadow-2xl border border-white/50 relative overflow-hidden">
            {submitted && (
                <div className="absolute inset-0 bg-green-50/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-green-700 animate-in fade-in duration-300">
                    <CheckCircle size={64} className="mb-4" />
                    <h3 className="text-2xl font-bold">Message Sent!</h3>
                    <p>We will get back to you shortly.</p>
                </div>
            )}

            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                        <label
                            className={`absolute left-4 transition-all duration-300 pointer-events-none ${focused === 'fname' || document.getElementById('fname')?.value ? '-top-2.5 text-xs bg-white px-2 text-primary' : 'top-3.5 text-gray-400'}`}
                        >
                            First Name
                        </label>
                        <input
                            id="fname"
                            type="text"
                            onFocus={() => setFocused('fname')}
                            onBlur={(e) => !e.target.value && setFocused('')}
                            className="w-full bg-white/50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium text-gray-700"
                        />
                    </div>
                    <div className="relative">
                        <label
                            className={`absolute left-4 transition-all duration-300 pointer-events-none ${focused === 'lname' || document.getElementById('lname')?.value ? '-top-2.5 text-xs bg-white px-2 text-primary' : 'top-3.5 text-gray-400'}`}
                        >
                            Last Name
                        </label>
                        <input
                            id="lname"
                            type="text"
                            onFocus={() => setFocused('lname')}
                            onBlur={(e) => !e.target.value && setFocused('')}
                            className="w-full bg-white/50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium text-gray-700"
                        />
                    </div>
                </div>

                <div className="relative">
                    <label
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${focused === 'email' || document.getElementById('email')?.value ? '-top-2.5 text-xs bg-white px-2 text-primary' : 'top-3.5 text-gray-400'}`}
                    >
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        onFocus={() => setFocused('email')}
                        onBlur={(e) => !e.target.value && setFocused('')}
                        className="w-full bg-white/50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium text-gray-700"
                    />
                </div>

                <div className="relative">
                    <label
                        className={`absolute left-4 transition-all duration-300 pointer-events-none -top-2.5 text-xs bg-white px-2 text-primary`}
                    >
                        Subject
                    </label>
                    <select
                        className="w-full bg-white/50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium text-gray-700 appearance-none"
                    >
                        <option>Admissions Inquiry</option>
                        <option>General Inquiry</option>
                        <option>Feedback</option>
                        <option>Careers</option>
                    </select>
                </div>

                <div className="relative">
                    <label
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${focused === 'msg' || document.getElementById('msg')?.value ? '-top-2.5 text-xs bg-white px-2 text-primary' : 'top-3.5 text-gray-400'}`}
                    >
                        Message
                    </label>
                    <textarea
                        id="msg"
                        rows="4"
                        onFocus={() => setFocused('msg')}
                        onBlur={(e) => !e.target.value && setFocused('')}
                        className="w-full bg-white/50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium text-gray-700 resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-primary-dark text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
            </form>
        </div>
    );
};

export default ContactForm;

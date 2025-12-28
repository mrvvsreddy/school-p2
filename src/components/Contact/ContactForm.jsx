import React, { useState } from 'react';
import { Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

const API_BASE = 'http://localhost:8000/api/v1';

const ContactForm = () => {
    const [focused, setFocused] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: 'admission',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const sanitizeInput = (str) => {
        if (!str) return str;
        return str.replace(/<[^>]*>/g, '').replace(/[<>'"]/g, '').trim();
    };

    const validateForm = () => {
        if (!formData.firstName || !formData.email || !formData.message) {
            setError('Please fill in all required fields.');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('Please enter a valid email address.');
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!validateForm()) return;

        setSubmitting(true);

        try {
            const contactData = {
                name: sanitizeInput(`${formData.firstName} ${formData.lastName}`.trim()),
                email: sanitizeInput(formData.email).toLowerCase(),
                dial_code: '+91',
                phone: sanitizeInput(formData.phone),
                subject: formData.subject,
                message: sanitizeInput(formData.message),
                status: 'new'
            };

            const response = await fetch(`${API_BASE}/contacts/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(contactData)
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    subject: 'admission',
                    message: ''
                });
                setTimeout(() => setSubmitted(false), 4000);
            } else {
                const errorData = await response.json();
                setError(errorData.detail || 'Failed to send message. Please try again.');
            }
        } catch (err) {
            console.error('Contact form error:', err);
            setError('Network error. Please check your connection and try again.');
        } finally {
            setSubmitting(false);
        }
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

            {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                    <AlertCircle size={20} className="text-red-500 shrink-0" />
                    <p className="text-red-700 text-sm font-medium">{error}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                        <label
                            className={`absolute left-4 transition-all duration-300 pointer-events-none ${focused === 'firstName' || formData.firstName ? '-top-2.5 text-xs bg-white px-2 text-primary' : 'top-3.5 text-gray-400'}`}
                        >
                            First Name *
                        </label>
                        <input
                            name="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={handleChange}
                            onFocus={() => setFocused('firstName')}
                            onBlur={(e) => !e.target.value && setFocused('')}
                            maxLength={50}
                            className="w-full bg-white/50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium text-gray-700"
                        />
                    </div>
                    <div className="relative">
                        <label
                            className={`absolute left-4 transition-all duration-300 pointer-events-none ${focused === 'lastName' || formData.lastName ? '-top-2.5 text-xs bg-white px-2 text-primary' : 'top-3.5 text-gray-400'}`}
                        >
                            Last Name
                        </label>
                        <input
                            name="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={handleChange}
                            onFocus={() => setFocused('lastName')}
                            onBlur={(e) => !e.target.value && setFocused('')}
                            maxLength={50}
                            className="w-full bg-white/50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium text-gray-700"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                        <label
                            className={`absolute left-4 transition-all duration-300 pointer-events-none ${focused === 'email' || formData.email ? '-top-2.5 text-xs bg-white px-2 text-primary' : 'top-3.5 text-gray-400'}`}
                        >
                            Email Address *
                        </label>
                        <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocused('email')}
                            onBlur={(e) => !e.target.value && setFocused('')}
                            maxLength={100}
                            className="w-full bg-white/50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium text-gray-700"
                        />
                    </div>
                    <div className="relative">
                        <label
                            className={`absolute left-4 transition-all duration-300 pointer-events-none ${focused === 'phone' || formData.phone ? '-top-2.5 text-xs bg-white px-2 text-primary' : 'top-3.5 text-gray-400'}`}
                        >
                            Phone Number
                        </label>
                        <input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => setFocused('phone')}
                            onBlur={(e) => !e.target.value && setFocused('')}
                            maxLength={15}
                            placeholder=""
                            className="w-full bg-white/50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium text-gray-700"
                        />
                    </div>
                </div>

                <div className="relative">
                    <label className="absolute left-4 -top-2.5 text-xs bg-white px-2 text-primary">
                        Subject
                    </label>
                    <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-white/50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium text-gray-700 appearance-none cursor-pointer"
                    >
                        <option value="admission">Admissions Inquiry</option>
                        <option value="fees">Fee Structure</option>
                        <option value="general">General Inquiry</option>
                        <option value="feedback">Feedback</option>
                        <option value="careers">Careers</option>
                    </select>
                </div>

                <div className="relative">
                    <label
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${focused === 'message' || formData.message ? '-top-2.5 text-xs bg-white px-2 text-primary' : 'top-3.5 text-gray-400'}`}
                    >
                        Message *
                    </label>
                    <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocused('message')}
                        onBlur={(e) => !e.target.value && setFocused('')}
                        maxLength={1000}
                        className="w-full bg-white/50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium text-gray-700 resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-gradient-to-r from-primary to-primary-dark text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                    {submitting ? (
                        <>
                            <Loader2 size={18} className="animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            Send Message
                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;

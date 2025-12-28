import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Send, User, Users, MapPin, School, BookOpen, Loader2, AlertCircle, CheckCircle2, Shield } from 'lucide-react';
import FadeIn from '../components/UI/FadeIn';

const API_BASE = 'http://localhost:8000/api/v1';

// Simple rate limiting tracker
const rateLimitTracker = {
    lastSubmit: 0,
    count: 0,
    resetTime: 60000 // 1 minute
};

const Apply = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        dob: '',
        gender: '',
        grade: '',
        fatherName: '',
        motherName: '',
        email: '',
        phone: '',
        address: '',
        previousSchool: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    const formRef = useRef(null);
    const submitTimeRef = useRef(0);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(''); // Clear error on input
    };

    // Input sanitization
    const sanitizeInput = (str) => {
        if (!str) return str;
        return str
            .replace(/<[^>]*>/g, '') // Remove HTML tags
            .replace(/[<>'"]/g, '') // Remove potential XSS characters
            .trim();
    };

    // Validate form data
    const validateForm = () => {
        // Check required fields
        if (!formData.studentName || !formData.email || !formData.phone || !formData.grade) {
            setError('Please fill in all required fields.');
            return false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('Please enter a valid email address.');
            return false;
        }

        // Phone validation (Indian format)
        const phoneRegex = /^(\+91[\s-]?)?[6-9]\d{9}$/;
        const cleanPhone = formData.phone.replace(/[\s-]/g, '');
        if (!phoneRegex.test(cleanPhone)) {
            setError('Please enter a valid 10-digit Indian phone number.');
            return false;
        }

        // Name validation (no numbers or special chars)
        const nameRegex = /^[a-zA-Z\s.'-]+$/;
        if (!nameRegex.test(formData.studentName)) {
            setError('Student name should only contain letters.');
            return false;
        }

        // Rate limiting (prevent spam submissions)
        const now = Date.now();
        if (now - rateLimitTracker.lastSubmit < rateLimitTracker.resetTime) {
            rateLimitTracker.count++;
            if (rateLimitTracker.count > 3) {
                setError('Too many submissions. Please try again in a minute.');
                return false;
            }
        } else {
            rateLimitTracker.count = 1;
        }
        rateLimitTracker.lastSubmit = now;

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        submitTimeRef.current = Date.now();
        setError('');

        // Validate
        if (!validateForm()) {
            return;
        }

        setSubmitting(true);

        try {
            // Prepare sanitized data for API
            const applicationData = {
                student_name: sanitizeInput(formData.studentName),
                parent_name: sanitizeInput(formData.fatherName || formData.motherName),
                email: sanitizeInput(formData.email).toLowerCase(),
                phone: sanitizeInput(formData.phone),
                grade_applying: formData.grade === 'KG' ? 'Kindergarten' : `Grade ${formData.grade}`,
                date_of_birth: formData.dob || null,
                address: sanitizeInput(formData.address),
                previous_school: sanitizeInput(formData.previousSchool),
                notes: `Gender: ${formData.gender}. Father: ${sanitizeInput(formData.fatherName)}. Mother: ${sanitizeInput(formData.motherName)}.`,
                status: 'pending'
            };

            const response = await fetch(`${API_BASE}/applications/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(applicationData)
            });

            if (response.ok) {
                setSubmitted(true);
                window.scrollTo(0, 0);
            } else {
                const errorData = await response.json();
                setError(errorData.detail || 'Failed to submit application. Please try again.');
            }
        } catch (err) {
            console.error('Submission error:', err);
            setError('Network error. Please check your internet connection and try again.');
        } finally {
            setSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <Helmet><title>Application Submitted | EduNet School</title></Helmet>
                <div className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-lg w-full">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                        <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Application Received!</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Thank you for applying to EduNet School. We have received your details. Our admissions team will review your application and contact you shortly regarding the next steps.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                        <p className="text-sm text-green-700 font-medium">
                            📧 A confirmation email will be sent to <strong>{formData.email}</strong>
                        </p>
                    </div>
                    <a href="/" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-colors">
                        Return to Home
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans pb-24">
            <Helmet>
                <title>Apply Online | EduNet School</title>
                <meta name="description" content="Submit your application for EduNet School online. Fast, secure, and easy process for the upcoming academic year." />
            </Helmet>

            {/* Header */}
            <div className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">Online Application</h1>
                    <p className="text-white/80 max-w-xl mx-auto text-lg">
                        Take the first step towards a bright future. Please fill out the form below accurately.
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-4 text-white/60 text-sm">
                        <Shield size={16} />
                        <span>Your data is encrypted and secure</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-10 relative z-20">
                <form ref={formRef} onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">

                    {/* Error Message */}
                    {error && (
                        <div className="p-4 bg-red-50 border-b border-red-100 flex items-center gap-3">
                            <AlertCircle size={20} className="text-red-500 shrink-0" />
                            <p className="text-red-700 text-sm font-medium">{error}</p>
                        </div>
                    )}

                    {/* Section 1: Student Details */}
                    <div className="p-8 md:p-12 border-b border-gray-100">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                <User size={24} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">Student Details</h2>
                                <p className="text-sm text-gray-500">Information about the child</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                                <input
                                    required
                                    type="text"
                                    name="studentName"
                                    value={formData.studentName}
                                    onChange={handleChange}
                                    maxLength={100}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder="Enter student's full name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Date of Birth</label>
                                <input
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    max={new Date().toISOString().split('T')[0]}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Gender <span className="text-red-500">*</span></label>
                                <select
                                    required
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Applying For Grade <span className="text-red-500">*</span></label>
                                <select
                                    required
                                    name="grade"
                                    value={formData.grade}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                                >
                                    <option value="">Select Grade</option>
                                    <option value="KG">Kindergarten (KG)</option>
                                    <option value="1">Grade 1</option>
                                    <option value="2">Grade 2</option>
                                    <option value="3">Grade 3</option>
                                    <option value="4">Grade 4</option>
                                    <option value="5">Grade 5</option>
                                    <option value="6">Grade 6</option>
                                    <option value="7">Grade 7</option>
                                    <option value="8">Grade 8</option>
                                    <option value="9">Grade 9</option>
                                    <option value="10">Grade 10</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Parent Details */}
                    <div className="p-8 md:p-12 border-b border-gray-100 bg-gray-50/50">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-gray-900">
                                <Users size={24} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">Parent / Guardian Details</h2>
                                <p className="text-sm text-gray-500">Contact information</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Father's Name <span className="text-red-500">*</span></label>
                                <input
                                    required
                                    type="text"
                                    name="fatherName"
                                    value={formData.fatherName}
                                    onChange={handleChange}
                                    maxLength={100}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Mother's Name <span className="text-red-500">*</span></label>
                                <input
                                    required
                                    type="text"
                                    name="motherName"
                                    value={formData.motherName}
                                    onChange={handleChange}
                                    maxLength={100}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    maxLength={100}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                                <input
                                    required
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    maxLength={15}
                                    placeholder="+91 98765 43210"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Additional Info */}
                    <div className="p-8 md:p-12">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-700">
                                <BookOpen size={24} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">Additional Information</h2>
                                <p className="text-sm text-gray-500">Address and background</p>
                            </div>
                        </div>

                        <div className="space-y-6 text-left">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Previous School (if applicable)</label>
                                <input
                                    type="text"
                                    name="previousSchool"
                                    value={formData.previousSchool}
                                    onChange={handleChange}
                                    maxLength={200}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Residential Address <span className="text-red-500">*</span></label>
                                <textarea
                                    required
                                    name="address"
                                    rows="3"
                                    value={formData.address}
                                    onChange={handleChange}
                                    maxLength={500}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Submit Bar */}
                    <div className="p-8 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                            <Shield size={14} />
                            Your information is protected and will not be shared.
                        </p>
                        <button
                            type="submit"
                            disabled={submitting}
                            className="bg-primary text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-gray-900 hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {submitting ? (
                                <>
                                    <Loader2 size={20} className="animate-spin" />
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    Submit Application
                                    <Send size={20} />
                                </>
                            )}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Apply;

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Send, User, Users, MapPin, School, BookOpen } from 'lucide-react';
import FadeIn from '../components/UI/FadeIn';

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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setTimeout(() => {
            setSubmitted(true);
            window.scrollTo(0, 0);
        }, 1000);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <Helmet><title>Application Submitted | EduNet School</title></Helmet>
                <div className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-lg w-full">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                        <Send size={48} />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Application Received!</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Thank you for applying to EduNet School. We have received your details. Our admissions team will review your application and contact you shortly regarding the next steps.
                    </p>
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
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-10 relative z-20">
                <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">

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
                                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                <input required type="text" name="studentName" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Enter student's full name" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Date of Birth</label>
                                <input required type="date" name="dob" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Gender</label>
                                <select required name="gender" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white">
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Applying For Grade</label>
                                <select required name="grade" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white">
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
                                <label className="block text-sm font-bold text-gray-700 mb-2">Father's Name</label>
                                <input required type="text" name="fatherName" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Mother's Name</label>
                                <input required type="text" name="motherName" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                <input required type="email" name="email" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                                <input required type="tel" name="phone" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
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
                                <input type="text" name="previousSchool" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Residential Address</label>
                                <textarea required name="address" rows="3" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Submit Bar */}
                    <div className="p-8 bg-gray-50 border-t border-gray-100 flex justify-end">
                        <button type="submit" className="bg-primary text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:bg-gray-900 hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-3">
                            Submit Application
                            <Send size={20} />
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Apply;

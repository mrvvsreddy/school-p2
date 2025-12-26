import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Helmet>
                <title>Contact Us | EduNet School</title>
                <meta name="description" content="Get in touch with EduNet School. Find our address, phone number, and location map here." />
                <script type="application/ld+json">
                    {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "mainEntity": {
                "@type": "LocalBusiness",
                "name": "EduNet School",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "123 School Lane",
                  "addressLocality": "Boston",
                  "addressRegion": "MA",
                  "postalCode": "02108",
                  "addressCountry": "US"
                },
                "telephone": "+15551234567"
              }
            }
          `}
                </script>
            </Helmet>

            {/* Hero Banner */}
            <div className="bg-gray-900 text-white py-16">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">We'd love to hear from you. Reach out to us for any queries.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-sm shadow-sm">
                        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded-sm focus:outline-none focus:border-primary" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded-sm focus:outline-none focus:border-primary" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input type="email" className="w-full border border-gray-300 px-4 py-2 rounded-sm focus:outline-none focus:border-primary" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <select className="w-full border border-gray-300 px-4 py-2 rounded-sm focus:outline-none focus:border-primary">
                                    <option>Admissions Inquiry</option>
                                    <option>General Inquiry</option>
                                    <option>Feedback</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea className="w-full border border-gray-300 px-4 py-2 rounded-sm focus:outline-none focus:border-primary h-32" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="submit" className="bg-primary text-white px-8 py-3 rounded-sm font-bold uppercase tracking-wider hover:bg-primary-light transition-colors w-full md:w-auto">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Info & Map */}
                    <div className="flex flex-col gap-8">
                        {/* Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-sm shadow-sm flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                    <Phone size={24} />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                                <p className="text-sm text-gray-600">+1 (555) 987-6543</p>
                            </div>
                            <div className="bg-white p-6 rounded-sm shadow-sm flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                    <Mail size={24} />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                                <p className="text-sm text-gray-600">admissions@edunet.edu</p>
                                <p className="text-sm text-gray-600">info@edunet.edu</p>
                            </div>
                            <div className="bg-white p-6 rounded-sm shadow-sm flex flex-col items-center text-center md:col-span-2">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                    <MapPin size={24} />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Location</h3>
                                <p className="text-sm text-gray-600">123 School Lane, Boston, MA 02108, United States</p>
                            </div>
                        </div>

                        {/* Map Embed - Using placeholder iframe for security/demo */}
                        <div className="bg-white p-2 rounded-sm shadow-sm flex-grow">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94380.70293116676!2d-71.0588801!3d42.3600825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370a5cb308779%3A0x40139b5b6329e46a!2sBoston%2C%20MA!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '300px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="School Location"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;

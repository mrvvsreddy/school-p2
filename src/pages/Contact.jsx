import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactHero from '../components/Contact/ContactHero';
import ContactForm from '../components/Contact/ContactForm';
import InfoGrid from '../components/Contact/InfoGrid';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <Helmet>
                <title>Contact Us | EduNet School</title>
                <meta name="description" content="Reach out to us. We are here to help with admissions, academics, and general queries." />
            </Helmet>

            <ContactHero />

            <div className="container mx-auto px-4 md:px-6 -mt-20 relative z-20 mb-24">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Left: Form */}
                    <div className="w-full lg:w-3/5">
                        <ContactForm />
                    </div>

                    {/* Right: Info */}
                    <div className="w-full lg:w-2/5">
                        <InfoGrid />
                    </div>
                </div>
            </div>

            {/* Full Width Map */}
            <div className="h-[400px] w-full relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94380.70293116676!2d-71.0588801!3d42.3600825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370a5cb308779%3A0x40139b5b6329e46a!2sBoston%2C%20MA!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="School Location"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
            </div>
        </div>
    );
}

export default Contact;

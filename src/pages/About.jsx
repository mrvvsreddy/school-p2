import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutHero from '../components/About/AboutHero';
import MissionVision from '../components/About/MissionVision';
import Timeline from '../components/About/Timeline';
import Leadership from '../components/About/Leadership';
import CampusGallery from '../components/About/CampusGallery';

const About = () => {
    return (
        <div className="bg-white min-h-screen font-sans">
            <Helmet>
                <title>About Us | EduNet School</title>
                <meta name="description" content="Discover EduNet School's legacy of excellence, our visionary leadership, and our commitment to shaping global citizens since 1985." />
            </Helmet>

            <AboutHero />
            <MissionVision />
            <Timeline />
            <Leadership />
            <CampusGallery />
        </div>
    );
};

export default About;

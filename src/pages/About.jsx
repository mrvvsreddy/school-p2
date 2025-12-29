import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AboutHero from '../components/About/AboutHero';
import MissionVision from '../components/About/MissionVision';
import Timeline from '../components/About/Timeline';
import Leadership from '../components/About/Leadership';
import CampusGallery from '../components/About/CampusGallery';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const About = () => {
    const [pageData, setPageData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPageContent();
    }, []);

    const fetchPageContent = async () => {
        try {
            const response = await fetch(`${API_URL}/api/v1/site-content/pages/about`);
            if (response.ok) {
                const sections = await response.json();
                // Transform array to object keyed by section_key
                const dataMap = {};
                sections.forEach(section => {
                    dataMap[section.section_key] = section.content;
                });
                setPageData(dataMap);
            }
        } catch (error) {
            console.error('Failed to fetch About page content:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white min-h-screen font-sans">
            <Helmet>
                <title>About Us | EduNet School</title>
                <meta name="description" content="Discover EduNet School's legacy of excellence, our visionary leadership, and our commitment to shaping global citizens since 1985." />
            </Helmet>

            <AboutHero data={pageData.hero} />
            <MissionVision data={pageData.mission_vision} />
            <Timeline data={pageData.timeline} />
            <Leadership data={pageData.leadership} />
            <CampusGallery data={pageData.campus_gallery} />
        </div>
    );
};

export default About;

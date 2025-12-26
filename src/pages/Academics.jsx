import React from 'react';
import { Helmet } from 'react-helmet-async';
import AcademicsHero from '../components/Academics/AcademicsHero';
import CurriculumSection from '../components/Academics/CurriculumSection';
import Departments from '../components/Academics/Departments';
import Methodology from '../components/Academics/Methodology';

const Academics = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Academics | EduNet School</title>
                <meta name="description" content="Explore our academic programs: Arts, Science, Business, and Engineering. Experiential learning aimed at global excellence." />
            </Helmet>

            <AcademicsHero />
            <CurriculumSection />
            <Methodology />
            <Departments />

        </div>
    );
}

export default Academics;

import React from 'react';
import { Helmet } from 'react-helmet-async';
import AdmissionsHero from '../components/Admissions/AdmissionsHero';
import ProcessSteps from '../components/Admissions/ProcessSteps';
import RequirementsList from '../components/Admissions/RequirementsList';
import DownloadSection from '../components/Admissions/DownloadSection';
import FAQSection from '../components/Admissions/FAQSection';
import ApplyCTA from '../components/Admissions/ApplyCTA';

const Admissions = () => {
    return (
        <div className="bg-white min-h-screen font-sans">
            <Helmet>
                <title>Admissions | EduNet School</title>
                <meta name="description" content="Detailed guide to EduNet School's admission process, requirements, fees, and application forms for the academic year 2024-25." />
            </Helmet>

            <AdmissionsHero />
            <ProcessSteps />
            <RequirementsList />
            <DownloadSection />
            <FAQSection />
            <ApplyCTA />
        </div>
    );
};

export default Admissions;

import React from 'react';
import { Helmet } from 'react-helmet-async';
import FacilitiesHero from '../components/Facilities/FacilitiesHero';
import FacilityGrid from '../components/Facilities/FacilityGrid';
import DigitalCampus from '../components/Facilities/DigitalCampus';
import EcoInitiatives from '../components/Facilities/EcoInitiatives';
import SafetySecurity from '../components/Facilities/SafetySecurity';

const Facilities = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
                <title>Facilities | EduNet School</title>
                <meta name="description" content="Explore our world-class facilities: Modern labs, vast library, sports complex, and a fully digital campus." />
            </Helmet>

            <FacilitiesHero />
            <FacilityGrid />
            <EcoInitiatives />
            <DigitalCampus />
            <SafetySecurity />

        </div>
    );
}

export default Facilities;

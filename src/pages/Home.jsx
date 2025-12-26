import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Home/Hero';
import FounderMessage from '../components/Home/FounderMessage';
import Features from '../components/Home/Features';
import Academies from '../components/Home/Academies';
import News from '../components/Home/News';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | EduNet - Best School in Boston</title>
        <meta name="description" content="EduNet is the most reputed educational institution in Boston, offering diverse academic solutions and inspiring student life." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "EduNet School",
              "url": "https://edunet-school.example.com",
              "logo": "https://edunet-school.example.com/logo.png",
              "founder": {
                "@type": "Person",
                "name": "Linda A. Jonathon"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 School Lane",
                "addressLocality": "Boston",
                "addressRegion": "MA",
                "postalCode": "02108",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://www.facebook.com/edunet",
                "https://www.twitter.com/edunet",
                "https://www.linkedin.com/company/edunet"
              ]
            }
          `}
        </script>
      </Helmet>


      <Hero />
      <FounderMessage />
      <Features />
      <Academies />
      <News />
      {/* Placeholder for Campus/Map section if needed, though covered partially in Footer/Contact */}

    </>
  );
};

export default Home;

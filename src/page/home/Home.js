import React from 'react';
import AboutSection from "./AboutSection";
import ContactForm from "./ContactForm";
import LandingSection from "./LandingSection";
import PopularProjects from './PopularProjects';
const Home = () => {
    return (
        <div>
       <LandingSection></LandingSection>
     <AboutSection></AboutSection>
     <PopularProjects></PopularProjects>
     <ContactForm></ContactForm>
        </div>
    );
};

export default Home;
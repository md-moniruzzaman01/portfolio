import React from 'react';
import AboutSection from "./AboutSection";
import ContactForm from "./ContactForm";
import LandingSection from "./LandingSection";
import PopularProjects from './PopularProjects';
import { ToastContainer} from 'react-toastify';
const Home = () => {
    return (
        <div>
       <LandingSection></LandingSection>
     <AboutSection></AboutSection>
     <PopularProjects></PopularProjects>
     <ContactForm></ContactForm>
     <ToastContainer />
        </div>
    );
};

export default Home;
import React from 'react';
import AboutSection from "./AboutSection";
import ContactForm from "./ContactForm";
import LandingSection from "./LandingSection";
import PopularProjects from './PopularProjects';
import { ToastContainer} from 'react-toastify';
import Skills from './Skills';
const Home = () => {
    return (
        <div className="scroll-smooth snap-y snap-mandatory">
       <LandingSection></LandingSection>
     <AboutSection></AboutSection>
     <div>
    <h2 className='text-3xl font-bold py-11 text-center text-custom-primary'>My Skillsets</h2>
    </div>
     <Skills></Skills>
     <PopularProjects></PopularProjects>
     <ContactForm></ContactForm>
     <ToastContainer />
        </div>
    );
};

export default Home;
import AboutSection from "./page/home/AboutSection";
import ContactForm from "./page/home/ContactForm";
import LandingSection from "./page/home/LandingSection";
import Navbar from "./page/shared/Navbar";
import PopularProjects from './page/home/PopularProjects';
function App() {
  return (
    <div>
     <Navbar></Navbar>
     <LandingSection></LandingSection>
     <AboutSection></AboutSection>
     <PopularProjects></PopularProjects>
     <ContactForm></ContactForm>
    </div>
  );
}

export default App;

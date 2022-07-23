import Aos from 'aos';
import React, { useEffect } from 'react';
import avaterimg from '../../images/jl-removebg-preview.png'
import { HiArrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';
const AboutSection = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])
    return (
        <div className='bg-custom-bg'>
            <div className="hero  container  mx-auto mt-28 pb-20 min-h-screen">
                <div className="flex flex-col md:flex-row justify-center items-center mx-auto">
                    <div className='w-11/12 md:w-2/5 '><img src={avaterimg} data-aos="fade-down" className="w-11/12  mx-auto" alt='animated coding avater' /></div>
                    <div className='w-11/12 md:w-2/4 mx-auto'>
                        <h1 className="text-2xl mt-2 md:text-3xl font-bold text-custom-secondary">A Full stack developer</h1>
                       
                       <p className="py-6 text-xl">Hello, I'm md moniruzzaman, a passionate FrontEnd developer from Bangladesh.
                            I enjoy creating pixel perfect and scalable website with great user experiences.
                            I'm more front end focused with Reactjs as well as pure HTML, CSS also intermediate in back end technologies like NodeJs, MongoDB.
                        <Link to='about' ><HiArrowRight className='inline ml-2'/></Link>
                        </p>
                       

                        <a href="#contactform"> <button className="btn border-0 custom-btn px-7">hire me</button></a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AboutSection;
import Aos from 'aos';
import React, { useEffect } from 'react';
import avaterimg from '../../images/jl-removebg-preview.png'
const AboutSection = () => {
    useEffect(()=>{
        Aos.init({
            duration:2000
        })
    },[])
    return (
        <div className="hero bg-transparent container  mx-auto  mt-11 pb-20">
           <div className="flex w-11/12 lg:w-[95rem]  p-4 gap-4 flex-col items-center lg:flex-row  mx-auto">
                <div><img src={avaterimg} data-aos="fade-down" className="w-11/12 mx-auto mt-44 md:w-full" /></div>
                <div className='max-w-2xl mx-11'>
                    <h1 className="text-3xl md:text-5xl font-bold">A 
                    Full Stack Website Developer</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                   
                    <a href="#contactform"> <button className="btn border-0 bg-custom-primary px-7">hire me</button></a>
                </div>
            </div>
           </div>
       
    );
};

export default AboutSection;
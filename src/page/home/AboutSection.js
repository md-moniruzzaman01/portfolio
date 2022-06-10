import React from 'react';
import avaterimg from '../../images/jl-removebg-preview.png'
const AboutSection = () => {
    return (
        <div class="hero min-h-[90vh] bg-transparent max-w-7xl mx-auto flex items-center mt-11">
            <div class="flex w-[80rem] p-4 gap-4 flex-col items-center lg:flex-row">
                <div><img src={avaterimg} class="w-11/12 mx-auto mt-44 md:w-full" /></div>
                <div className='max-w-2xl mx-11'>
                    <h1 class="text-3xl md:text-5xl font-bold">A 
                    Full Stack Website Developer</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn border-0 bg-custom-primary px-7">hire me</button>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
import React from 'react';
import './Footer.css'
import facebook from '../../images/social_icons_set_new_new-ai.png'
import linkedin from '../../images/social_icons_set_new_new-ai (1).png'
import instragram from '../../images/social_icons_set_new_new-ai (2).png'
const Footer = () => {
    const date = new Date
    const years = date.getFullYear();
   
    return (
        <div className='h-72 bg-slate-100 rounded-t-full'>
            <h1 className='text-4xl font-bold text-center pt-11 text-custom-secondary'>social</h1>
            <div className='flex justify-center mt-5'>
                <img src={facebook}  className="h-11 mx-5"  alt="" />
                <img src={linkedin}  className="h-11 mx-5" alt="" />
                <img src={instragram} className="h-11 mx-5"  alt="" />
            </div>
            <div>
                <p className='text-center mt-20'>all copyright reserved | {years} <span className='block'>Mmr Creation ltd. </span></p>
            </div>
        </div>
    );
};

export default Footer;
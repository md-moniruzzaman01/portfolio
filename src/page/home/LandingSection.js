import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import doctorPng from '../../images/moniruzzaman_image-removebg-preview (3).png'


const LandingSection = () => {

    return (

        <div className='min-h-[90vh] relative mx-5 snap-center'>


            <div className=" flex flex-col lg:flex-row  justify-between items-center  lg:w-full container mx-auto relative"  >
                <div className=' flex w-11/12 items-center  mx-auto   order-2 lg:order-1 '>
                    <div className='max-w-3xl ml-7'>
                        <small className='text-xl ml-1'>Hello i'm</small>
                        <h1 className="text-3xl md:text-6xl font-bold text-gray-800">MD. Moniruzzaman</h1>
                        <p className="py-3 text-base lg:text-3xl uppercase  ml-1">A creative MERN stack web developer</p>
                        <a href="https://drive.google.com/uc?id=1bS9FQDh-VbkxoO0DyC8j7bdSVtpKEsAG&export=download"><button className="btn border-0 custom-btn">Download resume</button></a>

                    </div>
                </div>
                <div className='mx-auto w-9/12 order-1 lg:order-2' >

                    <img className='w-10/12 mx-auto' src={doctorPng} alt="" />
                </div>

            </div>



        </div>


    );
};

export default LandingSection;
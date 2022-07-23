import React from 'react';
import mongodb from '../../images/mongodb-icon-1.svg'
import express from '../../images/express-109.svg'
import react from '../../images/react-2.svg'
import node from '../../images/nodejs.svg'
import html from '../../images/html-1.svg'
import css from '../../images/css.svg'
import js from '../../images/logo-javascript.svg'
import bootstrap from '../../images/bootstrap.png'
import tailwind from '../../images/tailwind-css-1-2.svg'
import nextjs from '../../images/nextjs-2.svg'
import firebase from '../../images/firebase-1.svg'



const Skills = () => {
    return (
        <div className='min-h-[70vh] container flex justify-center items-center relative' >
            

            <div className='flex max-w-3xl justify-between w-8/12 text-custom-secondary'>
                {/* stong skill */}
               <div className=" bg-slate-500 w-28 h-28 rounded-full flex justify-center items-center ">
                <img src={mongodb} className='logo-img text-custom-secondary w-20' alt="html logo" />
               </div>
               <div className=" bg-slate-500 w-28 h-28 rounded-full flex justify-center items-center ">
                <img src={express} className='logo-img text-custom-secondary w-20' alt="html logo" />
               </div>
               <div className=" bg-slate-500 w-28 h-28 rounded-full flex justify-center items-center ">
                <img src={react} className='logo-img  w-20' alt="html logo" />
               </div>
               <div className=" bg-slate-500 w-28 h-28 rounded-full flex justify-center items-center ">
                <img src={node} className='logo-img text-custom-secondary w-20 pt-2' alt="html logo" />
               </div>
               {/* others */}
               <div className="  absolute top-24 left-38 flex justify-center items-center ">
                <p className='opacity-70 text-4xl'>HTML5</p>
               </div>
               <div className="  absolute top-28 right-40 flex justify-center items-center ">
               <p className='opacity-70 text-5xl'>CSS</p>
               </div>
               <div className="  absolute top-56 left-16 flex justify-center items-center ">
               <p className='opacity-70 text-4xl'>JavaScript</p>
               </div>
               <div className="  absolute top-10 inset-x-1/4 flex justify-center items-center ">
               <p className='opacity-70 text-3xl'>Bootstrap</p>
               </div>
               <div className="  absolute bottom-20 left-96 flex justify-center items-center ">
               <p className='opacity-70 text-4xl'>Tailwind CSS</p>
               </div>
               <div className="  absolute bottom-72 right-32 flex justify-center items-center ">
               <p className='opacity-70 text-4xl'>NextJs</p>
               </div>
               <div className="  absolute bottom-20 right-72 flex justify-center items-center ">
               <p className='opacity-70 text-3xl'>Firebase</p>
               </div>
            </div>
        </div>
    );
};

export default Skills;
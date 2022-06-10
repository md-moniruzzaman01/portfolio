import React from 'react';
import './Home.css'
const Projectcard = ({pj}) => {
const {img,projectName}=pj;
console.log(img);
    return (
        <div className='projectslide relative'>
            <img src={img} alt="" className='h-full hover:hidden'/>
            <div className='h-full absolute bg-hover details  left-0 w-full flex justify-center items-center'>
               <div>
               <h1 className='text-custom-secondary font-bold text-2xl text-center my-5'>{projectName}</h1>
                <button className='btn bg-custom-primary border-0 mr-5'>Details</button>
                <button className='btn bg-custom-primary border-0'>Live website</button>
               </div>
            </div>
        </div>
    );
};

export default Projectcard;
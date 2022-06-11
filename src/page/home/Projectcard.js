import Aos from 'aos';
import React, { useEffect } from 'react';
import './Home.css'
const Projectcard = ({pj,gotodetails}) => {
const {_id,picture,ProjectName,live}=pj;
useEffect(()=>{
    Aos.init({
        duration:2000
    })
},[])
    return (
        <div className='projectslide relative' data-aos="zoom-in-up">
            <img src={picture} alt="" className='h-full'/>
            <div className='h-full absolute bg-hover details top-0 left-0 w-full flex justify-center items-center'>
               <div>
               <h1 className='text-custom-secondary font-bold text-2xl text-center my-5'>{ProjectName}</h1>
                <button className='btn bg-custom-primary border-0 mr-5' onClick={()=>gotodetails(_id)}>Details</button>
                <a href={live}><button className='btn bg-custom-primary border-0'>Live website</button></a>
                
               </div>
            </div>
        </div>
    );
};

export default Projectcard;
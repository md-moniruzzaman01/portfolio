import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import doctorPng from '../../images/moniruzzaman_image-removebg-preview (3).png'


const LandingSection = () => {
    const [myimg ,setMyimg]=useState(false)

   
    window.onscroll = () =>{

        
      
        if(window.scrollY > 150){
            setMyimg(true);
        }else{
            setMyimg(false);
        }
      
      }
      
    //   window.onload = () =>{
      
    //     if(window.scrollY > 80){
    //       document.querySelector('.header .header-2').classList.add('active');
    //     }else{
    //       document.querySelector('.header .header-2').classList.remove('active');
    //     }
      
    //     fadeOut();
    // }

    return (
        
        <div  className='min-h-[90vh] relative'>

          
            <div  className=" flex flex-col lg:flex-row  justify-between items-center  lg:w-full container mx-auto relative"  >
                <div  className=' flex justify-center w-11/12  mx-auto mt-5 md:mt-64 order-2 lg:order-1'>
                    <div  className='max-w-3xl'>
                        <small className='text-2xl font-semibold'>Hello i'm</small>
                    <h1 className="text-3xl md:text-6xl font-bold text-custom-secondary">MD. Moniruzzaman Ripon</h1>
                    <p className="py-6 text-base lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum iure facilis, dicta eligendi aliquid deleniti, in sed sequi voluptas esse dolore doloribus? Aspernatur, fuga velit aperiam similique temporibus asperiores saepe?</p>
                    <button className="btn border-0 bg-custom-primary">Download resume</button>
                    </div>
                </div>
              <div  className='ml-auto w-full  order-1 lg:order-2' >
              
                <img  className={`w-9/12 mx-auto md:ml-auto md:absolute top-[-30px] md:right-0 md:w-6/12 ${myimg ? 'opacity-70': ''}`} src={doctorPng} alt="" />
               </div>

            </div>
            

                
        </div>


    );
};

export default LandingSection;
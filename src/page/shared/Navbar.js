import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoimg from '../../images/image.png'
const Navbar = () => {
  const navItem = <>
        <li className='mr-1'><Link to="/">Home</Link></li>
        <li className='mr-1'><Link to="/about">About Me</Link></li>
      
        <li className='mr-1'><Link to="/blog">Blog</Link></li>
        <li className='mr-1'><Link to="/contact">Contact us</Link></li>
    </>



const [active ,setactive]=useState(false)

   


   
    window.onscroll = () =>{

        
      
        if(window.scrollY > 200){
          setactive(true);
        }else{
          setactive(false);
        }
      
      }
  


    return (
     <div className={`w-full z-40 bg-white ${active? 'fixed shadow-md': 'static'}`}>
         <div className={`navbar container mx-auto ${active? 'bg-white': 'bg-transparent'}`}>
        <div className="navbar-start">
         
          <a className="normal-case text-2xl flex items-center text-custom-secondary font-semibold" href='/'><img src={logoimg} alt="" className='h-6 pr-2' /> <span>Moniruzzaman</span></a>
        </div>
      
        <div className="navbar-end">
        <div className="dropdown lg:hidden">
            <label tabIndex="0" className="btn btn-ghost ">MENU 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content left-[-130px] mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
              {navItem}
            </ul>
          </div>
          <div className=" hidden lg:flex   w-full justify-end ">
                <ul className="menu menu-horizontal p-0 text-base  text-custom-secondary uppercase font-primaryCaption">
                    {navItem}
                </ul>
                

            </div>
        </div>
      </div>
     </div>
    );
};

export default Navbar;
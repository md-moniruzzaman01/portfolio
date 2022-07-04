import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItem = <>
        <li className='mr-1'><Link to="/">Home</Link></li>
        <li className='mr-1'><Link to="/about">About Me</Link></li>
      
        <li className='mr-1'><Link to="/blog">Blog</Link></li>
        <li className='mr-1'><a href="/#contactform">Contact us</a></li>
    </>
    return (
        <div className='navbar     bg-transparent container mx-auto'>
        <div className="navbar-start">
         
          <a className=" normal-case text-2xl">Md. Moniruzzaman</a>
        </div>
      
        <div className="navbar-end">
        <div className="dropdown lg:hidden">
            <label tabIndex="0" className="btn btn-ghost ">MENU 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content left-[-130px] mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navItem}
            </ul>
          </div>
          <div className=" hidden lg:flex   w-full justify-end ">
                <ul className="menu menu-horizontal p-0 text-xl  text-custom-secondary uppercase font-primaryCaption">
                    {navItem}
                </ul>
                

            </div>
        </div>
      </div>
    );
};

export default Navbar;
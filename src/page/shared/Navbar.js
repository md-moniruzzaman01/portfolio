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
        <div class='navbar     bg-transparent container mx-auto'>
        <div class="navbar-start">
         
          <a class=" normal-case text-2xl">Md. Moniruzzaman</a>
        </div>
      
        <div class="navbar-end">
        <div class="dropdown lg:hidden">
            <label tabindex="0" class="btn btn-ghost ">MENU 
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content left-[-130px] mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
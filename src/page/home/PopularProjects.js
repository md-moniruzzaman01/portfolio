import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../images/gelaxy1.PNG'
import img2 from '../../images/galaxy.png'
import img3 from '../../images/mediplas.PNG'
import img4 from '../../images/dragonlight.PNG'
import img5 from '../../images/mk-tach.PNG'
import './Home.css'
import Projectcard from './Projectcard';
const PopularProjects = () => {
    const projects = [
        {
            _id:1,
            projectName:'Gelaxy store',
            img:img1
        },
        {
            _id:2,
            projectName:'Bengliyan',
            img:img2
        },
        {
            _id:3,
            projectName:'medica +',
            img:img3
        },
        {
            _id:4,
            projectName:'dragon light',
            img:img4
        },
        {
            _id:5,
            projectName:'mk tech',
            img:img5
        },
    ]
    return (
        <div className='min-h-sreen container mx-auto'>
             <div className='mx-auto max-w-7xl'>
        <h2 className='text-3xl font-semibold mb-11'>Some of my projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    projects.map(pj=> <Projectcard pj={pj}></Projectcard>)
                }
            </div>
      <div className='flex justify-end mt-11'> 
        <button className='btn bg-custom-primary border-0'>View All</button>
      </div>
    </div>
        </div>
    );
};

export default PopularProjects;

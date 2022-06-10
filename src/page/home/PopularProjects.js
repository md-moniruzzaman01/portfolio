import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../images/galaxy.png'
import img2 from '../../images/mediplas.PNG'
import img3 from '../../images/dragonlight.PNG'
import img4 from '../../images/redcarpet.PNG'
import './Home.css'
import Projectcard from './Projectcard';
const PopularProjects = () => {
    const projects = [
        {
            _id:1,
            projectName:'Bengliyan',
            img:img1
        },
        {
            _id:2,
            projectName:'Bengliyan',
            img:img2
        },
        {
            _id:3,
            projectName:'Bengliyan',
            img:img3
        },
        {
            _id:4,
            projectName:'Bengliyan',
            img:img4
        },
    ]
    return (
        <div className='min-h-sreen container mx-auto'>
             <div className='mx-auto max-w-7xl'>
        <h2 className='text-3xl font-semibold mb-11'>Some of my resent projects</h2>
    <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
            projects.map(pj=> 
            <SwiperSlide>
                <Projectcard pj={pj}></Projectcard>
            </SwiperSlide>
               )
        
        }
        
        
      </Swiper>
      <div className='flex justify-end mt-11'> 
        <button className='btn bg-custom-primary border-0'>View All</button>
      </div>
    </div>
        </div>
    );
};

export default PopularProjects;

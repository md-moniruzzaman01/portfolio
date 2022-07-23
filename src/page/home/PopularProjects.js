import React from 'react';
import "swiper/css";
import "swiper/css/pagination";



import './Home.css'
import Projectcard from './Projectcard';
import { useNavigate } from 'react-router-dom';
import useData from '../../hooks/useData';
import { HiArrowRight } from "react-icons/hi";
const PopularProjects = () => {
    const [datas, setDatas] = useData()
    const navigate = useNavigate()
    const gotodetails = (id) => {
        navigate(`/project/${id}`)
    }
    console.log(datas);

    return (
      <div className="bg-custom-bg">
          <div className='min-h-sreen container mx-auto py-5'>
            <h2 className='text-3xl font-semibold py-11 text-center uppercase underline underline-offset-2'>Some of my projects</h2>
            <div className='mx-auto max-w-7xl'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {
                        datas.map(pj => <Projectcard pj={pj} key={pj._id} gotodetails={gotodetails}></Projectcard>)
                    }
                </div>
                <div className='flex justify-end mt-11'>
                </div>
            </div>
                    <div className='flex justify-end'><button className='px-7 py-2 text-2xl btn btn-ghost text-custom-secondary'><HiArrowRight/></button></div>
        </div>
      </div>
    );
};

export default PopularProjects;

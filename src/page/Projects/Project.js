import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useData from '../../hooks/useData';
const Project = () => {
    const {id}=useParams()
    const [datas,setDatas]=useData()

const project = datas.find(pjt=> pjt._id == id);

    return (
     <div>
        <h1 className='text-2xl text-center font-bold'>Project {project?.ProjectName}</h1>
          <div className='block md:flex max-w-9xl gap-2 mx-auto'>
        <div className=" flex justify-center  w-11/12 mx-auto">
            <img src={project?.img[1]} className='max-h-[30rem]  p-5 m-5 bg-gray-200  w-full rounded-lg shadow-lg' alt="" />
        </div>
        <div className=" flex justify-center  w-5/12 mx-auto">
            <img src={project?.img[0]} className='max-h-[30rem]  p-5 m-5 bg-gray-200 rounded-lg shadow-lg w-full' alt="" />
        </div>
        <div className=" flex justify-center  w-11/12 mx-auto">
            <img src={project?.img[2]} className='max-h-[30rem]  p-5 m-5 bg-gray-200 rounded-lg shadow-lg w-full ' alt="" />
        </div>
       </div>
       <div className="flex justify-end"><a href={project?.live}><button className='btn bg-custom-primary border-0'>Live website</button></a></div>
     </div>
            
    );
};

export default Project;
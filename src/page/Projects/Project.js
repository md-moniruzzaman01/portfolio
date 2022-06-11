import React from 'react';
import { useParams } from 'react-router-dom';
import img1 from '../../images/gelaxy1.PNG'
import img2 from '../../images/galaxy.png'
import img3 from '../../images/mediplas.PNG'
import img4 from '../../images/dragonlight.PNG'
import img5 from '../../images/mk-tach.PNG'
const Project = () => {
    const {id}=useParams()
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

const project = projects.find(pjt=> pjt._id == id);
console.log(project);
    return (
        <div>
            fds{id}
            <img src={project?.img} alt="" />
        </div>
    );
};

export default Project;
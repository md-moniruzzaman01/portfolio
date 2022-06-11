import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
        fetch('/blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])


    return (
        <div className='min-h-screen'>
            {
              blogs.length >0 ? <h1>heello</h1> : <p className='text-4xl font-bold mt-72 text-center'>coming soon....</p>  
            }
        </div>
    );
};

export default Blogs;
import  { useEffect, useState } from 'react';

const useData = () => {
    const [datas,setDatas]= useState([]);
    useEffect(()=>{
        fetch('/projectdata.json')
        .then(res=> res.json())
        .then(data => {
            setDatas(data);
            
        })
    },[])
    return [datas,setDatas]
};

export default useData;
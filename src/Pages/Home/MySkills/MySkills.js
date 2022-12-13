import React, { useEffect, useState } from 'react';
import MySkill from './MySkill';


const MySkills = () => {

    const [skills,setSkill]=useState([])
    console.log(skills)
    useEffect(()=>{
        fetch('skill.json')
        .then(res=>res.json())
        .then(data=>setSkill(data))
    },[])
    return (
       <div className='w-9/12 mx-auto mt-10' data-aos="fade-down"
       data-aos-easing="linear"
       data-aos-duration="1500">
        <h1 className='text-white text-2xl ml-5'>My Skills</h1>
            <hr className='' />
           
            <div className='grid lg:grid-cols-2 gap-5 h-3/12 mt-24' data-aos="fade-down"
       data-aos-easing="linear"
       data-aos-duration="1500">
                {
                    skills.map(skill=><MySkill
                    key={skill._id}
                    skill={skill}
                    ></MySkill>)
                }
            </div>
       </div>
    )
};

export default MySkills;
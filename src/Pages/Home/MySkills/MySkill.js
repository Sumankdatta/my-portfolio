import React from 'react';

const MySkill = ({skill}) => {
    console.log(skill)
    return (
       <div>
        <div className='flex content-center items-center border bg-white h-4/12'>
            <img className='w-24 h-24 mr-10' src={skill.img} alt="" />
            <p className='font-bold'>{skill.title}</p>
        </div>
       </div>
    );
};

export default MySkill;
import React from 'react';
import about from '../../../assets/image/aboutme.png'
const AboutMe = () => {

    return (
        <div className='w-9/12 mx-auto mt-32'>
            <h1 className='text-white text-2xl ml-5'>About Me</h1>
            <hr className='' />
            <div>
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row-reverse " data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <img className='w-6/12' src={about} alt="" />
                        <div>

                            <p className="py-6 text-white ">Hey! I'm Suman Kumar Datta and I love to explore myself. I explore lots of fields. At some moments, my interest grows in the development sector. Last one years I hold this sector and try to explore the fields. <br /><br />

                                There were so many changes that happened to me. I completed two courses fully and one course is running. My passions always help me to survive. As you know, how depressed the sector is! When you are stuck, the code is not working and other issues. But, I never quite. I always hold and try to figure out where is the problem and at the end I will always get success.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
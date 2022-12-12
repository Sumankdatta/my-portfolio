import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import MyPortfolio from '../MyPortfolio/MyPortfolio';
import MySkills from '../MySkills/MySkills';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MySkills></MySkills>
            <MyPortfolio></MyPortfolio>
        </div>
    );
};

export default Home;
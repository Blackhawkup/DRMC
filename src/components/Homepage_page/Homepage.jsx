import React from 'react';
import Header from '../header'; 
import PictureSlider from './pictureSlider';
import HomePageGuide from './otherPageInfo'; 
import Footer from '../footer'; 
import MovingLogoStrip from '../movingRoller/MovingLogoStrip';

const HomePage = () => {
    return (
        <div className="homepage">
            <Header />
            <PictureSlider />
            <HomePageGuide />
            <MovingLogoStrip />
            <Footer />
        </div>
    );
};

export default HomePage;
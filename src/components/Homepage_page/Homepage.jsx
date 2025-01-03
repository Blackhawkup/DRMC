import React from 'react';
import Header from '../header'; 
import PictureSlider from './pictureSlider';
import HomePageGuide from './otherPageInfo'; 
import Footer from '../footer'; 
import MovingLogoStrip from '../movingRoller/MovingLogoStrip';

const HomePage = () => {
    return (
        <div>
            {/* Header */}
            <Header />

            <PictureSlider />

            {/* HomePage Guide Cards */}
            <HomePageGuide />

            <MovingLogoStrip />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default HomePage;
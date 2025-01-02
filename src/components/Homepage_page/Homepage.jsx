import React from 'react';
import Header from '../header'; // Import the Header component
import PictureSlider from './pictureSlider';
import HomePageGuide from './otherPageInfo'; // Import the HomePageGuide component
import Footer from '../footer'; // Import the Footer component
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
import React from 'react';
import './MovingLogoStrip.css'; // Import the CSS file

const MovingLogoStrip = () => {
    const logos = [
        './logo1.png',
        './logo2.png',
        './logo3.png',
        './logo4.png',
        './logo5.png',
        './logo6.png',
        '/logo7.png',
        '/logo8.png',
    ];

    return (
        <div className="logo-strip-container">
            <div className="logo-strip">
                {/* First set of logos */}
                {logos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo}
                        alt={`Company Logo ${index + 1}`}
                        className="logo"
                    />
                ))}
                {/* Duplicate logos for seamless scrolling */}
                {logos.map((logo, index) => (
                    <img
                        key={`dup-${index}`}
                        src={logo}
                        alt={`Company Logo ${index + 1}`}
                        className="logo"
                    />
                ))}
            </div>
        </div>
    );
};

export default MovingLogoStrip;
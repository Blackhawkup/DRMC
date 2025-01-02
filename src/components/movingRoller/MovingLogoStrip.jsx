import React, { useRef } from 'react';
import './MovingLogoStrip.css'; // Import the CSS file

const MovingLogoStrip = () => {
    const carouselRef = useRef(null);

    const companies = [
        { logo: './logo1.png', name: 'Company 1' },
        { logo: './logo2.png', name: 'Company 2' },
        { logo: './logo3.png', name: 'Company 3' },
        { logo: './logo4.png', name: 'Company 4' },
        { logo: './logo5.png', name: 'Company 5' },
        { logo: './logo6.png', name: 'Company 6' },
        { logo: './logo7.png', name: 'Company 7' },
        { logo: './logo8.png', name: 'Company 8' },
    ];

    // Scroll to the next logo
    const scrollNext = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: 200, // Adjust scroll distance
                behavior: 'smooth',
            });
        }
    };

    // Scroll to the previous logo
    const scrollPrev = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -200, // Adjust scroll distance
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="moving-logo-strip-wrapper">
            <button className="arrow-button prev" onClick={scrollPrev}>
                &lt;
            </button>
            <div className="moving-logo-strip-container" ref={carouselRef}>
                <div className="moving-logo-strip">
                    {companies.map((company, index) => (
                        <div key={index} className="company-item">
                            <img
                                src={company.logo}
                                alt={`${company.name} Logo`}
                                className="company-logo"
                            />
                            <p className="company-name">{company.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <button className="arrow-button next" onClick={scrollNext}>
                &gt;
            </button>
        </div>
    );
};

export default MovingLogoStrip;
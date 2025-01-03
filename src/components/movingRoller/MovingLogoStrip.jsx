import React, { useRef } from 'react';
import './MovingLogoStrip.css'; 

const MovingLogoStrip = () => {
    const carouselRef = useRef(null);

    const companies = [
        { logo: './logo1.png', name: 'Shapoorji Pallonji' },
        { logo: './logo2.png', name: 'Larsen & Toubro' },
        { logo: './logo3.png', name: 'NHAI' },
        { logo: './logo4.png', name: 'Paras' },
        { logo: './logo5.png', name: 'SS Group' },
        { logo: './logo6.png', name: 'CS Infra' },
    ];

    const scrollNext = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: 200, 
                behavior: 'smooth',
            });
        }
    };

    const scrollPrev = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -200, 
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
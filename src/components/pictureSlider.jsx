import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, Grid } from '@mui/material';

function PictureSlider() {
    const photos = [
        '/construction_site_1.jpg',
        '/construction_site_2.jpg',
        '/truck_3.jpg',
        '/truck_4.jpg',
        '/truck_5.jpg'
    ];

    const [currentIndex, changeIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            changeIndex((prevIndex) => (prevIndex + 1) % photos.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [photos.length]);

    useEffect(() => {
        const preloadImages = () => {
            photos.forEach((photo) => {
                const img = new Image();
                img.src = photo;
                img.onload = () => setIsLoading(false); 
            });
        };
        preloadImages();
    }, [photos]);

    return (
        <Box
            sx={{
                width: '80%',
                height: { xs: 'auto', sm: '60vh', md: '70vh' },
                margin: '20px auto ',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)', // 3D shadow effect
                borderRadius: '10px', // Rounded corners
                padding: { xs: '20px', sm: '40px', md: '60px' }, // Padding for spacing
            }}
        >
            {/* Slider Background */}
            {photos.map((photo, index) => (
                <Box
                    key={index}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: index === currentIndex ? 1 : 0,
                        visibility: index === currentIndex ? 'visible' : 'hidden',
                        transition: 'opacity 0.5s ease-in-out, visibility 0.5s ease-in-out',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
                            zIndex: 1,
                        },
                    }}
                >
                    <img
                        src={photo}
                        alt={`Slide ${index}`}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'blur(4px)', // Blur effect
                        }}
                        onLoad={() => setIsLoading(false)}
                    />
                </Box>
            ))}

            {/* Hero Content */}
            <Grid
                container
                spacing={4}
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    maxWidth: '1200px',
                    margin: '0 auto',
                    alignItems: 'center',
                }}
            >
                <Grid item xs={12} sm={7}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
                            fontWeight: 'bold',
                            marginBottom: '20px',
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Text shadow
                        }}
                    >
                        Border Hero with Cropped Image and Shadows
                    </Typography> 
                    <Typography
                        variant="h5"
                        sx={{
                            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                            marginBottom: '40px',
                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', // Text shadow
                        }}
                    >
                        Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default PictureSlider;

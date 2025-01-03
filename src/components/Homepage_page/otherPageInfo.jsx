import React from 'react';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const GuideCard = ({ title, description, linkText, linkTo, backgroundImage }) => {
    return (
        <Card
            sx={{
                width: '100%',
                maxWidth: 400,
                margin: '16px',
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.01)',
                },
                backgroundImage: backgroundImage && `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative', 
            }}
        >
            {/* Overlay to reduce blue tint */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.0001)', 
                }}
            />
            <CardContent
                sx={{
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                    position: 'relative', 
                }}
            >
                <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                        fontWeight: 'bold',
                        marginBottom: '8px',
                        color: '#1976d2', 
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        marginBottom: '16px',
                        color: '#555', 
                    }}
                >
                    {description}
                </Typography>
                <Button
                    component={Link}
                    to={linkTo}
                    sx={{
                        textTransform: 'none',
                        fontWeight: 'bold',
                        color: '#1976d2', 
                        '&:hover': {
                            backgroundColor: 'rgba(25, 118, 210, 0.1)', 
                        },
                    }}
                >
                    {linkText}
                </Button>
            </CardContent>
        </Card>
    );
};

const HomePageGuide = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                padding: '24px',
            }}
        >
            <GuideCard
                title="About Us"
                description="Learn more about our company, mission, and values."
                linkText="Learn More"
                linkTo="/about"
                backgroundImage="./about_us.jpg" 
            />
            <GuideCard
                title="Our Services"
                description="Discover the range of services we offer to meet your needs."
                linkText="Explore Services"
                linkTo="/services"
                backgroundImage="./servies.jpeg" 
            />
            <GuideCard
                title="Contact Us"
                description="Get in touch with us for inquiries, support, or feedback."
                linkText="Contact Now"
                linkTo="/contact"
                backgroundImage="/contact_us.jpg" 
            />
        </Box>
    );
};

export default HomePageGuide;
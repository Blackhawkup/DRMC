import React from 'react';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const GuideCard = ({ title, description, linkText, linkTo }) => {
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
                    boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.3)',
                },
            }}
        >
            <CardContent
                sx={{
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}
            >
                <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                        fontWeight: 'bold',
                        marginBottom: '8px',
                        color: '#1976d2', // Primary color
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        marginBottom: '16px',
                        color: '#555', // Secondary text color
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
                        color: '#1976d2', // Primary color
                        '&:hover': {
                            backgroundColor: 'rgba(25, 118, 210, 0.1)', // Light hover effect
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
            />
            <GuideCard
                title="Our Services"
                description="Discover the range of services we offer to meet your needs."
                linkText="Explore Services"
                linkTo="/services"
            />
            <GuideCard
                title="Contact Us"
                description="Get in touch with us for inquiries, support, or feedback."
                linkText="Contact Now"
                linkTo="/contact"
            />
        </Box>
    );
};

export default HomePageGuide;
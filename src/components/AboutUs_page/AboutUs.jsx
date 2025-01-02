import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from './../header';
import Footer from './../footer'; 

const AboutUs = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh', // Ensure the page takes up the full height of the viewport
                backgroundColor: 'white', // White background
                color: 'black', // Black text
            }}
        >
            {/* Header */}
            <Header />

            {/* Main Content */}
            <Box sx={{ flex: 1 }}>
                {/* Hero Section 1: About the Company */}
                <Box
                    sx={{
                        backgroundColor: '#f5f5f5', // Light gray background
                        padding: '6rem 1rem',
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            fontWeight: 'bold',
                            marginBottom: '1rem',
                        }}
                    >
                        About the Company
                    </Typography>
                    <Typography
                        variant="h5"
                        component="p"
                        sx={{
                            maxWidth: '800px',
                            margin: '0 auto',
                            marginBottom: '2rem',
                        }}
                    >
                        We are a leading provider of high-quality construction materials, dedicated to delivering excellence in every project. With years of experience and a commitment to innovation, we ensure our clients receive the best solutions tailored to their needs.
                    </Typography>
                </Box>

                {/* Hero Section 2: About the Owner */}
                <Box
                    sx={{
                        backgroundColor: '#ffffff', // White background
                        padding: '6rem 1rem',
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            fontWeight: 'bold',
                            marginBottom: '1rem',
                        }}
                    >
                        About the Owner
                    </Typography>
                    <Typography
                        variant="h5"
                        component="p"
                        sx={{
                            maxWidth: '800px',
                            margin: '0 auto',
                            marginBottom: '2rem',
                        }}
                    >
                        John Doe, the founder and CEO of our company, has over 20 years of experience in the construction industry. His vision and leadership have driven the company to become a trusted name in the market.
                    </Typography>
                </Box>

                {/* Hero Section 3: Link to Contact Us Page */}
                <Box
                    sx={{
                        backgroundColor: '#f5f5f5', // Light gray background
                        padding: '6rem 1rem',
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            fontWeight: 'bold',
                            marginBottom: '1rem',
                        }}
                    >
                        Get in Touch
                    </Typography>
                    <Typography
                        variant="h5"
                        component="p"
                        sx={{
                            maxWidth: '800px',
                            margin: '0 auto',
                            marginBottom: '2rem',
                        }}
                    >
                        Have questions or need assistance? Feel free to reach out to us!
                    </Typography>
                    <Button
                        component={Link}
                        to="/contact"
                        variant="contained"
                        sx={{
                            backgroundColor: '#1976d2',
                            color: 'white',
                            fontSize: '1rem',
                            padding: '10px 20px',
                            '&:hover': {
                                backgroundColor: '#1565c0',
                            },
                        }}
                    >
                        Contact Us
                    </Button>
                </Box>
            </Box>

            {/* Footer */}
            <Footer />
        </Box>
    );
};

export default AboutUs;
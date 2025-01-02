import React from 'react';
import { Box, Typography, Button, Grid, Paper, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from './../header'; // Import your Header component
import Footer from './../footer'; // Import your Footer component

const ServicePage = () => {
    const services = [
        {
            name: 'Service 1',
            description: 'We provide top-notch solutions tailored to your needs.',
        },
        {
            name: 'Service 2',
            description: 'Our team ensures excellence in every project.',
        },
        {
            name: 'Service 3',
            description: 'We deliver innovative solutions for your success.',
        },
    ];

    const companies = [
        {
            name: 'Company A',
            description: 'We helped Company A streamline their operations and increase efficiency by 30%.',
        },
        {
            name: 'Company B',
            description: 'Our team developed a cutting-edge marketing strategy that boosted Company B\'s sales by 50%.',
        },
        {
            name: 'Company C',
            description: 'We provided innovative solutions that enabled Company C to expand into new markets.',
        },
    ];

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
                {/* Hero Section 1: Services We Provide */}
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
                            marginBottom: '2rem',
                        }}
                    >
                        Services We Provide
                    </Typography>
                    <Box
                        sx={{
                            maxWidth: '1200px',
                            margin: '0 auto',
                        }}
                    >
                        {services.map((service, index) => (
                            <Box key={index}>
                                <Typography
                                    variant="h4"
                                    component="h2"
                                    sx={{
                                        fontWeight: 'bold',
                                        marginBottom: '1rem',
                                    }}
                                >
                                    {service.name}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        marginBottom: '2rem',
                                    }}
                                >
                                    {service.description}
                                </Typography>
                                {index < services.length - 1 && (
                                    <Divider
                                        sx={{
                                            margin: '2rem auto',
                                            width: '50%',
                                            backgroundColor: '#1976d2',
                                        }}
                                    />
                                )}
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Hero Section 2: Companies We Have Worked With */}
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
                            marginBottom: '2rem',
                        }}
                    >
                        Companies We Have Worked With
                    </Typography>
                    <Typography
                        variant="h5"
                        component="p"
                        sx={{
                            maxWidth: '800px',
                            margin: '0 auto',
                            marginBottom: '4rem',
                        }}
                    >
                        We have collaborated with various companies, delivering exceptional results and innovative strategies tailored to each client's needs. Here are some of the companies we've partnered with:
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {companies.map((company, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        padding: '2rem',
                                        textAlign: 'center',
                                        backgroundColor: 'white',
                                        borderRadius: '8px',
                                        transition: 'transform 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        component="h2"
                                        sx={{
                                            fontWeight: ' bold',
                                            marginBottom: '1rem',
                                        }}
                                    >
                                        {company.name}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            marginBottom: '1.5rem',
                                        }}
                                    >
                                        {company.description}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Hero Section 3: Contact Us */}
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
                            marginBottom: '2rem',
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

export default ServicePage;
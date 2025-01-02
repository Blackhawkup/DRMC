import React from 'react';
import { Box, Typography, Button, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from './../header'; // Import your Header component
import Footer from './../footer'; // Import your Footer component

const ServicePage = () => {
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
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={4}>
                            <Paper
                                elevation={3}
                                sx={{
                                    padding: '2rem',
                                    textAlign: 'center',
                                    backgroundColor: 'white',
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    component="h2"
                                    sx={{
                                        fontWeight: 'bold',
                                        marginBottom: '1rem',
                                    }}
                                >
                                    Service 1
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        marginBottom: '1.5rem',
                                    }}
                                >
                                    Description of Service 1. We provide top-notch solutions tailored to your needs.
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#1976d2',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: '#1565c0',
                                        },
                                    }}
                                >
                                    Learn More
                                </Button>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Paper
                                elevation={3}
                                sx={{
                                    padding: '2rem',
                                    textAlign: 'center',
                                    backgroundColor: 'white',
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    component="h2"
                                    sx={{
                                        fontWeight: 'bold',
                                        marginBottom: '1rem',
                                    }}
                                >
                                    Service 2
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        marginBottom: '1.5rem',
                                    }}
                                >
                                    Description of Service 2. Our team ensures excellence in every project.
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#1976d2',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: '#1565c0',
                                        },
                                    }}
                                >
                                    Learn More
                                </Button>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Paper
                                elevation={3}
                                sx={{
                                    padding: '2rem',
                                    textAlign: 'center',
                                    backgroundColor: 'white',
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    component="h2"
                                    sx={{
                                        fontWeight: 'bold',
                                        marginBottom: '1rem',
                                    }}
                                >
                                    Service 3
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        marginBottom: '1.5rem',
                                    }}
                                >
                                    Description of Service 3. We deliver innovative solutions for your success.
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#1976d2',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: '#1565c0',
                                        },
                                    }}
                                >
                                    Learn More
                                </Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>

                {/* Hero Section 2: Campaigns We Have Worked With */}
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
                        Campaigns We Have Worked With
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
                        We have collaborated with various campaigns, delivering exceptional results and innovative strategies tailored to each client's needs.
                    </Typography>
                    <Button
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
                        View Campaigns
                    </Button>
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
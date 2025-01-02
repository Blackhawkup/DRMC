import React from 'react';
import { Box, Typography, Button, Container, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import Footer from "./../footer";
import Header from "./../header";

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
            <Header />

            {/* Hero Section */}
            <Box
                sx={{
                    py: 8,
                    backgroundColor: '#f5f5f5', // Light gray background
                }}
            >
                <Container>
                    <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 3 }}>
                        Welcome to Our Company
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 4, maxWidth: '800px' }}>
                        We are dedicated to delivering excellence in every project. With years of experience and a commitment to innovation, we ensure our clients receive the best solutions tailored to their needs.
                    </Typography>
                </Container>
            </Box>

            {/* Two-Column Layout */}
            <Container sx={{ py: 8 }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 4,
                                height: '100%',
                                backgroundColor: '#f5f5f5', // Dark background
                                color: 'Black',
                                borderRadius: '8px',
                            }}
                        >
                            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Our Mission
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 3 }}>
                                Our mission is to provide innovative solutions that empower our clients to achieve their goals. We strive for excellence in every project we undertake.
                            </Typography>
                            <Button
                                variant="outlined"
                                sx={{
                                    color: '#1976d2',
                                    borderColor: '#1976d2',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                    },
                                }}
                            >
                                Read More
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 4,
                                height: '100%',
                                backgroundColor: '#f5f5f5', // Light gray background
                                borderRadius: '8px',
                            }}
                        >
                            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Our Vision
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 3 }}>
                                Our vision is to be a global leader in delivering innovative and sustainable solutions that transform industries and improve lives.
                            </Typography>
                            <Button
                                variant="outlined"
                                sx={{
                                    color: '#1976d2',
                                    borderColor: '#1976d2',
                                    '&:hover': {
                                        backgroundColor: 'rgba(25, 118, 210, 0.1)',
                                    },
                                }}
                            >
                                Read More
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
            
            
        </Box>
    );
};

export default AboutUs;
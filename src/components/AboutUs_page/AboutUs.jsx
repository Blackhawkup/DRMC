import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import Footer from "./../footer";
import Header from "./../header";

const AboutUs = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundColor: 'white',
                color: 'black',
            }}
        >
            <Header />

            {/* Hero Section */}
            <Box
                sx={{
                    py: 8,
                    backgroundImage: 'url(/construction_site_2.jpg)', 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative', 
                }}
            >
                {/* Overlay for better text readability */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.7)', 
                    }}
                />
                <Container sx={{ position: 'relative', zIndex: 1 }}> {/* Ensure text is above overlay */}
                    <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 3 }}>
                        Welcome to Our Company
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 4, maxWidth: '800px' }}>
                        We are dedicated to delivering excellence in every project. With over 20 years of experience and a commitment to innovation, we ensure our clients receive the best solutions tailored to their specific needs.
                    </Typography>
                </Container>
            </Box>

            {/* Two-Column Layout */}
            <Container sx={{ py: 8 }}>
                <Grid container spacing={4}>
                    {/* First Box */}
                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 4,
                                height: '100%',
                                borderRadius: '8px',
                                backgroundImage: 'url(/about_us.jpg)', 
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                position: 'relative', 
                            }}
                        >
                            {/* Overlay for better text readability */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
                                    borderRadius: '8px',
                                }}
                            />
                            <Box sx={{ position: 'relative', zIndex: 1 }}> {/* Ensure text is above overlay */}
                                <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                                    About Our Owner
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 3 }}>
                                    Our owner, Ashok Kumar, brings over 30+ years of experience in government and construction projects. His leadership and vision drive our commitment to quality and customer satisfaction, ensuring that we meet and exceed our clients' expectations.
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>

                    {/* Second Box */}
                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={3}
                            sx={{
                                p: 4,
                                height: '100%',
                                borderRadius: '8px',
                                backgroundImage: 'url(/construction_site_1.jpg)', 
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                position: 'relative', 
                            }}
                        >
                            {/* Overlay for better text readability */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                    borderRadius: '8px',
                                }}
                            />
                            <Box sx={{ position: 'relative', zIndex: 1 }}> {/* Ensure text is above overlay */}
                                <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                                    More About the Company
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 3 }}>
                                    Our vision is to be a leader in delivering innovative and sustainable solutions that transform the construction industry. We focus on quality, efficiency, and environmental responsibility, striving to improve lives through our services and products. At Delhi Redimix, we believe in building strong partnerships with our clients, ensuring their success is at the heart of everything we do.
                                </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            <Footer />
        </Box>
    );
};

export default AboutUs;
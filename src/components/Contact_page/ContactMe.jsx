import React from 'react';
import { Box, Typography, Button, Container, Grid, TextField } from '@mui/material';
import Header from '../header'; 
import Footer from '../footer'; 

const ContactMe = () => {
    const handleEmailClick = () => {
        window.location.href = 'mailto:delhirmc@gmail.com';
    };

    const handleCallClick = () => {
        window.location.href = 'tel:+919212071000';
    };

    const handleDirectionsClick = () => {
        const address = encodeURIComponent('The White House Sec-57, Gurugram, India');
        window.open(`https://www.google.com/maps/place/The+White+House/@28.4262473,77.0706804,17z/data=!3m1!4b1!4m6!3m5!1s0x390d189df01565e5:0xdbabe72dde75fbc!8m2!3d28.4262473!4d77.0732553!16s%2Fg%2F1tfb4z20?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D`);
    };

    // Function to handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Message sent successfully!');
    };

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
            {/* Header */}
            <Header />

            {/* Hero Section 1: Contact Information */}
            <Box
                sx={{
                    py: 8,
                    backgroundColor: '#f5f5f5', 
                }}
            >
                <Container>
                    <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center' }}>
                        Get in Touch
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 4, textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} md={4}>
                            <Box
                                sx={{
                                    textAlign: 'center',
                                    p: 3,
                                    backgroundColor: 'white',
                                    borderRadius: '8px',
                                    boxShadow: 3,
                                }}
                            >
                                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                                    Email Us
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    delhirmc@gmail.com
                                </Typography>
                                <Button
                                    variant="contained"
                                    onClick={handleEmailClick}
                                    sx={{
                                        backgroundColor: '#1976d2',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: '#1565c0',
                                        },
                                    }}
                                >
                                    Send Email
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box
                                sx={{
                                    textAlign: 'center',
                                    p: 3,
                                    backgroundColor: 'white',
                                    borderRadius: '8px',
                                    boxShadow: 3,
                                }}
                            >
                                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                                    Call Us
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    +91 9212071000
                                </Typography>
                                <Button
                                    variant="contained"
                                    onClick={handleCallClick}
                                    sx={{
                                        backgroundColor: '#1976d2',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: '#1565c0',
                                        },
                                    }}
                                >
                                    Call Now
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box
                                sx={{
                                    textAlign: 'center',
                                    p: 3,
                                    backgroundColor: 'white',
                                    borderRadius: '8px',
                                    boxShadow: 3,
                                }}
                            >
                                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                                    Visit Us
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    The White house, Sec-57, Gurugram
                                </Typography>
                                <Button
                                    variant="contain ed"
                                    onClick={handleDirectionsClick}
                                    sx={{
                                        backgroundColor: '#1976d2',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: '#1565c0',
                                        },
                                    }}
                                >
                                    Get Directions
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Hero Section 2: Contact Form */}
            <Box
                sx={{
                    py: 8,
                    backgroundColor: '#ffffff', // White background
                }}
            >
                <Container>
                    <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center' }}>
                        Send Us a Message
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 4, textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        Fill out the form below and we will get back to you as soon as possible.
                    </Typography>
                    <Box component="form" noValidate autoComplete="off" onSubmit={handleFormSubmit}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Your Name"
                                    variant="outlined"
                                    required
                                    sx={{ mb: 3 }}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Your Email"
                                    variant="outlined"
                                    required
                                    type="email"
                                    sx={{ mb: 3 }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Message"
                                    variant="outlined"
                                    required
                                    multiline
                                    rows={4}
                                    sx={{ mb: 3 }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    sx={{
                                        backgroundColor: '#1976d2',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: '#1565c0',
                                        },
                                    }}
                                >
                                    Send Message
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>

            {/* Footer */}
            <Footer />
        </Box>
    );
};

export default ContactMe;
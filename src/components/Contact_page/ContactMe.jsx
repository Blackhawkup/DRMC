import React from 'react';
import { Box, Typography, Button, Container, Grid, TextField } from '@mui/material';
import Header from '../header'; // Import your Header component
import Footer from '../footer'; // Import your Footer component

const ContactMe = () => {
    // Function to handle email button click
    const handleEmailClick = () => {
        window.location.href = 'mailto:support@example.com';
    };

    // Function to handle call button click
    const handleCallClick = () => {
        window.location.href = 'tel:+11234567890';
    };

    // Function to handle directions button click
    const handleDirectionsClick = () => {
        const address = encodeURIComponent('123 Main Street, City, Country');
        window.open(`https://www.google.com/maps/search/?api=1&query=${address}`);
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
                minHeight: '100vh', // Ensure the page takes up the full height of the viewport
                backgroundColor: 'white', // White background
                color: 'black', // Black text
            }}
        >
            {/* Header */}
            <Header />

            {/* Hero Section 1: Contact Information */}
            <Box
                sx={{
                    py: 8,
                    backgroundColor: '#f5f5f5', // Light gray background
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
                                    support@example.com
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
                                    +1 (123) 456-7890
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
                                    123 Main Street, City, Country
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
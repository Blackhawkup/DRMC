import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation(); // To track the current route

    const buttonStyle = {
        color: 'white',
        textTransform: 'none', // Remove uppercase transformation
        fontSize: '1rem',
        fontWeight: '500',
        margin: '0 5px', // Reduced margin for spacing between buttons
        padding: '6px 12px', // Same padding as header buttons
        minWidth: '80px', // Same minimum width as header buttons
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Subtle hover effect
            transition: 'background-color 0.3s ease',
        },
        '&.MuiButton-root.Mui-selected': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)', // Highlight effect for selected button
            borderBottom: '2px solid white', // Underline effect for selected button
        },
    };

    return (
        <Box
            sx={{
                backgroundColor: '#1976d2', // Blue color
                color: 'white',
                padding: '20px',
                textAlign: 'left',
                position: 'relative',
                bottom: 0,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                boxSizing: 'border-box',
                overflow: 'hidden',
                height: '250px', // Increased height to accommodate all elements
            }}
        >
            {/* Top-Centered Buttons */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row', // Horizontal alignment
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '10px', // Space between buttons and contact info
                    gap: '10px', // Consistent spacing between buttons
                    width: '100%', // Full width for button container
                }}
            >
                <Button
                    component={Link}
                    to="/"
                    sx={buttonStyle}
                    className={location.pathname === '/' ? 'Mui-selected' : ''}
                >
                    Home
                </Button>
                <Button
                    component={Link}
                    to="/services"
                    sx={buttonStyle}
                    className={location.pathname === '/services' ? 'Mui-selected' : ''}
                >
                    Services
                </Button>
                <Button
                    component={Link}
                    to="/about"
                    sx={buttonStyle}
                    className={location.pathname === '/about' ? 'Mui-selected' : ''}
                >
                    About Us
                </Button>
                <Button
                    component={Link}
                    to="/contact"
                    sx={buttonStyle}
                    className={location.pathname === '/contact' ? 'Mui-selected' : ''}
                >
                    Contact
                </Button>
            </Box>

            {/* Contact Information and Copyright */}
            <Box
                sx={{
                    textAlign: 'center',
                    marginBottom: '10px', // Space between contact info and logo
                }}
            >
                <Typography variant="h6">Contact Information</Typography>
                <Typography variant="body2">
                    Your Company Name<br />
                    Address Line 1<br />
                    Address Line 2<br />
                    City, State, Zip Code<br />
                    Phone: (XXX) XXX-XXXX<br />
                    Email: example@example.com
                </Typography>
                <Typography variant="body2" sx={{ marginTop: '10px' }}>
                    &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
                </Typography>
            </Box>

            {/* Bottom-Centered Logo */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center', // Center the logo horizontally
                    width: '100%',
                }}
            >
            </Box>
        </Box>
    );
};

export default Footer;
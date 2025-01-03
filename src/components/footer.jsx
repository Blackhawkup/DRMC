import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation(); 

    const buttonStyle = {
        color: 'white',
        textTransform: 'none', 
        fontSize: '1rem',
        fontWeight: '500',
        margin: '0 5px',
        padding: '6px 12px', 
        minWidth: '80px', 
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
            transition: 'background-color 0.3s ease',
        },
        '&.MuiButton-root.Mui-selected': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)', 
            borderBottom: '2px solid white', 
        },
    };

    return (
        <Box
            sx={{
                backgroundColor: '#1976d2', 
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
                height: '250px', 
            }}
        >
            {/* Top-Centered Buttons */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row', 
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '10px', 
                    gap: '10px', 
                    width: '100%', 
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
                    marginBottom: '10px', 
                }}
            >
                <Typography variant="h6">Contact Information</Typography>
                <Typography variant="body2">
                    Delhi Redimix Concrete Pvt. Ltd.<br />
                    The White house, Sec-57<br />
                    Gurugram, India, 122003<br />
                    Phone: (+91) 9212071000<br />   
                    Email: delhirmc@gmail.com
                </Typography>
                <Typography variant="body2" sx={{ marginTop: '10px' }}>
                    &copy; {new Date().getFullYear()} DRMC. All rights reserved.
                </Typography>
            </Box>

            {/* Bottom-Centered Logo */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center', 
                    width: '100%',
                }}
            >
            </Box>
        </Box>
    );
};

export default Footer;
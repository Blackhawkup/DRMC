import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Footer = () => {
    const location = useLocation();

    const buttonStyle = {
        color: 'white',
        textTransform: 'none',
        fontSize: { xs: '0.75rem', sm: '1rem' }, // Smaller font size for mobile
        fontWeight: '500',
        margin: { xs: '5px 0', sm: '0 5px' }, // Adjust margin for mobile
        padding: { xs: '4px 8px', sm: '6px 12px' }, // Smaller padding for mobile
        minWidth: { xs: '80px', sm: '120px' }, // Smaller width for mobile
        whiteSpace: 'nowrap',
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
                padding: { xs: '10px', sm: '20px' }, // Adjust padding for mobile
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
                height: { xs: 'auto', sm: '250px' }, // Auto height for mobile
            }}
        >
            {/* Button Container */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' }, // Column layout for mobile
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '10px',
                    gap: { xs: '5px', sm: '10px' }, // Smaller gap for mobile
                    width: '100%',
                }}
            >
                <Button
                    component={Link}
                    to="/"
                    sx={buttonStyle}
                    className={location.pathname === '/' ? 'Mui-selected' : ''}
                    startIcon={<HomeIcon />}
                >
                    Home
                </Button>
                <Button
                    component={Link}
                    to="/services"
                    sx={buttonStyle}
                    className={location.pathname === '/services' ? 'Mui-selected' : ''}
                    startIcon={<BuildIcon />}
                >
                    Services
                </Button>
                <Button
                    component={Link}
                    to="/about"
                    sx={buttonStyle}
                    className={location.pathname === '/about' ? 'Mui-selected' : ''}
                    startIcon={<InfoIcon />}
                >
                    About Us
                </Button>
                <Button
                    component={Link}
                    to="/contact"
                    sx={buttonStyle}
                    className={location.pathname === '/contact' ? 'Mui-selected' : ''}
                    startIcon={<ContactMailIcon />}
                >
                    Contact
                </Button>
            </Box>

            {/* Contact Information */}
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

            {/* Empty Box for Additional Content */}
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
import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation(); // To track the current route

    const buttonStyle = {
        color: 'white',
        textTransform: 'none', // Remove uppercase transformation
        fontSize: { xs: '0.8rem', sm: '1rem' }, // Smaller font size on small screens
        fontWeight: '500',
        margin: { xs: '0 3px', sm: '0 10px' }, // Reduced margin for small screens
        padding: { xs: '6px 8px', sm: '8px 12px' }, // Smaller padding on small screens
        flex: 1, // Make all buttons equal in size
        minWidth: '100px', // Minimum width for buttons
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
        <AppBar
            position="static"
            sx={{
                backgroundColor: '#1976d2', // Blue color
                boxShadow: 'none',
            }}
        >
            <Toolbar
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on small screens
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: { xs: '10px', sm: '0 20px' }, // Adjust padding for small screens
                }}
            >
                {/* Company Name as Connected Boxes */}
                <Box
                    component={Link}
                    to="/"
                    sx={{
                        display: 'flex',
                        textDecoration: 'none',
                        alignItems: 'center',
                        marginBottom: { xs: '10px', sm: '0' }, // Space below logo on small screens
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: '#0d47a1', // Dark blue
                            color: 'white',
                            padding: '8px 12px',
                            fontSize: '1.5rem',
                            fontWeight: '900', // Bold font weight
                            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Clean and modern font
                            borderTopLeftRadius: '5px',
                            borderBottomLeftRadius: '5px',
                        }}
                    >
                        DELHI
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: '#2e7d32', // Dark green
                            color: 'white',
                            padding: '8px 12px',
                            fontSize: '1.5rem',
                            fontWeight: '900', // Bold font weight
                            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Clean and modern font
                            borderTopRightRadius: '5px',
                            borderBottomRightRadius: '5px',
                        }}
                    >
                        REDIMIX
                    </Box>
                </Box>

                {/* Navigation Buttons */}
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap', // Allow buttons to wrap on small screens
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: { xs: '5px', sm: '10px' }, // Space between buttons
                        width: { xs: '100%', sm: 'auto' }, // Full width on small screens
                    }}
                >
                    <Button
                        component={Link}
                        to="/"
                        sx={{ ...buttonStyle }}
                        className={location.pathname === '/' ? 'Mui-selected' : ''}
                    >
                        Home
                    </Button>
                    <Button
                        component={Link}
                        to="/services"
                        sx={{ ...buttonStyle }}
                        className={location.pathname === '/services' ? 'Mui-selected' : ''}
                    >
                        Services
                    </Button>
                    <Button
                        component={Link}
                        to="/about"
                        sx={{ ...buttonStyle }}
                        className={location.pathname === '/about' ? 'Mui-selected' : ''}
                    >
                        About Us
                    </Button>
                    <Button
                        component={Link}
                        to="/contact"
                        sx={{ ...buttonStyle }}
                        className={location.pathname === '/contact' ? 'Mui-selected' : ''}
                    >
                        Contact
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
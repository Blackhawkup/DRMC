import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    const buttonStyle = {
        color: 'white',
        textTransform: 'none', // Remove uppercase transformation
        fontSize: { xs: '0.8rem', sm: '1rem' }, // Smaller font size on small screens
        fontWeight: '500',
        margin: { xs: '0 3px', sm: '0 10px' }, // Reduced margin for small screens
        padding: { xs: '6px 8px', sm: '8px 12px' }, // Smaller padding on small screens
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Subtle hover effect
            transition: 'background-color 0.3s ease',
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
                            fontWeight: '600',
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
                            fontWeight: '600',
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
                    }}
                >
                    <Button
                        component={Link}
                        to="/"
                        sx={{ ...buttonStyle }}
                    >
                        Home
                    </Button>
                    <Button
                        component={Link}
                        to="/services"
                        sx={{ ...buttonStyle }}
                    >
                        Services
                    </Button>
                    <Button
                        component={Link}
                        to="/about"
                        sx={{ ...buttonStyle }}
                    >
                        About Us
                    </Button>
                    <Button
                        component={Link}
                        to="/contact"
                        sx={{ ...buttonStyle }}
                    >
                        Contact
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
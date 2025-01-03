import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation(); 

    const buttonStyle = {
        color: 'white',
        textTransform: 'none', 
        fontSize: { xs: '0.8rem', sm: '1rem' }, 
        fontWeight: '500',
        margin: { xs: '0 3px', sm: '0 10px' }, 
        padding: { xs: '6px 8px', sm: '8px 12px' }, 
        flex: 1, 
        minWidth: '100px', 
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
        <AppBar
            position="static"
            sx={{
                backgroundColor: '#1976d2', 
                boxShadow: 'none',
            }}
        >
            <Toolbar
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' }, 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: { xs: '10px', sm: '0 20px' }, 
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
                        marginBottom: { xs: '10px', sm: '0' }, 
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: '#0d47a1', 
                            color: 'white',
                            padding: '8px 12px',
                            fontSize: '1.5rem',
                            fontWeight: '900', 
                            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', 
                            borderTopLeftRadius: '5px',
                            borderBottomLeftRadius: '5px',
                        }}
                    >
                        DELHI
                    </Box>
                    <Box
                        sx={{
                            backgroundColor: '#2e7d32', 
                            color: 'white',
                            padding: '8px 12px',
                            fontSize: '1.5rem',
                            fontWeight: '900', 
                            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', 
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
                        flexWrap: 'wrap', 
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: { xs: '5px', sm: '10px' }, 
                        width: { xs: '100%', sm: 'auto' }, 
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
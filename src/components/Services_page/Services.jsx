import React from 'react';
import { Box, Typography, Button, Grid, Paper, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from './../header'; 
import Footer from './../footer'; 

const ServicePage = () => {
    const services = [
        {
            name: 'Rental of Vehicles and Equipment',
            description: 'We offer a wide range of vehicles and construction equipment for rent, ensuring you have the right tools to complete your projects efficiently and on time.',
        },
        {
            name: 'Construction Materials and Transportation',
            description: 'We supply essential construction materials, including aggregates, sand, and concrete, along with reliable transportation services to deliver them directly to your site.',
        },
        {
            name: 'Plant Services',
            description: 'Our comprehensive plant services include the provision of construction plants, skilled labor, and necessary equipment, tailored to meet the specific needs of your project, whether managed or self-operated.',
        },
    ];

    const companies = [ 
        {
            name: 'Larsen & Toubro',
            description: 'We partnered with Larsen & Toubro to enhance their construction processes, resulting in a 25% reduction in project timelines.',
        },
        {
            name: 'NHAI',
            description: 'We collaborated with National Highways Authority of India to improve efficiency, leading to a 40% increase in project delivery speed.',
        },
        {
            name: 'Shapoorji Pallonji',
            description: 'We supported Shapoorji Pallonji in optimizing their resource management, which increased their project output by 35%.',
        },
        {
            name: 'Paras',
            description: 'Our innovative solutions helped Paras streamline their operations, resulting in a 20% cost reduction across their projects.',
        },
        {
            name: 'CS Infra',
            description: 'We assisted CS Infra in implementing advanced technology, enhancing their project management efficiency by 30%.',
        },
        {
            name: 'SS Group',
            description: 'Our collaboration with SS Group led to the development of sustainable construction practices, improving their project sustainability ratings significantly.',
        }
    ];

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

            {/* Main Content */}
            <Box sx={{ flex: 1 }}>
                {/* Hero Section 1: Services We Provide */}
                <Box
                    sx={{
                        backgroundColor: '#f5f5f5', 
                        padding: '6rem 1rem',
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            fontWeight: 'bold',
                            marginBottom: '2rem',
                        }}
                    >
                        Services We Provide
                    </Typography>
                    <Box
                        sx={{
                            maxWidth: '1200px',
                            margin: '0 auto',
                        }}
                    >
                        {services.map((service, index) => (
                            <Box key={index}>
                                <Typography
                                    variant="h4"
                                    component="h2"
                                    sx={{
                                        fontWeight: 'bold',
                                        marginBottom: '1rem',
                                    }}
                                >
                                    {service.name}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        marginBottom: '2rem',
                                    }}
                                >
                                    {service.description}
                                </Typography>
                                {index < services.length - 1 && (
                                    <Divider
                                        sx={{
                                            margin: '2rem auto',
                                            width: '50%',
                                            backgroundColor: '#1976d2',
                                        }}
                                    />
                                )}
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Hero Section 2: Companies We Have Worked With */}
                <Box
                    sx={{
                        backgroundColor: '#ffffff', 
                        padding: '6rem 1rem',
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            fontWeight: 'bold',
                            marginBottom: '2rem',
                        }}
                    >
                        Companies We Have Worked With
                    </Typography>
                    <Typography
                        variant="h5"
                        component="p"
                        sx={{
                            maxWidth: '800px',
                            margin: '0 auto',
                            marginBottom: '4rem',
                        }}
                    >
                        We have collaborated with various companies, delivering exceptional results and innovative strategies tailored to each client's needs. Here are some of the companies we've partnered with:
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {companies.map((company, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        padding: '2rem',
                                        textAlign: 'center',
                                        backgroundColor: 'white',
                                        borderRadius: '8px',
                                        transition: 'transform 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        component="h2"
                                        sx={{
                                            fontWeight: ' bold',
                                            marginBottom: '1rem',
                                        }}
                                    >
                                        {company.name}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            marginBottom: '1.5rem',
                                        }}
                                    >
                                        {company.description}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Hero Section 3: Contact Us */}
                <Box
                    sx={{
                        backgroundColor: '#f5f5f5', 
                        padding: '6rem 1rem',
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            fontWeight: 'bold',
                            marginBottom: '2rem',
                        }}
                    >
                        Get in Touch
                    </Typography>
                    <Typography
                        variant="h5"
                        component="p"
                        sx={{
                            maxWidth: '800px',
                            margin: '0 auto',
                            marginBottom: '2rem',
                        }}
                    >
                        Have questions or need assistance? Feel free to reach out to us!
                    </Typography>
                    <Button
                        component={Link}
                        to="/contact"
                        variant="contained"
                        sx={{
                            backgroundColor: '#1976d2',
                            color: 'white',
                            fontSize: '1rem',
                            padding: '10px 20px',
                            '&:hover': {
                                backgroundColor: '#1565c0',
                            },
                        }}
                    >
                        Contact Us
                    </Button>
                </Box>
            </Box>

            {/* Footer */}
            <Footer />
        </Box>
    );
};

export default ServicePage;
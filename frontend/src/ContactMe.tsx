import React from 'react';
import { Container, Typography, Box, AppBar, Tabs, Tab } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ContactMe: React.FC = () => {
    const navigate = useNavigate();

    const handleTabChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        navigate(newValue);
    };
    return (
        <Container maxWidth="sm">
            <AppBar position="static" style={{ backgroundColor: 'blue' }}>
                <Tabs value={false} onChange={handleTabChange}>
                    <Tab label="Home" value="/home" />
                    <Tab label="About Us" value="/about" />
                    <Tab label="Contact Me" value="/contact" />
                    <Tab label="Logout" value="/logout" />
                </Tabs>
            </AppBar>
            <Box mt={5}
                p={3}
                sx={{
                    background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)', // Gradient background
                    borderRadius: '15px', // Rounded corners
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Shadow for depth
                    color: 'white', // Text color
                }}>
                <Typography variant="h4" gutterBottom>
                    Contact Me
                </Typography>
                <Typography variant="body1">
                    You can reach me at:
                </Typography>
                <Typography variant="body1">
                    Email: angerasilas@gmail.com
                </Typography>
                <Typography variant="body1">
                    Phone: (254) 797 630228                
                </Typography>
            </Box>
        </Container>
    );
};

export default ContactMe;

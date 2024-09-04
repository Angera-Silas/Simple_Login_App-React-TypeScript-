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
                    <Tab label="Logout" value="/" />
                </Tabs>
            </AppBar>
            <Box mt={5}>
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

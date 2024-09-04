import React from 'react';
import { Container, Typography, Box, AppBar, Tabs, Tab } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const name = queryParams.get('name');
    const age = queryParams.get('age');
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
                    Welcome, {name}
                </Typography>
                <Typography variant="h6">
                    Your age is: {age}
                </Typography>
            </Box>
        </Container>
    );
};

export default HomePage;

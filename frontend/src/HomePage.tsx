import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, AppBar, Tabs, Tab } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
    const [name, setName] = useState<string | null>(null);
    const [age, setAge] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const nameParam = queryParams.get('name');
        const ageParam = queryParams.get('age');

        if (nameParam && ageParam) {
            setName(nameParam);
            setAge(ageParam);
            localStorage.setItem('name', nameParam);
            localStorage.setItem('age', ageParam);
        } else {
            // Retrieve from localStorage if not in query params
            setName(localStorage.getItem('name'));
            setAge(localStorage.getItem('age'));
        }
    }, []);

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

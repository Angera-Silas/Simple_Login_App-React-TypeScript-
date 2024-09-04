import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const HomePage: React.FC = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const name = queryParams.get('name');
    const age = queryParams.get('age');

    return (
        <Container maxWidth="sm">
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

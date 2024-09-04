import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const LoginPage: React.FC = () => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const calculateAge = (dob: string): number => {
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const age = calculateAge(dob);

        if (age < 18 || age > 50) {
            setError('Age must be between 18 and 50.');
            return;
        }

        setError('');

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, password }),
            });

            if (response.ok) {
                const data = await response.json();
                // Redirect to the homepage with name and age
                window.location.href = `/home?name=${data.name}&age=${age}`;
            } else {
                setError('Authentication failed.');
            }
        } catch (error) {
            setError('An error occurred.');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box mt={5}>
                <Typography variant="h4" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Date of Birth"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        margin="normal"
                        required
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        margin="normal"
                        required
                    />
                    {error && (
                        <Typography color="error" variant="body2" gutterBottom>
                            {error}
                        </Typography>
                    )}
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Login
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default LoginPage;

import React from 'react';
import { Container, Typography, Box, AppBar, Tabs, Tab } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const AboutUs: React.FC = () => {
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
            <Box 
                mt={5}
                p={3}
                sx={{
                    background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)', // Gradient background
                    borderRadius: '15px', // Rounded corners
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Shadow for depth
                    color: 'white', // Text color
                }}
            >
                <Typography variant="h4" gutterBottom>
                    About Me
                </Typography>
                <Typography variant="body1" paragraph>
                    I am a passionate software developer with experience in building mobile, web, and desktop applications. 
                    I enjoy creating solutions that are both efficient and user-friendly, leveraging a wide range of tools and technologies.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <strong>Key Skills:</strong>
                </Typography>
                <Typography variant="body1" paragraph>
                    <ul>
                        <li><strong>Mobile Development:</strong> Java, Flutter, Dart, Kotlin</li>
                        <li><strong>Web Development:</strong> JavaScript, PHP, React, Node.js, Express.js, AngularJS</li>
                        <li><strong>Desktop Development:</strong> Java, Kotlin</li>
                        <li><strong>Database Management:</strong> SQL</li>
                        <li><strong>Backend Development:</strong> Node.js, Express.js, PHP</li>
                        <li><strong>Programming Languages:</strong> Java, Kotlin, Dart, JavaScript, PHP, Python, TypeScript</li>
                        <li><strong>Data Analysis:</strong> Excel</li>
                        <li><strong>Ethical Hacking:</strong> Wireless Networks, Password Cracking</li>
                        <li><strong>Document Editing:</strong> Advanced document editing skills</li>
                    </ul>
                </Typography>
                <Typography variant="body1" paragraph>
                    I am also highly interested in continuing to expand my knowledge in areas such as React, Node.js, Express.js, 
                    TypeScript, and Python. I am always eager to learn and take on new challenges, whether it's developing 
                    complex applications or analyzing data to derive meaningful insights.
                </Typography>
            </Box>
        </Container>
    );
};

export default AboutUs;

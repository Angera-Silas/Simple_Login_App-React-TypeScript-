import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear user session data from localStorage
        localStorage.removeItem('name');
        localStorage.removeItem('age');
        navigate('/'); // Redirect to the login page
    }, [navigate]);

    return null;
};

export default Logout;

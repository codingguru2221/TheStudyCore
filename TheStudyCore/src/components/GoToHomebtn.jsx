import React, { useEffect, useState } from 'react';
import { Button, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router';

const GoToHomeButton = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const isLogged = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(isLogged);
    }, []);

    if (!isLoggedIn) return null;

    const isLoginOrRegisterPage =
        location.pathname === '/login' || location.pathname === '/register';

    if (!isLoginOrRegisterPage) return null;

    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', m: 2 }}>
            <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/')}
            >
                🚀 Go to Home
            </Button>
        </Box>
    );
};

export default GoToHomeButton;

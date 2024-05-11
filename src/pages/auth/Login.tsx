import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Link } from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const auth = getAuth();
    const navigate = useNavigate();

    const handlePWChange = (event: any) => {
        setPassword(event.target.value);
    };
    
    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };

    const handleLogin = async (e: any) => {
        e.preventDefault()
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            dispatch(setUser(user));
            console.log(user);
            navigate('/')
        } catch (error: any) {
            console.error('Error logging in:', error.message);
            setError(true)
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}
        >
            <Typography variant="h4" gutterBottom>
                Login
            </Typography>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    minWidth: '300px',
                    flexDirection: 'column',
                    '& > :not(style)': { m: 1,},
                }}
                noValidate
                autoComplete="off"
            >
                <TextField 
                    id="email" 
                    label="Email Address" 
                    variant="outlined" 
                    onChange={handleEmailChange}
                />
                <TextField 
                    id="password" 
                    type="password" 
                    label="Password" 
                    variant="outlined" 
                    onChange={handlePWChange}
                />
                <Button 
                    variant="contained" 
                    sx={{backgroundColor: '#967ADC', '&:hover': { backgroundColor: '#AC92CE' }}} 
                    type="submit"
                    onClick={handleLogin}
                >
                    Login
                </Button>
                {error && (
                    <Typography variant="body2" >Error loggin in</Typography>
                )}
            </Box>
            <Typography variant="body2" mt={2}>
                Don't have an account? <Link href="/register">Sign up</Link>
            </Typography>
        </Box>
    );
};

export default Login;

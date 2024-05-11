import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Link } from '@mui/material';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

const Register: React.FC = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const navigate = useNavigate();

    const handlePWChange = (event: any) => {
        setPassword(event.target.value);
    };
    
    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };

    const handleLogin = async (e:any) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            dispatch(setUser(user));
            console.log(user);
            navigate('/')
        } catch (error: any) {
            console.error('Error creating account in:', error.message);
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
                Register
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
                    Register
                </Button>
                {error && (
                    <Typography variant="body2" >Error creating account</Typography>
                )}
            </Box>
            <Typography variant="body2" mt={2}>
                Already have an account? <Link href="/login">Log in</Link>
            </Typography>
        </Box>
    );
};

export default Register;

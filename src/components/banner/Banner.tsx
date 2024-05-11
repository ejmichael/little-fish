import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Banner: React.FC = () => {
  return (
    <Box
      sx={{
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        backgroundSize: 'cover',
        textAlign: 'center',
        color: 'gray', 
      }}
    >
      <Typography variant="h2" gutterBottom>
        Find the best tech equipemnt in South Africa.
      </Typography>
    </Box>
  );
};

export default Banner;

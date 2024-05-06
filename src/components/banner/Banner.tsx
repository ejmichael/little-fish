import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Banner: React.FC = () => {
  return (
    <Box
      // Main container for the hero section
      sx={{
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5', // Light background color
        backgroundImage: 'url(/path/to/your/image.jpg)', // Optional background image
        backgroundSize: 'cover', // Cover the entire area
        textAlign: 'center',
        color: 'gray', // Text color
      }}
    >
      <Typography variant="h2" gutterBottom>
        Welcome to Little Fish E-Commerce
      </Typography>
      <Typography variant="h5" gutterBottom>
        Discover the best products curated for you.
      </Typography>
      <Button
        variant="contained" // Filled button
        color="primary"
        sx={{
          mt: 2, // Margin top
          px: 4, // Padding on the x-axis
          py: 2, // Padding on the y-axis
        }}
        onClick={() => {
          // Handle the button click
          console.log('Explore Now clicked!');
        }}
      >
        Explore Now
      </Button>
    </Box>
  );
};

export default Banner;

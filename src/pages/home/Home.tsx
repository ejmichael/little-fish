import React from "react";
import { Grid, Box, Typography, CircularProgress } from '@mui/material';
import Banner from "../../components/banner/Banner";
import ProductCard from "../../components/product-card/ProductCard";
import products from '../../data/products';


const Home: React.FC = () => {
    return (
        <Box>
            <Banner />
            <Box 
                display="flex"
                justifyContent="center"
                gap={2}
                p={2}
                m={5}
            >
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Box >
            {/* <Footer /> */}
        </Box>
    )
}

export default Home
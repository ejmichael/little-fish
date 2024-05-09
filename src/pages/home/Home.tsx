import React from "react";
import { Grid, Box, Typography, CircularProgress } from '@mui/material';
import Banner from "../../components/banner/Banner";
import ProductCard from "../../components/product-card/ProductCard";
import products from '../../data/products';
import Filter from "../../components/filter/Filter";
import {filterProducts} from '../../utils/filterProducts'


const Home: React.FC = () => {

    const [category, setCategory] = React.useState('');

    console.log(category);

    const filteredProducts = filterProducts(products, category)

    return (
        <Box>
            <Banner />
            <Grid container spacing={2} >
                <Grid item sm={12} md={3} >
                    <Box sx={{ height: '100%'}}>
                        <Filter category={category} setCategory={setCategory} />
                    </Box>
                </Grid>
                <Grid item sm={12} md={9} sx={{ height: '100%'}}>
                    <Box 
                        p={2}
                        m={3}
                        sx={{ height: '100%'}}
                    >
                        <Grid container spacing={4} >
                            {filteredProducts.map((product) => (
                                <Grid item xs={6} sm={6} md={3} key={product.id}>
                                    <ProductCard key={product.id} product={product} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box >
                </Grid>
            </Grid>
            {/* <Footer /> */}
        </Box>
    )
}

export default Home
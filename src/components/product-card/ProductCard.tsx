import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useState } from "react";
import Product from '../../assets/product-images/P2PDWM0.jpg'


const ProductCard: React.FC = () => {

    const [isAddedToCart, setIsAddedToCart] = useState(false)

    const product = {
        productName: "Product Name",
        productPrice: "R 989.00",
        productDescription: "Product description of the headphones that will blow the user away.",
        colors: ['blue', 'green', 'pink'],
        imgSource: Product
    }

    return (
        <Card sx={{ maxWidth: 250, textAlign: 'left' }}>
                <CardMedia
                    sx={{}}
                    image={Product}
                    //title={}
                    component="img"
                />
                <CardContent>
                    <Typography variant="h6" component="div">
                        {product.productName}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "grey" }}component="div">
                        {product.productDescription} 
                    </Typography>
                </CardContent>
                {isAddedToCart ? (
                    <CardActions sx={{ display: 'flex', justifyContent: 'space-between', p:2}}>
                            <Button  sx={{ border: "1px solid blue", height: 32, minWidth: 32 }} >-</Button>
                            <Typography variant="body2">3</Typography>
                            <Button size="small" sx={{ border: "1px solid blue", height: 32, minWidth: 32 }}>+</Button>
                    </CardActions>
                ) : (
                    <CardActions sx={{ display: 'flex', justifyContent: 'center', p:2}}>
                            <Button  sx={{ border: "1px solid blue", height: 32, minWidth: 32 }} >Buy Now</Button>
                    </CardActions>
                )}
        </Card>
    )
}

export default ProductCard
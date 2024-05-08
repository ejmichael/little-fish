import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useState } from "react";
// import Product from '../../assets/product-images/P2PDWM0.jpg'
import { RootState } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, increaseQty, descreaseQty } from "../../features/cart/cartSlice"
import { Product } from "../../data/products"

    interface ProductCardProps {
        product: Product;
    }

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const cartItems = useSelector((state: RootState) => state.cart.cart as Product[])
    const dispatch = useDispatch();
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const handleAddToCart = () => {
        dispatch(addToCart(product))
    }
    
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product))
    }

    const handleIncreaseQty = () => {
        dispatch(increaseQty(product))
    }
    
    const handleDecreaseQty = () => {
        dispatch(descreaseQty(product))
    }

    const productInCart = cartItems.find(p => p.id == product.id)

    return (
        <Card sx={{ maxWidth: 250, textAlign: 'left', bgcolor: "#f1f1f1" }}>
                <CardMedia
                    sx={{}}
                    image={product.imgSource}
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
                {productInCart ? (
                    <CardActions sx={{ display: 'flex', justifyContent: 'space-between', p:2}}>
                            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-around', alignItems: 'center', p:2, backgroundColor: '#fffff'}}>
                                <Button  sx={{ border: "1px solid blue", height: 32, minWidth: 32 }} onClick={handleDecreaseQty} >-</Button>
                                <Typography variant="body2">{productInCart ? productInCart.qty : 0}</Typography>
                                <Button size="small" sx={{ border: "1px solid blue", height: 32, minWidth: 32 }} onClick={handleIncreaseQty}>+</Button>
                            </Box>
                            <Button size="small" sx={{ border: "1px solid red", color: 'red', height: 32, minWidth: 32 }} onClick={handleRemoveFromCart}>X</Button>
                    </CardActions>
                ) : (
                    <CardActions sx={{ display: 'flex', justifyContent: 'center', p:2}}>
                            <Button  sx={{ border: "1px solid blue", height: 32, minWidth: 32 }} onClick={handleAddToCart}>Buy Now</Button>
                    </CardActions>
                )}
        </Card>
    )
}

export default ProductCard
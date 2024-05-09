import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { addToCart, removeFromCart, increaseQty, decreaseQty } from '../../features/cart/cartSlice';
import { Product } from '../../data/products';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const cartItems = useSelector((state: RootState) => state.cart.cart as Product[]);
    const dispatch = useDispatch();
    
    const productInCart = cartItems.find(p => p.id === product.id);

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };
    
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart({ id: product.id }));
    };

    const handleIncreaseQty = () => {
        dispatch(increaseQty({ id: product.id }));
    };
    
    const handleDecreaseQty = () => {
        dispatch(decreaseQty({ id: product.id }));
    };

    return (
        <Card sx={{ width: '250px', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
                component="img"
                image={product.imgSource}
                alt={product.productName}
                sx={{ height: '180px', width: '100%' }}
            />
            <CardContent>
                <Typography variant="h6" component="div" sx={{minHeight: '60px'}}>
                    {product.productName}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{maxHeight: '50px'}}>
                    {product.productDescription}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="h6" color="text" sx={{ textAlign: 'left', fontWeight: 700 }}>R {product.productPrice}</Typography>
            </CardContent>
            {productInCart ? (
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', gap:2 }}>
                        <Button
                            onClick={handleDecreaseQty}
                            sx={{
                                backgroundColor: 'primary.main',
                                color: 'white',
                                borderRadius: '12px',
                                minWidth: 32,
                                height: 32,
                                padding: 0,
                                '&:hover': { backgroundColor: '#e0f7fa' }
                            }}
                        >
                            -
                        </Button>
                        <Typography variant="body2" sx={{ mx: 2 }}>
                            {productInCart.qty}
                        </Typography>
                        <Button
                            onClick={handleIncreaseQty}
                            sx={{
                                backgroundColor: 'primary.main',
                                color: 'white',
                                borderRadius: '12px',
                                height: 32,
                                minWidth: 32,
                                padding: 0,
                                '&:hover': { backgroundColor: '#e0f7fa' }
                            }}
                        >
                            +
                        </Button>
                    </Box>
                    <Button
                        onClick={handleRemoveFromCart}
                        sx={{
                            backgroundColor: 'rgb(214, 95, 95)',
                            color: 'white',
                            height: 32,
                            minWidth: 32,
                            borderRadius: '12px',
                            padding: 0,
                            '&:hover': { backgroundColor: '#ffebee' }
                        }}
                    >
                        X
                    </Button>
                </CardActions>
            ) : (
                <CardActions sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                    <Button
                        onClick={handleAddToCart}
                        sx={{
                            backgroundColor: 'primary.main',
                            color: 'white',
                            height: 40,
                            width:'100%',
                            borderRadius: '16px',
                            padding: '0 16px',
                            '&:hover': { backgroundColor: 'primary.dark' }
                        }}
                    >
                        Buy Now
                    </Button>
                </CardActions>
            )}
        </Card>
    );
};

export default ProductCard;

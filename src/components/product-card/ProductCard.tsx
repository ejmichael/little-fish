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
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
                component="img"
                image={product.imgSource}
                alt={product.productName}
                sx={{ height: '180px', width: '100%' }}
            />
            <CardContent>
                <Typography variant="body1" component="div" sx={{minHeight: '60px', textAlign: 'left'}}>
                    {product.productName}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{maxHeight: '50px', textAlign: 'left'}}>
                    {product.productDescription}
                </Typography>
            </CardContent>
            <CardContent>
                <Typography variant="body2" color="text" sx={{ textAlign: 'left', fontWeight: 400, textDecoration: 'line-through', color: '#b0b0b0'}}>Was R {product.productPrice}</Typography>
                <Typography variant="h6" color="text" sx={{ textAlign: 'left', fontWeight: 700 }}>Now R {product.productPrice * (1-product.discount)}</Typography>
            </CardContent>
            {productInCart ? (
                <CardActions sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', gap:2, border: '1px solid #967ADC', borderRadius: '14px'}}>
                        <Button
                            onClick={handleDecreaseQty}
                            sx={{
                                backgroundColor: '#967ADC',
                                color: 'white',
                                borderRadius: '12px',
                                minWidth: 32,
                                height: 32,
                                padding: 0,
                                '&:hover': { backgroundColor: '#AC92CE' }
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
                                backgroundColor: '#967ADC',
                                color: 'white',
                                borderRadius: '12px',
                                height: 32,
                                minWidth: 32,
                                padding: 0,
                                '&:hover': { backgroundColor: '#AC92CE' }
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
                            '&:hover': { backgroundColor: '#b55858' }
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
                            backgroundColor: '#967ADC',
                            color: 'white',
                            height: 40,
                            width:'100%',
                            borderRadius: '16px',
                            padding: '0 16px',
                            '&:hover': { backgroundColor: '#AC92CE' }
                        }}
                    >
                        Add to cart
                    </Button>
                </CardActions>
            )}
        </Card>
    );
};

export default ProductCard;

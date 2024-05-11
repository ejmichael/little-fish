import React from "react";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { Product } from '../../data/products';
import { addToCart, removeFromCart, increaseQty, decreaseQty } from '../../features/cart/cartSlice';

interface CartItemProps {
    item: Product;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const dispatch = useDispatch();

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart({ id: item.id }));
    };

    const handleIncreaseQty = () => {
        dispatch(increaseQty({ id: item.id }));
    };
    
    const handleDecreaseQty = () => {
        dispatch(decreaseQty({ id: item.id }));
    };

    console.log(item);
    
    const totalPrice = item.qty ? (item.productPrice * item.qty).toFixed(2) : 'N/A';

    return (
            <Grid container spacing={2} key={item.id} sx={{ alignItems: 'center'}}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body2">
                        {item.productName}
                    </Typography> 
                </Grid>
                <Grid item xs={5} md={3}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #967ADC', borderRadius: '14px'}}>
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
                            {item.qty}
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
                </Grid>
                <Grid item xs={5} md={2}>
                    <Typography variant="body1">R {totalPrice}</Typography>
                </Grid>
                <Grid item xs={2} md={1}>
                    <IconButton
                        onClick={() => handleRemoveFromCart()}
                        sx={{
                            backgroundColor: 'rgb(214, 95, 95)',
                            color: 'white',
                            height: 30,
                            minWidth: 30,
                            borderRadius: '12px',
                            padding: 0,
                            fontSize: '12px',
                            '&:hover': { backgroundColor: '#b55858' }
                        }}
                    >
                        X
                    </IconButton>
                </Grid>
            </Grid>
    )
}

export default CartItem
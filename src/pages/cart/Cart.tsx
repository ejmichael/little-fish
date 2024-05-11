import React from 'react';
import { Modal, Box, Typography, Button, IconButton, Grid, Card, CardMedia } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { removeFromCart } from '../../features/cart/cartSlice';
import { Product } from "../../data/products"
import CartItem from '../../components/cart-item/CartItem';
import { Link } from 'react-router-dom';
import { PaystackButton } from 'react-paystack';

interface CartProps {
    open: boolean; 
    onClose: () => void;}

const Cart: React.FC<CartProps> = ({ open, onClose }) => {
    const cartItems = useSelector((state: RootState) => state.cart.cart as Product[]);
    const user = useSelector((state: RootState) => state.user)
    const subTotal = cartItems.reduce((accumulator, product) => {
        return accumulator + (product.productPrice * (product.qty ?? 0))
    }, 0)

    console.log("Cart:", user);

    const getTotal = subTotal * (1.15);

    const config = {
        reference: (new Date()).getTime().toString(),
        email: "user@gmail.com",
        amount: 10000, 
        publicKey: 'sk_test_b11cf16dd54a800fa5cebdbd4e9eb293c1337eaf',
        
      };

        const paymentDetails = {
            ...config,
            text: 'Paystack Button Implementation',
            onSuccess: () =>
            alert("Thanks for doing business with us! Come back soon!!"),
            onClose: () => alert("Wait! You need this oil, don't go!!!!"),
        }

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '70%',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                }}
            >
                <Typography variant="h5" gutterBottom>
                    Your Cart
                </Typography>

                {/* Cart items */}
                <Grid container spacing={2}>
                    <Grid item md={8} sm={12} spacing={2}>
                        {cartItems.map((item) => (
                            <Grid item xs={12} my={2}>
                                <CartItem item={item}/>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item md={4} sm={12} sx={{width: '100%'}}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#eeeeeecc', minHeight:'200px', border: '0.5px solid #bababa', width: '100%'}}>
                            <Box sx={{display: 'flex', alignItems: 'center', height: '50px', borderBottom: '1px solid #bababa', padding: '5px',}}>
                                <Typography variant="body2">Subtotal: R {subTotal.toFixed(2)}</Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center', height: '50px', borderBottom: '1px solid #bababa', padding: '5px',}}>
                                <Typography variant="body2">Shipping:</Typography>
                            </Box>
                            <Box sx={{display: 'flex', alignItems: 'center', height: '50px', padding: '5px', }}>
                                <Typography variant="body1" sx={{ fontWeight: 'bold'}}>Total: R {getTotal.toFixed(2)}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                {/* Close and checkout buttons */}
                <Box mt={2} display="flex" justifyContent="space-between">
                    <Button variant="outlined" sx={{ border: '1px solid #AC92CE', color: '#AC92CE', '&:hover': { color: '#AC92CE'}}} onClick={onClose}>
                        Close
                    </Button>
                    {user ? (<PaystackButton {...paymentDetails}/>) : (<Link to='/login'><Button variant="contained" sx={{ background: '#967ADC', '&:hover': { backgroundColor: '#AC92CE'}}}>Login to checkout </Button></Link>)}
                </Box>
            </Box>
        </Modal>
    );
};

export default Cart;

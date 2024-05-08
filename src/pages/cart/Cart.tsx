import React from 'react';
import { Modal, Box, Typography, Button, IconButton, Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { removeFromCart } from '../../features/cart/cartSlice';
import { Product } from "../../data/products"

interface CartProps {
    open: boolean; // Whether the modal is open
    onClose: () => void; // Function to call to close the modal
}

const Cart: React.FC<CartProps> = ({ open, onClose }) => {
    const cartItems = useSelector((state: RootState) => state.cart.cart as Product[]);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (productId: string) => {
        dispatch(removeFromCart({ id: productId }));
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80%',
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
                    {cartItems.map((item) => (
                        <Grid item xs={12} key={item.id}>
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <Typography>
                                    {item.productName} (Qty: {item.qty})
                                </Typography>
                                <IconButton
                                    onClick={() => handleRemoveFromCart(item.id)}
                                    sx={{ color: 'red' }}
                                >
                                    X
                                </IconButton>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                {/* Close and checkout buttons */}
                <Box mt={2} display="flex" justifyContent="space-between">
                    <Button variant="outlined" onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="contained" color="primary">
                        Checkout
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default Cart;

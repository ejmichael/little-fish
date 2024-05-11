import { AppBar, Badge, Box, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import { AccountCircle } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

import type { RootState } from '../../app/store'; 
import Cart from '../../pages/cart/Cart';

const Navbar: React.FC = () => {

  const cartItems = useSelector((state: RootState) => state.cart.cart)

  const user = useSelector((state: any) => state.user)

  console.log(user);

  const [cartModalOpen, setCartModalOpen] = useState(false); // State to control the modal

  const handleCartIconClick = () => {
      setCartModalOpen(true); 
  };

  const handleCartModalClose = () => {
      setCartModalOpen(false); 
  };  

    return (
        <Box sx={{ flexGrow: 1, height: '90px', }}>
            <AppBar position="fixed" sx={{ p: 2, display:'flex', flexDirection: 'row', alignItems: 'center', background: '#967ADC'}}>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                    Tech-quipment
                </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap:1 }}>
                <Typography variant="body2">{user?.email}</Typography>
                <IconButton
                  size="large"
                  aria-label="cart"
                  color="inherit"
                  onClick={handleCartIconClick}
                >
                  <Badge badgeContent={cartItems.length} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  //aria-controls={menuId}
                  aria-haspopup="true"
                  //onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Box>
          </AppBar>
            <Cart open={cartModalOpen} onClose={handleCartModalClose} />
        </Box>
    )
}

export default Navbar
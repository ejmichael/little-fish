import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: JSON.parse(localStorage.getItem("cart") || "[]")
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, productName, productPrice, qty = 1} = action.payload;
            const productInCart = state.cart.find((p) => p.id === id );
            
            if(productInCart) {
                productInCart.qty += 1
            } else {
               const product = {
                id,
                productName,
                productPrice,
                qty
               } 
               state.cart.push(product);
               saveCartToLocalStorage(state.cart);
            } 
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload;
            state.cart = state.cart.filter(p => p.id !== id)
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        decreaseQty : (state, action) => {
            const { id, qty = 1} = action.payload;
            const product = state.cart.find((p) => p.id === id )

            if (product && product.qty > 0) {
                product.qty -= 1;
        
                // Optionally remove product from cart if quantity becomes zero
                if (product.qty === 0) {
                    state.cart = state.cart.filter((p) => p.id !== id);
                }
            }
            saveCartToLocalStorage(state.cart);
        },
        increaseQty:(state, action) => {
            const { id } = action.payload;

            const product = state.cart.find((p) => p.id === id )

            if (product) {
                product.qty += 1
            }
            saveCartToLocalStorage(state.cart);
        }
    }
})

const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

export const { addToCart, removeFromCart, increaseQty, decreaseQty } = cartSlice.actions;

export default cartSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [] 
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, productName, price, qty = 1} = action.payload;
            const productInCart = state.cart.find((p) => p.id === id );
            
            if(productInCart) {
                productInCart.qty += 1
            } else {
               const product = {
                id,
                productName,
                price,
                qty
               } 
               state.cart.push(product);
            } 
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload;
            state.cart = state.cart.filter(p => p.id !== id)
        },
        descreaseQty : (state, action) => {
            const { id, qty = 1} = action.payload;
            const product = state.cart.find((p) => p.id === id )

            if (product && product.qty > 0) {
                product.qty -= 1;
        
                // Optionally remove product from cart if quantity becomes zero
                if (product.qty === 0) {
                    state.cart = state.cart.filter((p) => p.id !== id);
                }
            }

        },
        increaseQty:(state, action) => {
            const { id } = action.payload;

            const product = state.cart.find((p) => p.id === id )

            if (product) {
                product.qty += 1
            }
        }
    }
})

export const { addToCart, removeFromCart, increaseQty, descreaseQty } = cartSlice.actions;

export default cartSlice.reducer;
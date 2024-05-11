import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import userReducer from '../features/auth/authSlice';

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;

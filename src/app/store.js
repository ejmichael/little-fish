import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
// Import other reducers

const rootReducer = combineReducers({
    cart: cartReducer,
    // Add other reducers here
});

const store = configureStore({
    reducer: rootReducer,
    // Add any middleware here
});

// Define RootState type as the return type of rootReducer
// Export RootState type for use in TypeScript files
export type RootState = ReturnType<typeof rootReducer>;

// Export the store
export default store;

import { configureStore } from '@reduxjs/toolkit';
import CartRecucer from './features/Cart/CartSlice';
import modalReducer from './features/modal/modalSlice';
export const store = configureStore({
  reducer: {
    cart: CartRecucer,
    modal: modalReducer,
  },
});
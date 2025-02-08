import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './Slice/PaginateSlice';

export const store = configureStore({
    reducer: {
        productsList: productsReducer
    }
})
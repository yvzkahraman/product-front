import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../slicers/ProductSlicer';
import authReducer from '../slicers/AuthSlicer';

const store = configureStore({
    reducer: {
        productState: productReducer,
        authState: authReducer,
    }
})

export default store;
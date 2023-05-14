import { createSlice } from "@reduxjs/toolkit"

const state = {
    products: [],
    selectedProduct: {}
}

const productSlicer = createSlice({
    name: 'Products',
    initialState: state,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload
        },
        removeProduct: (state, action) => {
            let products = state.products.filter(x => x.id != action.payload.id)
            return {
                products: [...products],
                selectedProduct: state.selectedProduct,
            }
        }
    }
});

export const { setProducts, setSelectedProduct, removeProduct } = productSlicer.actions
export default productSlicer.reducer;
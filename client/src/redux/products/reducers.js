import { createSlice } from '@reduxjs/toolkit';
import { getProductsThunk } from './thunks';

export const productSlice = createSlice({
    name: 'products',
    initialState: {
      products: [],
      loading: false,
      error: null,
    },
    
    extraReducers: {
      [getProductsThunk.pending]: state => {
        state.loading = true;
      },
  
      [getProductsThunk.fulfilled]: (state, action) => {
        // const {
        //   payload: { items },
        // } = action;
       state.products = action.payload.rows;
        state.loading = false;
      },
  
      [getProductsThunk.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });
  
  export default productSlice.reducer;
  

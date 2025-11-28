'use client';

import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { fetchProducts } from '../thunks/productsThunk';

type ProductItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

interface ProductState {
  items: ProductItem[];
  error: string | null;
  status: boolean;  
}

const initialState: ProductState = {
  status: false,
  error: null,
  items: [],
};

const productSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
     builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});


export default productSlice.reducer;

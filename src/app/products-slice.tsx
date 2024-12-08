import { createSlice } from '@reduxjs/toolkit';
import { Product } from './types';
import data from './load-json';

interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: data, 
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
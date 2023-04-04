import { configureStore, createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'product',
    initialState: {
      productList: [],
      searchQuery: '',
    },
    reducers: {
      setProductList: (state, action) => {
        state.productList = action.payload;
      },
      setSearchQuery: (state, action) => {
        state.searchQuery = action.payload;
      },
    },
  });
  
export const { setProductList, setSearchQuery } = productSlice.actions;

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
  },
});

import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialData = {
  products: [],
  error: null,
  loading: false,
};

export const fetchProducts = createAsyncThunk(
  'productListing',
  async (data, {rejectWithValue}) => {
    // console.log(data.page);
    try {
      const productResponse = await axios.get(
        `https://dummyjson.com/products?limit=${data.page}`
      );
      console.log(
        'productResponse.data.products',
        productResponse.data.products
      );
      return productResponse.data.products;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const paginate = createSlice({
  name: 'products',
  initialState: initialData,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default paginate.reducer;

import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {registertype} from '../../../globalFunctions/GlobalTypes';
import axios from 'axios';
import {REGISTER_USER} from '../../../apiList';

export const registerUsers = createAsyncThunk(
  'auth/registerUser',
  async (data: FormData, {rejectWithValue}) => {
    try {
      const response = await axios.post(REGISTER_USER, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  },
);

const initalState: registertype = {
  user: null,
  isLoading: false,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initalState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(registerUsers.pending, state => {
      state.isLoading = true;
      state.success = false;
    }),
      builder.addCase(registerUsers.fulfilled, (state, action: PayloadAction<null>) => {
        state.isLoading = false;
        state.success = true;
        state.user = action.payload;
      });
    builder.addCase(registerUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload as string | null;
    });
  },
});

export const {resetToast} = authSlice.actions;
export default authSlice.reducer;

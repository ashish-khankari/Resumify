import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {
  LoginUserResponse,
  RegisterFormType,
  registertype,
  RegisterUserResponse,
  UserLogin,
} from '../../../globalFunctions/GlobalTypes';
import axios from 'axios';
import {BASE_URL_DEV} from '../../../apiList';

export const registerUsers = createAsyncThunk(
  'auth/registerUser',
  async (data: RegisterFormType, {rejectWithValue}) => {
    try {
      const response: RegisterUserResponse = await axios.post(
        `${BASE_URL_DEV}/api/auth/register`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || 'Something went wrong'
      );
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (data: UserLogin, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        `${BASE_URL_DEV}/api/auth/login`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data as LoginUserResponse;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || 'Something went wrong'
      );
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, {rejectWithValue}) => {
    try {
      // You can add API call to logout on server if needed
      // await axios.post(`${BASE_URL_DEV}/api/auth/logout`);
      return true;
    } catch (error: any) {
      return rejectWithValue(
        error?.response?.data?.message || 'Something went wrong'
      );
    }
  }
);

const initalState: registertype = {
  isLoading: false,
  error: null,
  success: false,
  user: {
    res: {
      _id: '',
      username: '',
      email: '',
    },
    token: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initalState,
  reducers: {
    logout: state => {
      state.user = {
        res: {
          _id: '',
          username: '',
          email: '',
        },
        token: '',
      };
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(registerUsers.pending, state => {
      state.isLoading = true;
      state.success = false;
    });
    builder.addCase(
      registerUsers.fulfilled,
      (state, action: PayloadAction<RegisterUserResponse | undefined>) => {
        state.isLoading = false;
        state.success = true;
      }
    );
    builder.addCase(registerUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.success = false;
      state.error = action.payload as string | null;
    });

    // Login
    builder.addCase(loginUser.pending, state => {
      state.isLoading = true;
      state.success = false;
    });
    builder.addCase(
      loginUser.fulfilled,
      (state, action: PayloadAction<LoginUserResponse>) => {
        state.isLoading = false;
        state.success = true;
        const {res, token} = action.payload;
        state.user = {res, token};
      }
    );

    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.success = false;
    });

    // Logout
    builder.addCase(logoutUser.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(logoutUser.fulfilled, state => {
      state.isLoading = false;
      state.user = {
        res: {
          _id: '',
          username: '',
          email: '',
        },
        token: '',
      };
      state.success = false;
      state.error = null;
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;
export const {logout} = authSlice.actions;

import {configureStore} from '@reduxjs/toolkit';
import registerReducer from '../redux/slice/authSlice/authSlice';

export const store = configureStore({
  reducer: {
    userRegister: registerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



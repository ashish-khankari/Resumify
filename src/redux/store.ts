import {configureStore} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from "redux-persist";
import authReducer from '../redux/slice/authSlice/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: "auth",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

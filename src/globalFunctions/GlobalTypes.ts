import { ToastType } from "react-native-toast-message";

export interface registertype {
  isLoading: boolean;
  error: string | null;
  success: boolean;
  user: {
    res: {
      _id: string;
      username: string;
      email: string;
    };
    token: string;
  };
}
export interface UserLogin {
  password: string;
  email: string;
}

export interface LoginUserResponse {
  status: number;
  message: string;
  res: {
    _id: string;
    username: string;
    email: string;
  };
  token: string;
}

export interface RegisterFormType {
  username: string;
  email: string;
  password: string;
}
export interface RegisterUserResponse {
  status: number;
  message: string;
}
export interface toastFunction {
  message: string;
  type: ToastType;
}
export interface ErrorTypes {
  success: number;
  invalidRequest: number;
  serverError: number;
  notFound: number;
  accessDenied: number;
}

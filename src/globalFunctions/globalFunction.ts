import Toast from 'react-native-toast-message';
import {ErrorTypes, toastFunction} from './GlobalTypes';

export const showToast = ({message, type}: toastFunction) => {
  return Toast.show({type: type, text1: message});
};

export const validateEmail = (regExp: RegExp, email: string) => {
  return regExp.test(email);
};

export const errorStatus: ErrorTypes = {
  success: 200,
  invalidRequest: 400,
  serverError: 500,
  notFound: 404,
  accessDenied: 403,
};

export type ToastType = 'success' | 'error' | 'delete';

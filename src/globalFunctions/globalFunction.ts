import Toast from 'react-native-toast-message';
import {toastFunction} from './GlobalTypes';

export const showToast = ({message, type}: toastFunction) => {
  return Toast.show({type: type, text1: message});
};

export const validateEmail = (regExp: RegExp, email: string) => {
  return regExp.test(email);
};

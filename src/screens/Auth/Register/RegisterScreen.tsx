import React, {useEffect} from 'react';
import {ScrollView, View, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import Container from '../../../components/Layouts/Container';
import WelcomeTitle from '../../../components/molecules/WelcomeTitle/WelcomeTitle';
import {Colors} from '../../../theme';
import InputField from '../../../components/atoms/InputField/InputField';
import Label from '../../../components/atoms/Label/Label';
import ButtonComp from '../../../components/atoms/Button/ButtonComp';
import SocialAuth from '../../../components/molecules/SocialAuth/SocialAuth';
import {useNavigation} from '@react-navigation/native';
import {APP_ROUTES} from '../../../navigation/routes';
import {styles} from './Styles/RegisterScreenStyles';
import {registerFormType} from '../../../globalFunctions/GlobalTypes';
import {emailRegex} from '../../../globalFunctions/globalData';
import {
  showToast,
  validateEmail,
} from '../../../globalFunctions/globalFunction';
import axios from 'axios';
import {registerUsers} from '../../../redux/slice/authSlice/authSlice';
import {useAppDispatch, useAppSelector} from '../../../hooks';

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const isRegistered = useAppSelector(state => state.userRegister.success);
  const isLoading = useAppSelector(state => state.userRegister.isLoading);

  const inputRef2 = React.useRef<TextInput>(null);
  const inputRef3 = React.useRef<TextInput>(null);
  const inputRef4 = React.useRef<TextInput>(null);
  const inputRef5 = React.useRef<TextInput>(null);

  const [formData, setFormData] = React.useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    work_experience: '',
  });

  const [formError, setFormError] = React.useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    work_experience: '',
  });

  const handleText = (type: string, text: string) => {
    setFormData(prevData => ({
      ...prevData,
      [type]: text,
    }));
  };

  const registerUser = async (formData: registerFormType) => {
    let isError = false;
    const isValidEmail = validateEmail(emailRegex, formData.email);
    const fieldError = {
      username: '',
      email: '',
      password: '',
      confirm_password: '',
      work_experience: '',
    };

    if (!formData.username.trim()) {
      fieldError.username = 'Please enter a username';
      isError = true;
    }
    if (!formData.email || !isValidEmail) {
      fieldError.email = 'Please enter a email address';
      isError = true;
    }
    if (!formData.password) {
      fieldError.password = 'Please enter a valid Password';
      isError = true;
    }
    if (formData.password !== formData.confirm_password) {
      fieldError.confirm_password = 'Passwords do not match';
      isError = true;
    }
    if (Number(formData.work_experience) <= 0) {
      fieldError.work_experience = 'Work Experience is required';
      isError = true;
    }
    setFormError(fieldError);
    if (!isError) {
      const registerFormData: FormData = new FormData();
      registerFormData.append('username', formData.username);
      registerFormData.append('email', formData.email);
      registerFormData.append('password', formData.password);
      registerFormData.append('work_experience', formData.work_experience);

      await dispatch(registerUsers(registerFormData));
    }
  };

  const login = (navigate: string, navigation: any) => {
    navigation.navigate(navigate);
  };

  return (
    <Container>
      <WelcomeTitle
        title="Create Account"
        title2="Create an account so you can explore all the existing jobs"
        titleStyle={styles.titleStyle}
        title2Style={styles.title2Style}
        titleContainer={styles.welcomeContainer}
      />
      <>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.form}>
          <InputField
            getText={e => handleText('username', e)}
            placeholder="Enter your username"
            placeholderTextColor={Colors.light}
            keyboardType={'default'}
            returnKeyType="next"
            onSubmitEditing={() => inputRef2?.current?.focus()}
            value={formData.username}
            errorMessage={formError.username}
          />
          <InputField
            getText={e => handleText('email', e)}
            placeholder="Email"
            placeholderTextColor={Colors.light}
            keyboardType={'email-address'}
            returnKeyType="next"
            onSubmitEditing={() => inputRef3?.current?.focus()}
            ref={inputRef2}
            value={formData.email}
            errorMessage={formError.email}
          />
          <InputField
            getText={e => handleText('password', e)}
            placeholder="Password"
            placeholderTextColor={Colors.light}
            keyboardType={'default'}
            returnKeyType="next"
            onSubmitEditing={() => inputRef4?.current?.focus()}
            ref={inputRef3}
            value={formData.password}
            errorMessage={formError.password}
          />
          <InputField
            getText={e => handleText('confirm_password', e)}
            placeholder="Confirm Password"
            placeholderTextColor={Colors.light}
            keyboardType={'default'}
            returnKeyType="next"
            onSubmitEditing={() => inputRef5?.current?.focus()}
            ref={inputRef4}
            value={formData.confirm_password}
            errorMessage={formError.confirm_password}
          />
          <InputField
            getText={e => handleText('work_experience', e)}
            placeholder="Enter your Work Experience"
            placeholderTextColor={Colors.light}
            keyboardType={'numeric'}
            ref={inputRef5}
            returnKeyType="done"
            value={formData.work_experience}
            errorMessage={formError.work_experience.toString()}
          />
          <SocialAuth />
          <Label
            onPress={() => login(APP_ROUTES.STACK.LOGIN, navigation)}
            title="Already have an account"
            labelStyle={styles.createAccountStyle}
          />
        </ScrollView>
        <ButtonComp
          title="Sign Up"
          onPress={() => registerUser(formData)}
          backgroundColor={Colors.primary}
          disabled={isLoading}
        />
      </>
    </Container>
  );
};
export default RegisterScreen;

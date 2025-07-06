import React, {useEffect} from 'react';
import {ScrollView, TextInput, View} from 'react-native';
import {Colors} from '../../../theme';
import {useNavigation} from '@react-navigation/native';
import {APP_ROUTES} from '../../../navigation/routes';
import {styles} from './styles';
import {registerFormType} from '../../../globalFunctions/GlobalTypes';
import {emailRegex} from '../../../globalFunctions/globalData';
import {
  showToast,
  validateEmail,
} from '../../../globalFunctions/globalFunction';
import {registerUsers} from '../../../redux/slice/authSlice/authSlice';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {verticalScale} from '../../../../Metrics';
import {
  ButtonComp,
  Container,
  InputField,
  Label,
  SocialAuth,
  WelcomeTitle,
} from '../../../components';

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const isRegistered = useAppSelector(state => state.userRegister.success);
  const isLoading = useAppSelector(state => state.userRegister.isLoading);
  const registerError = useAppSelector(state => state.userRegister.error);

  const inputRef2 = React.useRef<TextInput>(null);
  const inputRef3 = React.useRef<TextInput>(null);
  const inputRef4 = React.useRef<TextInput>(null);

  useEffect(() => {
    // dispatch(resetToast());
    if (isRegistered) {
      showToast({type: 'success', message: 'You are successfully registered'});
    } else if (registerError) {
      showToast({
        type: 'error',
        message: registerError || 'An unknown error occurred',
      });
    }
  }, [isRegistered, registerError, dispatch]);

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
        <ButtonComp
          title="Sign Up"
          onPress={() => registerUser(formData)}
          backgroundColor={isLoading ? Colors.lightGray : Colors.primary}
          disabled={isLoading}
          buttonStyle={{marginTop: verticalScale(53)}}
        />
        <View
          style={{
            paddingVertical: verticalScale(10),
          }}>
          <Label
            onPress={() => login(APP_ROUTES.STACK.LOGIN, navigation)}
            title="Already have an account"
            labelStyle={styles.createAccountStyle}
          />
        </View>
        <SocialAuth />
      </ScrollView>
    </Container>
  );
};
export default RegisterScreen;

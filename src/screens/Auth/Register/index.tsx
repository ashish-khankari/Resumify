import React from 'react';
import {ScrollView, TextInput, View} from 'react-native';

import {Controller, useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import {verticalScale} from '../../../../Metrics';
import {APP_ROUTES} from '../../../navigation/routes';
import {useAppDispatch, useAppSelector} from '../../../hooks/useRedux';
import {emailRegex} from '../../../globalFunctions/globalData';
import {RegisterFormType} from '../../../globalFunctions/GlobalTypes';
import {registerUsers} from '../../../redux/slice/authSlice/authSlice';
import {errorStatus, showToast} from '../../../globalFunctions/globalFunction';
import {
  Label,
  Container,
  ButtonComp,
  InputField,
  SocialAuth,
  WelcomeTitle,
} from '../../../components';
import {colors} from '../../../theme';

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.isLoading);

  const inputRef2 = React.useRef<TextInput>(null);
  const inputRef3 = React.useRef<TextInput>(null);

  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<RegisterFormType>({mode: 'all'});

  const registerUser = async (data: RegisterFormType) => {
    const registerFormData: RegisterFormType = {
      username: data?.username,
      email: data?.email,
      password: data?.password,
    };
    try {
      const res = await dispatch(registerUsers(registerFormData)).unwrap();
      if (res?.status === errorStatus?.success) {
        reset();
        showToast({
          message: res?.message,
          type: 'success',
        });
        navigation.navigate(APP_ROUTES?.STACK?.HOME);
      }
    } catch (error: any) {
      reset();
      showToast({
        message: error || 'Registration failed.',
        type: 'error',
      });
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
        <Controller
          control={control}
          name="username"
          render={({field: {onChange, onBlur, value}}) => (
            <InputField
              getText={onChange}
              placeholder="Enter your username"
              placeholderTextColor={colors.light}
              keyboardType={'default'}
              returnKeyType="next"
              onSubmitEditing={() => inputRef2?.current?.focus()}
              value={value}
              errorMessage={errors.username?.message}
              onBlur={onBlur}
            />
          )}
          rules={{required: 'Please enter a username'}}
        />
        <Controller
          control={control}
          name="email"
          render={({field: {onChange, onBlur, value}}) => (
            <InputField
              getText={onChange}
              placeholder="Enter your email"
              placeholderTextColor={colors.light}
              keyboardType={'default'}
              returnKeyType="next"
              onSubmitEditing={() => inputRef3?.current?.focus()}
              ref={inputRef2}
              value={value}
              errorMessage={errors.email?.message}
              onBlur={onBlur}
            />
          )}
          rules={{
            required: 'Please enter a email',
            pattern: {
              value: emailRegex,
              message: 'Please enter a valid email',
            },
          }}
        />
        <Controller
          control={control}
          name="password"
          render={({field: {onChange, onBlur, value}}) => (
            <InputField
              getText={onChange}
              placeholder="Enter your passeord"
              placeholderTextColor={colors.light}
              keyboardType={'default'}
              returnKeyType="next"
              onSubmitEditing={handleSubmit(registerUser)}
              ref={inputRef3}
              value={value}
              errorMessage={errors.password?.message}
              onBlur={onBlur}
            />
          )}
          rules={{
            required: 'Please enter a password',
            minLength: {
              value: 6,
              message: 'Password must be alteast 6 characters',
            },
          }}
        />
        <ButtonComp
          title="Sign Up"
          onPress={handleSubmit(registerUser)}
          backgroundColor={isLoading ? colors.lightGray : colors.primary}
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

import React from 'react';
import {ScrollView, TextInput, View} from 'react-native';
import {Colors} from '../../../theme';
import {APP_ROUTES} from '../../../navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {verticalScale} from '../../../../Metrics';
import {
  Label,
  Container,
  ButtonComp,
  InputField,
  SocialAuth,
  WelcomeTitle,
} from '../../../components';
import {Controller, useForm} from 'react-hook-form';
import {UserLogin} from '../../../globalFunctions/GlobalTypes';
import {emailRegex} from '../../../globalFunctions/globalData';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {loginUser} from '../../../redux/slice/authSlice/authSlice';
import {showToast} from '../../../globalFunctions/globalFunction';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();

  const inputRef2 = React.useRef<TextInput>(null);
  const toRegister = (navigate: string, navigation: any) => {
    navigation.navigate(navigate);
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
    reset
  } = useForm({
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: UserLogin) => {
    const loginData = {
      email: data.email,
      password: data.password,
    };
    try {
      const res = await dispatch(loginUser(loginData)).unwrap();
      if (res.status === 200) {
        navigation.navigate(APP_ROUTES.STACK.HOME);
        reset();
        showToast({
          message: res.message,
          type: 'success',
        });
      }
    } catch (error: any) {
      reset();
      showToast({
        message: error,
        type: 'error',
      });
    }
  };

  return (
    <Container>
      <WelcomeTitle
        title="Login here"
        title2="Welcome back you’ve been missed!"
        titleStyle={styles.titleStyle}
        title2Style={styles.title2Style}
        titleContainer={styles.welcomeContainer}
      />
      <>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.form}>
          <View style={styles.formContainer}>
            <Controller
              control={control}
              rules={{
                required: 'Please enter a email',
                pattern: {
                  value: emailRegex,
                  message: 'Please enter a valid email address',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <InputField
                  getText={onChange}
                  placeholder="Email"
                  placeholderTextColor={Colors.light}
                  keyboardType={'email-address'}
                  returnKeyType="next"
                  onSubmitEditing={() => inputRef2.current?.focus()}
                  onBlur={onBlur}
                  value={value}
                  errorMessage={errors.email?.message}
                />
              )}
              name="email"
            />
            <Controller
              control={control}
              rules={{
                required: 'Please enter a password',
                minLength: {
                  value: 6,
                  message: 'Password must be alteast 6 characters',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <InputField
                  getText={onChange}
                  placeholder="Password"
                  placeholderTextColor={Colors.light}
                  keyboardType={'default'}
                  returnKeyType="done"
                  onSubmitEditing={() => inputRef2.current?.focus()}
                  ref={inputRef2}
                  value={value}
                  onBlur={onBlur}
                  errorMessage={errors.password?.message}
                />
              )}
              name="password"
            />
          </View>
          <Label title="Forgot Your Password" labelStyle={styles.labelStyle} />

          <ButtonComp
            title="Sign in"
            onPress={handleSubmit(onSubmit)}
            backgroundColor={Colors.primary}
            buttonStyle={{marginTop: verticalScale(30)}}
          />
          <Label
            title="Create new account"
            labelStyle={styles.createAccountStyle}
            onPress={() => toRegister(APP_ROUTES.STACK.REGISTER, navigation)}
          />
        </ScrollView>
        <SocialAuth />
      </>
    </Container>
  );
};

export default LoginScreen;

import React from 'react';
import {ScrollView, TextInput, View} from 'react-native';
import Container from '../../../components/Layouts/Container';
import WelcomeTitle from '../../../components/molecules/WelcomeTitle/WelcomeTitle';
import {Colors} from '../../../theme';
import InputField from '../../../components/atoms/InputField/InputField';
import Label from '../../../components/atoms/Label/Label';
import ButtonComp from '../../../components/atoms/Button/ButtonComp';
import SocialAuth from '../../../components/molecules/SocialAuth/SocialAuth';
import {APP_ROUTES} from '../../../navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {styles} from './Styles/LoginScreenStyles';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const inputRef2 = React.useRef<TextInput>(null);
  const handleText = (text: string) => {
    console.log("text");
  };

  const logIn = (navigate: string, navigation: any) => {
    navigation.navigate(navigate);
  };

  const toRegister = (navigate: string, navigation: any) => {
    navigation.navigate(navigate);
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
            <InputField
              getText={e => handleText(e)}
              placeholder="Email"
              placeholderTextColor={Colors.light}
              keyboardType={'email-address'}
              returnKeyType='next'
              onSubmitEditing={() => inputRef2.current?.focus()}
            />
            <InputField
              getText={e => handleText(e)}
              placeholder="Password"
              placeholderTextColor={Colors.light}
              keyboardType={'password'}
              returnKeyType='done'
              onSubmitEditing={() => inputRef2.current?.focus()}
              ref={inputRef2}
            />
          </View>
          <Label title="Forgot Your Password" labelStyle={styles.labelStyle} />
          <View style={styles.socialContainer} />
          <SocialAuth />

          <Label
            title="Create new account"
            labelStyle={styles.createAccountStyle}
            onPress={() => toRegister(APP_ROUTES.STACK.REGISTER, navigation)}
          />
        </ScrollView>
        <ButtonComp
          title="Sign in"
          onPress={() => logIn(APP_ROUTES.STACK.HOME, navigation)}
          backgroundColor={Colors.primary}
        />
      </>
    </Container>
  );
};

export default LoginScreen;

import React from 'react';
import {ScrollView, View} from 'react-native';
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
import {TextInput} from 'react-native';

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation();
  const inputRef2 = React.useRef<TextInput>(null);
  const inputRef3 = React.useRef<TextInput>(null);
  const inputRef4 = React.useRef<TextInput>(null);

  const handleText = (text: string) => {
    console.log(text);
  };

  const registerUser = () => {};

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
            getText={e => handleText(e)}
            placeholder="Email"
            placeholderTextColor={Colors.light}
            keyboardType={'email-address'}
            returnKeyType="next"
            onSubmitEditing={() => inputRef2?.current?.focus()}
          />
          <InputField
            getText={e => handleText(e)}
            placeholder="Password"
            placeholderTextColor={Colors.light}
            keyboardType={'password'}
            returnKeyType="next"
            onSubmitEditing={() => inputRef3?.current?.focus()}
            ref={inputRef2}
          />
          <InputField
            getText={e => handleText(e)}
            placeholder="Confirm Password"
            placeholderTextColor={Colors.light}
            keyboardType={'password'}
            returnKeyType="next"
            onSubmitEditing={() => inputRef4?.current?.focus()}
            ref={inputRef3}
          />
          <InputField
            getText={e => handleText(e)}
            placeholder="Enter your age"
            placeholderTextColor={Colors.light}
            keyboardType={'numeric'}
            ref={inputRef4}
            returnKeyType="done"
          />
          <View style={styles.socialContainer} />
          <SocialAuth />
          <Label
            onPress={() => login(APP_ROUTES.STACK.LOGIN, navigation)}
            title="Already have an account"
            labelStyle={styles.createAccountStyle}
          />
        </ScrollView>
        <ButtonComp
          title="Sign Up"
          onPress={registerUser}
          backgroundColor={Colors.primary}
        />
      </>
    </Container>
  );
};
export default RegisterScreen;

import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {colors, fontFamily, images, size} from '../../theme';
import WelcomeTitle from '../../components/WelcomeTitle';
import ButtonComp from '../../components/ButtonComp';
import {moderateScale, verticalScale} from '../../../Metrics';
import {useNavigation} from '@react-navigation/native';
import {APP_ROUTES} from '../../navigation/routes';
import Container from '../../components/Container';

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation();

  const Login = (navigate: string, navigation: any) => {
    navigation.navigate(navigate);
  };

  const Register = (navigate: string, navigation: any) => {
    navigation.navigate(navigate);
  };

  return (
    <Container>
      <View style={styles.welcomeContainer}>
        <View style={styles.imageContainer}>
          <Image source={images.WorkFromHome} style={styles.workImage} />
        </View>
        <WelcomeTitle
          title="Discover Your Dream Job Here"
          title2="Explore all the existing job roles based on your interest and study major"
          titleStyle={styles.titleStyle}
          title2Style={styles.title2Style}
        />
      </View>
      <View style={styles.buttonContianer}>
        <ButtonComp
          title={'Login'}
          onPress={() => Login(APP_ROUTES.STACK.LOGIN, navigation)}
          buttonStyle={styles.loginButton}
          backgroundColor={colors.primary}
          textStyle={styles.loginText}
        />
        <ButtonComp
          title={'Register'}
          onPress={() => Register(APP_ROUTES.STACK.REGISTER, navigation)}
          buttonStyle={styles.registerButton}
          textStyle={styles.textStyle}
          backgroundColor={colors.white}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(30),
  },
  workImage: {
    height: verticalScale(422),
    width: '100%',
    resizeMode: 'contain',
  },
  titleStyle: {
    fontSize: size.semiBold,
    color: colors.primary,
    fontFamily: fontFamily.regular,
    textAlign: 'center',
    marginTop: verticalScale(47),
  },
  title2Style: {
    fontSize: size.semiBold_small,
    color: colors.black,
    fontFamily: fontFamily.regular,
    textAlign: 'center',
    marginTop: verticalScale(23),
  },
  loginButton: {
    flex: 1,
    borderRadius: moderateScale(8),
    height: verticalScale(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButton: {
    flex: 1,
    borderRadius: moderateScale(8),
    height: verticalScale(60),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  textStyle: {
    fontSize: size.medium,
    fontFamily: fontFamily.semiBold,
    color: colors.black,
  },
  buttonContianer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(30),
    paddingBottom: verticalScale(26),
  },
  welcomeContainer: {
    flex: 1,
  },
  loginText: {
    fontSize: size.medium,
    fontFamily: fontFamily.semiBold,
    color: colors.white,
  },
});

export default WelcomeScreen;

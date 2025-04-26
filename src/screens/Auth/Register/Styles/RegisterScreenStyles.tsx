import {StyleSheet} from 'react-native';
import { moderateScale, verticalScale } from '../../../../../Metrics';
import { Colors, FontFamily, size } from '../../../../theme';


export const styles = StyleSheet.create({
  form: {
    gap: verticalScale(20),
    paddingTop: verticalScale(40),
  },
  titleStyle: {
    fontSize: size.bold,
    color: Colors.primary,
    fontFamily: FontFamily.regular,
    textAlign: 'center',
    fontWeight: '700',
  },
  title2Style: {
    fontSize: size.semiBold_small,
    color: Colors.black,
    fontFamily: FontFamily.medium,
    textAlign: 'center',
  },
  welcomeContainer: {
    gap: moderateScale(20),
    marginTop: verticalScale(30),
  },
  formContainer: {
    gap: moderateScale(20),
  },
  fieldStyle: {
    borderWidth: 0.5,
    borderColor: Colors.primary,
  },
  labelStyle: {
    fontSize: size.semiBold_small,
    fontFamily: FontFamily.semiBold,
    color: Colors.primary,
    textAlign: 'right',
  },
  createAccountStyle: {
    textAlign: 'center',
    color: Colors.black,
    fontSize: size.medium,
  },
  socialContainer: {
    marginTop: verticalScale(80),
  },
});

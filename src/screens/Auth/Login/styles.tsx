import {StyleSheet} from 'react-native';

import {Colors, FontFamily, size} from '../../../theme';
import {moderateScale, verticalScale} from '../../../../Metrics';

export const styles = StyleSheet.create({
  form: {
    paddingTop: verticalScale(74),
  },
  titleStyle: {
    fontSize: size.bold,
    color: Colors.primary,
    fontFamily: FontFamily.regular,
    textAlign: 'center',
    fontWeight: '700',
  },
  title2Style: {
    fontSize: size.semiBold_x,
    color: Colors.black,
    fontFamily: FontFamily.semiBold,
    textAlign: 'center',
  },
  welcomeContainer: {
    gap: moderateScale(20),
    marginTop: verticalScale(26),
  },
  formContainer: {
    gap: moderateScale(26),
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
    marginTop: verticalScale(30),
  },
  createAccountStyle: {
    textAlign: 'center',
    color: Colors.black,
    fontSize: size.medium,
    marginTop: verticalScale(40),
  },
});

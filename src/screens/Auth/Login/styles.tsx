import {StyleSheet} from 'react-native';

import { colors, fontFamily, size} from '../../../theme';
import {moderateScale, verticalScale} from '../../../../Metrics';

export const styles = StyleSheet.create({
  form: {
    paddingTop: verticalScale(74),
  },
  titleStyle: {
    fontSize: size.bold,
    color: colors.primary,
    fontFamily: fontFamily.regular,
    textAlign: 'center',
    fontWeight: '700',
  },
  title2Style: {
    fontSize: size.semiBold_x,
    color: colors.black,
    fontFamily: fontFamily.semiBold,
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
    borderColor: colors.primary,
  },
  labelStyle: {
    fontSize: size.semiBold_small,
    fontFamily: fontFamily.semiBold,
    color: colors.primary,
    textAlign: 'right',
    marginTop: verticalScale(30),
  },
  createAccountStyle: {
    textAlign: 'center',
    color: colors.black,
    fontSize: size.medium,
    marginTop: verticalScale(40),
  },
});

import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from '../../../../Metrics';
import {colors, fontFamily, size} from '../../../theme';

export const styles = StyleSheet.create({
  form: {
    gap: moderateScale(26),
    paddingTop: verticalScale(53),
  },
  titleStyle: {
    fontSize: size.bold,
    color: colors.primary,
    fontFamily: fontFamily.regular,
    textAlign: 'center',
    fontWeight: '700',
  },
  title2Style: {
    fontSize: size.semiBold_small,
    color: colors.black,
    fontFamily: fontFamily.medium,
    textAlign: 'center',
    paddingTop: verticalScale(6),
  },
  welcomeContainer: {
    paddingTop: verticalScale(77),
  },
  formContainer: {
    gap: moderateScale(20),
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
  },
  createAccountStyle: {
    textAlign: 'center',
    color: colors.black,
    fontSize: size.medium,
    // marginTop: verticalScale(30)
  },
});

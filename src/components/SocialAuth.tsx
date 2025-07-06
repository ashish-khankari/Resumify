import React from 'react';
import {StyleSheet, View} from 'react-native';
import Label from './Label';
import {Colors, FontFamily, Images, size} from '../theme';
import SocialIcon from './SocialIcon';
import {verticalScale} from '../../Metrics';

const SocialAuth: React.FC = () => {
  return (
    <View style={styles.socialAuthContainer}>
      <Label title="Or continue with" labelStyle={styles.continueWithText} />
      <SocialIcon
        socialIcon={Images.Apple}
        socialIcon1={Images.Facebook}
        socialIcon2={Images.Google}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  continueWithText: {
    color: Colors.primary,
    fontFamily: FontFamily.semiBold,
    fontSize: size.semiBold_small,
  },
  socialAuthContainer: {
    alignItems: 'center',
    gap: verticalScale(20),
    marginTop: verticalScale(65),
  },
});

export default SocialAuth;

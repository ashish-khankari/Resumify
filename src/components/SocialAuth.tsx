import React from 'react';
import {StyleSheet, View} from 'react-native';
import Label from './Label';
import {colors, fontFamily, images, size} from '../theme';
import SocialIcon from './SocialIcon';
import {verticalScale} from '../../Metrics';

const SocialAuth: React.FC = () => {
  return (
    <View style={styles.socialAuthContainer}>
      <Label title="Or continue with" labelStyle={styles.continueWithText} />
      <SocialIcon
        socialIcon={images.Apple}
        socialIcon1={images.Facebook}
        socialIcon2={images.Google}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  continueWithText: {
    color: colors.primary,
    fontFamily: fontFamily.semiBold,
    fontSize: size.semiBold_small,
  },
  socialAuthContainer: {
    alignItems: 'center',
    gap: verticalScale(20),
    marginTop: verticalScale(65),
  },
});

export default SocialAuth;

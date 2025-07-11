import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import {Colors} from '../theme';
import {horizontalScale, moderateScale, verticalScale} from '../../Metrics';

interface SocialIconProps {
  socialIcon: ImageSourcePropType;
  socialIcon1: ImageSourcePropType;
  socialIcon2: ImageSourcePropType;
}
const SocialIcon: React.FC<SocialIconProps> = ({
  socialIcon,
  socialIcon1,
  socialIcon2,
}) => {
  return (
    <View style={styles.socialIconMainContainer}>
      <View style={styles.socialIconContainer}>
        <Image source={socialIcon} style={styles.socialIcon} />
      </View>
      <View style={styles.socialIconContainer}>
        <Image source={socialIcon1} style={styles.socialIcon} />
      </View>
      <View style={styles.socialIconContainer}>
        <Image source={socialIcon2} style={styles.socialIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  socialIconMainContainer: {
    flexDirection: 'row',
    gap: moderateScale(20),
  },
  socialIconContainer: {
    height: verticalScale(40),
    width: horizontalScale(60),
    backgroundColor: Colors.socialIconColor,
    borderRadius: moderateScale(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    height: verticalScale(24),
    width: horizontalScale(24),
  },
});

export default SocialIcon;

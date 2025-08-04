import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {colors, fontFamily} from '../theme';
import {horizontalScale, moderateScale, verticalScale} from '../../Metrics';

interface ImagIconRowProps {
  icon?: ImageSourcePropType;
  iconColor?: string;
  iconBackgroundColor?: string;
  text?: string;
}

const ImagIconRow: React.FC<ImagIconRowProps> = ({
  icon,
  iconBackgroundColor,
  iconColor,
  text,
}) => {
  return (
    <View style={styles.iconTextRow}>
      <View
        style={[styles.imageContainer, {backgroundColor: iconBackgroundColor}]}>
        <Image source={icon} style={styles.icon} tintColor={iconColor} />
      </View>
      <Text style={styles.iconText}>{text}</Text>
    </View>
  );
};

export default ImagIconRow;

const styles = StyleSheet.create({
  iconTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(2),
    gap: moderateScale(10),
  },
  imageContainer: {
    width: horizontalScale(30),
    height: verticalScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
  },
  icon: {
    width: horizontalScale(20),
    height: verticalScale(20),
  },
  iconText: {
    fontSize: moderateScale(13),
    color: colors.light,
    fontFamily: fontFamily.regular,
  },
});

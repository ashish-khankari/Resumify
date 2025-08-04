import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {colors, fontFamily, size} from '../theme';
import {moderateScale, verticalScale} from '../../Metrics';

interface ButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  backgroundColor?: string;
  disabled?: boolean;
}
const ButtonComp: React.FC<ButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
  backgroundColor,
  disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.buttonContainer,
        buttonStyle,
        {backgroundColor: backgroundColor},
      ]}>
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: moderateScale(10),
    // height: verticalScale(60),
    paddingVertical: verticalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: size.semiBold_x,
    fontFamily: fontFamily.semiBold,
    color: colors.white,
  },
});

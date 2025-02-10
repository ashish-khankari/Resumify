import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, FontFamily, size } from '../../../theme'
import { moderateScale, verticalScale } from '../../../../Metrics'

interface ButtonProps {
  title: string,
  onPress: () => void,
  buttonStyle?: any,
  textStyle?: any,
  backgroundColor?: string
}
const ButtonComp: React.FC<ButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
  backgroundColor,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, buttonStyle, {backgroundColor: backgroundColor}]}>
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComp

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: moderateScale(8),
    height:verticalScale(60),
    width: '100%',
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: size.semiBold_x,
    fontFamily: FontFamily.semiBold,
    color: Colors.white
  },
});


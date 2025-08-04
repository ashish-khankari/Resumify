import React, {forwardRef} from 'react';
import {
  StyleSheet,
  TextInput,
  ReturnKeyTypeOptions,
  KeyboardType,
  StyleProp,
  TextStyle,
  View,
} from 'react-native';
import {moderateScale, verticalScale} from '../../Metrics';
import { colors, fontFamily } from '../theme';
import Label from './Label';

interface InputFieldProps {
  value: string;
  errorMessage?: string | undefined;
  placeholder: string;
  placeholderTextColor: string;
  style?: StyleProp<TextStyle>;
  keyboardType?: KeyboardType;
  onSubmitEditing?: () => void;
  returnKeyType?: ReturnKeyTypeOptions;
  getText: (text: string) => void;
  onBlur: () => void;
}

const InputField = forwardRef<TextInput, InputFieldProps>(
  (
    {
      placeholder,
      getText,
      placeholderTextColor,
      style,
      keyboardType,
      returnKeyType,
      onSubmitEditing,
      value,
      errorMessage,
      onBlur,
    },
    ref
  ) => {
    return (
      <View style={styles.container}>
        <TextInput
          ref={ref}
          placeholder={placeholder}
          onChangeText={getText}
          placeholderTextColor={placeholderTextColor}
          style={[styles.inputContainer, style]}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          value={value?.toString()}
          onBlur={onBlur}
        />
        {errorMessage && (
          <Label title={errorMessage} labelStyle={styles.errorLabelStyle} />
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    gap: moderateScale(4),
  },
  inputContainer: {
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    color: colors.black,
    height: verticalScale(64),
    backgroundColor: colors.inputPrimary,
  },
  errorLabelStyle: {
    color: colors.errorMessage,
    fontSize: moderateScale(14),
    fontFamily: fontFamily.regular,
  },
});

export default InputField;

import React, {forwardRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  ReturnKeyTypeOptions,
  KeyboardType,
  StyleProp,
  TextStyle,
} from 'react-native';
import {moderateScale, verticalScale} from '../../Metrics';
import {Colors} from '../theme';
import Label from './Label';

interface InputFieldProps {
  value: string;
  errorMessage?: string;
  placeholder: string;
  placeholderTextColor: string;
  style?: StyleProp<TextStyle>;
  keyboardType?: KeyboardType;
  onSubmitEditing?: () => void;
  getText: (text: string) => void;
  returnKeyType?: ReturnKeyTypeOptions;
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
    },
    ref
  ) => {
    return (
      <>
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
        />
        {errorMessage && (
          <Label title={errorMessage} labelStyle={styles.errorLabelStyle} />
        )}
      </>
    );
  }
);

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: Colors.lightGray,
    borderWidth: 1,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    color: Colors.black,
    height: verticalScale(64),
    backgroundColor: Colors.inputPrimary,
  },
  errorLabelStyle: {
    color: Colors.errorMessage,
    fontSize: moderateScale(14),
    fontWeight: '400',
    top: -verticalScale(10),
  },
});

export default InputField;

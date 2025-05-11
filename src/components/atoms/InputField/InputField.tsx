import React, {forwardRef} from 'react';
import {StyleSheet, TextInput, View, ReturnKeyTypeOptions, KeyboardType} from 'react-native';
import {moderateScale, verticalScale} from '../../../../Metrics';
import {Colors} from '../../../theme';
import Label from '../Label/Label';

interface InputFieldProps {
  placeholder: string;
  getText: (text: string) => void;
  placeholderTextColor: string;
  style?: any;
  keyboardType?: KeyboardType;
  returnKeyType?: ReturnKeyTypeOptions;
  onSubmitEditing?: () => void;
  value: string,
  errorMessage?: string
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
    ref,
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
        {
          errorMessage && <Label title={errorMessage} labelStyle={styles.errorLabelStyle} />
        }
      </>
    );
  },
);

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: Colors.lightGray,
    borderWidth: 1,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    color: Colors.black,
    height: verticalScale(60),
    backgroundColor: Colors.inputPrimary,
  },
  errorLabelStyle: {
    color: Colors.errorMessage,
    fontSize: moderateScale(14),
    fontWeight: '400',
    top: -verticalScale(10)
  }
});

export default InputField;

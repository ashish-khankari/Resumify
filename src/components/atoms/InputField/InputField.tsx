import React, {forwardRef} from 'react';
import {StyleSheet, TextInput, View, ReturnKeyTypeOptions} from 'react-native';
import {moderateScale, verticalScale} from '../../../../Metrics';
import {Colors} from '../../../theme';

interface InputFieldProps {
  placeholder: string;
  getText: (text: string) => void;
  placeholderTextColor: string;
  style?: any;
  keyboardType?: any;
  returnKeyType?: ReturnKeyTypeOptions;
  onSubmitEditing?: () => void;
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
    },
    ref,
  ) => {
    return (
      <View>
        <TextInput
          ref={ref}
          placeholder={placeholder}
          onChangeText={getText}
          placeholderTextColor={placeholderTextColor}
          style={[styles.inputContainer, style]}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
        />
      </View>
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
});

export default InputField;

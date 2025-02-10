import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { horizontalScale, moderateScale, verticalScale } from "../../../../Metrics";
import { Colors } from "../../../theme";

interface InputFieldProps {
    placeholder: string,
    getText: (text: string) => void,
    placeholderTextColor: string,
    style?: any,
    keyboardType?: any,
}
const InputField: React.FC<InputFieldProps> = ({
    placeholder,
    getText,
    placeholderTextColor,
    style,
    keyboardType,
}) => {
    return (
        <View>
            <TextInput
                placeholder={placeholder}
                onChangeText={(e) => getText(e)}
                placeholderTextColor={placeholderTextColor}
                style={[styles.inputContainer, style]}
                keyboardType={keyboardType}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        borderColor: Colors.lightGray,
        borderWidth: 1,
        borderRadius: moderateScale(10),
        paddingHorizontal: moderateScale(10),
        color: Colors.black,
        height: verticalScale(60),
        backgroundColor: Colors.inputPrimary    
    }
})

export default InputField;
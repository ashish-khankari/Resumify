import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const InputField = ({
    placeholder,
    getText
}) => {
    return (
        <View>
            <TextInput placeholder={placeholder} onChangeText={e => getText(e)} placeholderTextColor={'black'} style={styles.inputContainer} />
        </View>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 20
    }
})

export default InputField;
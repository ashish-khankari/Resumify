import React, { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../../theme";


interface LabelComp {
    title: string,
    labelStyle?: any,
    onPress?: () => void,
}
const Label: React.FC <LabelComp> = ({title, labelStyle, onPress}) => {
    return(
        <Pressable onPress={onPress} /*style={styles.textStyle}*/>
            <Text style={[labelStyle]}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        color: Colors.black
    }
})

export default Label;

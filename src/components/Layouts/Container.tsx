import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../theme";
import { horizontalScale, verticalScale } from "../../../Metrics";
// import { Component } from "./Styles";

interface ContainerProps {
    children: ReactNode
}
const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: horizontalScale(20),
        paddingBottom: verticalScale(20)
    }
})

export default Container;

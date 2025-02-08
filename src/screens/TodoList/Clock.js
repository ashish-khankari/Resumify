import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Clock = () => {
    const [getTime, setTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        },1000);
    },[]);   
    
    return(
        <View style={styles.container}>
            <Text>{getTime.toLocaleTimeString()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor:"white"
    }
})

export default Clock;

import React from "react";
import { Text, View } from "react-native";
import { Colors } from "../../theme";

const HomeScreen: React.FC = () =>{
return(

    <View style={{flex: 1, backgroundColor: 'white'}}>
        <Text style={{color: Colors.black}}>
            HOMESCREEN
        </Text>
    </View>
)
}

export default HomeScreen;

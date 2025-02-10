import React, { useState } from "react";
import { View } from "react-native";
import Container from "../../components/Layouts/Container";
import WelcomeTitle from "../../components/molecules/WelcomeTitle/WelcomeTitle";
import { Colors } from "../../theme";
import InputField from "../../components/atoms/InputField/InputField";
import Label from "../../components/atoms/Label/Label";
import ButtonComp from "../../components/atoms/Button/ButtonComp";
import SocialAuth from "../../components/molecules/SocialAuth/SocialAuth";
import { useNavigation } from "@react-navigation/native";
import { APP_ROUTES } from "../../navigation/routes";
import { styles } from "./Styles/RegisterScreenStyles";

const RegisterScreen: React.FC = () => {

    const navigation = useNavigation();

    const handleText = (text: string) => {
        console.log(text);
    };

    const registerUser = () => {

    }

    const login = (navigate: string, navigation: any) => {
        navigation.navigate(navigate)
    }

    return (
        <Container>
            <View style={styles.loginContainer}>
                <WelcomeTitle
                    title="Create Account"
                    title2="Create an account so you can explore all the existing jobs"
                    titleStyle={styles.titleStyle}
                    title2Style={styles.title2Style}
                    titleContainer={styles.welcomeContainer}
                />
                <View style={styles.form}>
                    <View style={styles.formContainer}>
                        <InputField
                            getText={(e) => handleText(e)}
                            placeholder='Email'
                            placeholderTextColor={Colors.light}
                            keyboardType={'email-address'}
                        />
                        <InputField
                            getText={(e) => handleText(e)}
                            placeholder='Password'
                            placeholderTextColor={Colors.light}
                            keyboardType={'password'}
                        />
                        <InputField
                            getText={(e) => handleText(e)}
                            placeholder='Confirm Password'
                            placeholderTextColor={Colors.light}
                            keyboardType={'password'}
                        />
                    </View>

                    <ButtonComp
                        title="Sign Up"
                        onPress={registerUser}
                        backgroundColor={Colors.primary}
                    />

                    <Label
                        onPress={() => login(APP_ROUTES.STACK.LOGIN, navigation)}
                        title="Already have an account"
                        labelStyle={styles.createAccountStyle} />
                </View>
                <SocialAuth />
            </View>
        </Container>
    )
};
export default RegisterScreen;

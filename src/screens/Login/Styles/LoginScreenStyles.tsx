import { StyleSheet } from "react-native";
import { moderateScale, verticalScale } from "../../../../Metrics";
import { Colors, FontFamily, size } from "../../../theme";

export const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        gap: verticalScale(40)
    },
    titleStyle: {
        fontSize: size.bold,
        color: Colors.primary,
        fontFamily: FontFamily.regular,
        textAlign: 'center',
        fontWeight: '700'
    },
    title2Style: {
        fontSize: size.semiBold_x,
        color: Colors.black,
        fontFamily: FontFamily.semiBold,
        textAlign: 'center',
    },
    welcomeContainer: {
        gap: moderateScale(20),
        marginTop: verticalScale(30)
    },
    formContainer: {
        gap: moderateScale(20)
    },
    fieldStyle: {
        borderWidth: 0.5,
        borderColor: Colors.primary
    },
    labelStyle: {
        fontSize: size.semiBold_small,
        fontFamily: FontFamily.semiBold,
        color: Colors.primary,
        textAlign: "right"
    },
    createAccountStyle: {
        textAlign: 'center',
        color: Colors.black,
        fontSize: size.medium
    }
})
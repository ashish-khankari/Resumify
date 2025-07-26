import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {BaseToastProps} from 'react-native-toast-message';
import {verticalScale} from '../../Metrics';

interface CustomToastProps extends BaseToastProps {
  text1?: string;
  text2?: string;
}

const toastConfig = {
  error: ({text1, text2}: CustomToastProps) => (
    <View style={[styles.toastContainer, styles.errorBorder]}>
      {text1 && <Text style={styles.errorText1}>{text1}</Text>}
      {text2 && <Text style={styles.text2}>{text2}</Text>}
    </View>
  ),
  success: ({text1, text2}: CustomToastProps) => (
    <View style={[styles.toastContainer, styles.successBorder]}>
      {text1 && <Text style={styles.successText1}>{text1}</Text>}
      {text2 && <Text style={styles.text2}>{text2}</Text>}
    </View>
  ),
};

const styles = StyleSheet.create({
  toastContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: verticalScale(52),
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
    borderWidth: 1,
  },
  errorBorder: {
    backgroundColor: '#FEF3F2',
    borderColor: '#D92D20',
  },
  successBorder: {
    backgroundColor: '#ECFDF3',
    borderColor: '#12B76A',
  },
  errorText1: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
    color: '#D92D20',
  },
  successText1: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 8,
    color: '#027A48',
  },
  text2: {
    color: 'white',
  },
});

export default toastConfig;

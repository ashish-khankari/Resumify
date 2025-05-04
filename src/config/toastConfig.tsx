import React from 'react';
import {View, Text} from 'react-native';
import {BaseToastProps} from 'react-native-toast-message';
import {verticalScale} from '../../Metrics';

interface CustomToastProps extends BaseToastProps {
  text1?: string;
  text2?: string;
}

const toastConfig = {
  error: ({text1, text2}: CustomToastProps) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        height: verticalScale(52),
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 10,
        backgroundColor: '#FEF3F2',
        borderColor: '#D92D20',
        borderWidth: 1,
      }}>
      {text1 && (
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            marginLeft: 8,
            color: '#D92D20',
          }}>
          {text1}
        </Text>
      )}
      {text2 && <Text style={{color: 'white'}}>{text2}</Text>}
    </View>
  ),
  success: ({text1, text2}: CustomToastProps) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        height: verticalScale(52),
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 10,
        backgroundColor: '#ECFDF3',
        borderColor: '#12B76A',
        borderWidth: 1,
      }}>
      {text1 && (
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            marginLeft: 8,
            color: '#027A48',
          }}>
          {text1}
        </Text>
      )}
      {text2 && <Text style={{color: 'white'}}>{text2}</Text>}
    </View>
  ),
  delete: ({text1, text2}: CustomToastProps) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        height: verticalScale(52),
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 10,
        backgroundColor: '#FFFAEB',
        borderColor: '#F79009',
        borderWidth: 1,
      }}>
      {text1 && (
        <Text
          style={{
            color: '#B54708',
            fontSize: 14,
            fontWeight: '600',
            marginLeft: 8,
          }}>
          {text1}
        </Text>
      )}
      {text2 && <Text style={{color: 'white'}}>{text2}</Text>}
    </View>
  ),
};

export default toastConfig;

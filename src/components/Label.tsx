import React from 'react';
import {Pressable, StyleProp, Text, TextStyle} from 'react-native';

interface LabelComp {
  title: string;
  labelStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
}
const Label: React.FC<LabelComp> = ({title, labelStyle, onPress}) => {
  return (
    <Pressable onPress={onPress} /*style={styles.textStyle}*/>
      <Text allowFontScaling={false} style={labelStyle}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Label;

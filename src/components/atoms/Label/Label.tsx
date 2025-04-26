import React from 'react';
import {Pressable, Text} from 'react-native';

interface LabelComp {
  title: string;
  labelStyle?: any;
  onPress?: () => void;
}
const Label: React.FC<LabelComp> = ({title, labelStyle, onPress}) => {
  return (
    <Pressable onPress={onPress} /*style={styles.textStyle}*/>
      <Text style={[labelStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Label;

import React from 'react';
import {StyleProp, TextStyle, View} from 'react-native';
import Label from './Label';

interface WelcomeTitleProps {
  title: string;
  title2: string;
  titleStyle: StyleProp<TextStyle>;
  title2Style: StyleProp<TextStyle>;
  titleContainer?: StyleProp<TextStyle>;
}
const WelcomeTitle: React.FC<WelcomeTitleProps> = ({
  title,
  title2,
  titleStyle,
  title2Style,
  titleContainer,
}) => {
  return (
    <View style={titleContainer}>
      <Label title={title} labelStyle={titleStyle} />
      <Label title={title2} labelStyle={title2Style} />
    </View>
  );
};

export default WelcomeTitle;

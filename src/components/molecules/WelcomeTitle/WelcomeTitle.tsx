import React from 'react';
import {StyleSheet, View} from 'react-native';
import Label from '../../atoms/Label/Label';

interface WelcomeTitleProps {
  title: string;
  title2: string;
  titleStyle: any;
  title2Style: any;
  titleContainer?: any;
}
const WelcomeTitle: React.FC<WelcomeTitleProps> = ({
  title,
  title2,
  titleStyle,
  title2Style,
  titleContainer,
}) => {
  return (
    <View style={[titleContainer]}>
      <Label title={title} labelStyle={titleStyle} />
      <Label title={title2} labelStyle={title2Style} />
    </View>
  );
};

export default WelcomeTitle;

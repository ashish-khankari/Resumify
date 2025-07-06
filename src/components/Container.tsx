import React, {ReactNode} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Colors} from '../theme';
import {horizontalScale} from '../../Metrics';

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(20),
  },
});

export default Container;

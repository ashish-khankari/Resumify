import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/navigation/StackNavigation';
import Toast from 'react-native-toast-message';
import toastConfig from './src/config/toastConfig';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {StatusBar} from 'react-native';
import {Colors} from './src/theme';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.white} />
      <Provider store={store}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
        <Toast config={toastConfig} />
      </Provider>
    </>
  );
}

export default App;

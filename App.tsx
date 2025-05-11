import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/navigation/StackNavigation';
import Toast from 'react-native-toast-message';
import toastConfig from './src/config/toastConfig';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

function App(): React.JSX.Element {
  return (
    <>
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

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/navigation/StackNavigation';
import Toast from 'react-native-toast-message';
import toastConfig from './src/config/toastConfig';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import {StatusBar} from 'react-native';
import {Colors} from './src/theme';
import {PersistGate} from 'redux-persist/integration/react';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.white} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <AppNavigation />
          </NavigationContainer>
          <Toast config={toastConfig} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;

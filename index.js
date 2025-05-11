/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import Toast from 'react-native-toast-message';
{/* <Toast /> */}
AppRegistry.registerComponent(appName, () => App);

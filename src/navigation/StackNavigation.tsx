import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {APP_ROUTES} from './routes';
import LoginScreen from '../screens/Login/LoginScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';
import WelcomeScreen from '../screens/Welcome/WelcomeScreen';
import MyTabs from './BottomTabNavigation';
import DrawerNavigation from './DrawerNavigation';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={APP_ROUTES.STACK.WELCOME} component={WelcomeScreen} />
      <Stack.Screen name={APP_ROUTES.STACK.LOGIN} component={LoginScreen} />
      <Stack.Screen
        name={APP_ROUTES.STACK.REGISTER}
        component={RegisterScreen}
      />
      <Stack.Screen name={APP_ROUTES.STACK.HOME} component={DrawerNavigation} />
    </Stack.Navigator>
  );
};

export default AppNavigation;

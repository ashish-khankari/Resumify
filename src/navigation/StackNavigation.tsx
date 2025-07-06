import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {APP_ROUTES} from './routes';
import RegisterScreen from '../screens/Auth/Register';
import WelcomeScreen from '../screens/Welcome';
import DrawerNavigation from './DrawerNavigation';
import LoginScreen from '../screens/Auth/Login';

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

import {createDrawerNavigator} from '@react-navigation/drawer';
import {APP_ROUTES} from './routes';
import MyTabs from './BottomTabNavigation';

const Drawer = createDrawerNavigator();
const DrawerNavigation: React.FC = ({}) => {
  return (
    <Drawer.Navigator
      initialRouteName={APP_ROUTES.DRAWER.HOMEDRAWER}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name={APP_ROUTES.DRAWER.HOMEDRAWER} component={MyTabs} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

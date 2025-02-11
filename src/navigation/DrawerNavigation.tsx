import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/Home/HomeScreen';
import { APP_ROUTES } from './routes';
import MyTabs from './BottomTabNavigation';
import UserAgreement from '../screens/UserAgreement/UserAgreement';
import Privacypolicy from '../screens/PrivacyPolicy/Privacypolicy';

const Drawer = createDrawerNavigator()
const DrawerNavigation: React.FC = ({ }) => {
    return (
        <Drawer.Navigator
            initialRouteName={APP_ROUTES.DRAWER.HOMEDRAWER}
            // screenOptions={{ headerShown: false }}
        >
            <Drawer.Screen name={APP_ROUTES.DRAWER.HOMEDRAWER} component={MyTabs} />
            <Drawer.Screen name={APP_ROUTES.DRAWER.USER_AGREEMENT} component={UserAgreement} />
            <Drawer.Screen name={APP_ROUTES.DRAWER.PRIVACY_POLICY} component={Privacypolicy} />

        </Drawer.Navigator>
    )
}

export default DrawerNavigation;

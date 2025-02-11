import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/Home/HomeScreen';
import { APP_ROUTES } from './routes';
import MyTabs from './BottomTabNavigation';
import UserAgreement from '../screens/UserAgreement/UserAgreement';
import Privacypolicy from '../screens/PrivacyPolicy/Privacypolicy';
import BookMarkScreen from '../screens/Bookmarked/BookMarkScreen';
import CategoryScreen from '../screens/Categories/CategoriesScreen';

const Drawer = createDrawerNavigator()
const DrawerNavigation: React.FC = ({ }) => {
    return (
        <Drawer.Navigator
            initialRouteName={APP_ROUTES.DRAWER.HOMEDRAWER}
        >
            <Drawer.Screen name={APP_ROUTES.DRAWER.HOMEDRAWER} component={MyTabs} />
            <Drawer.Screen name={APP_ROUTES.DRAWER.USER_AGREEMENT} component={UserAgreement} />
            <Drawer.Screen name={APP_ROUTES.DRAWER.PRIVACY_POLICY} component={Privacypolicy} />
            <Drawer.Screen name={APP_ROUTES.DRAWER.SAVED_RESUME} component={BookMarkScreen} />
            <Drawer.Screen name={APP_ROUTES.DRAWER.CATEGORY} component={CategoryScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import { APP_ROUTES } from './routes';
import React, {ReactNode} from 'react';

const Tab = createBottomTabNavigator();

interface IconProps {
    focused: boolean;
    color: string;
    size: number;
}

const screenOptions = ({route}: {route: any}) => ({
})
const MyTabs = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name={APP_ROUTES.BOTTOM.HomeBottomTab}
                component={HomeScreen}
            />
            <Tab.Screen
                name={APP_ROUTES.BOTTOM.PROFILE}
                component={ProfileScreen}
            />
        </Tab.Navigator>
    );
};

export default MyTabs;

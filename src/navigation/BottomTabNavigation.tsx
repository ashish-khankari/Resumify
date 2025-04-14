import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import {APP_ROUTES} from './routes';
import React from 'react';
import {Colors, Images} from '../theme';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {horizontalScale, verticalScale} from '../../Metrics';
import NotificationsScreen from '../screens/Notification/NotificationScreen';

const Tab = createBottomTabNavigator();

const screenOptions = ({route}: {route: any}) => ({
  headerShown: false,
  title: '',
  tabBarIcon: ({
    focused,
    color,
    size,
  }: {
    focused: boolean;
    color: string;
    size: number;
  }) => {
    let iconName;
    let iconTintColor = focused ? Colors.primary : Colors.black;
    switch (route.name) {
      case APP_ROUTES.BOTTOM.HomeBottomTab:
        iconName = focused ? Images.HomeDarkIcon : Images.HomeIcon;
        break;
      case APP_ROUTES.BOTTOM.PROFILE:
        iconName = focused ? Images.ProfileDarkIcon : Images.ProfileLightIcon;
        break;
      case APP_ROUTES.BOTTOM.RESUMES:
        iconName = Images.ResumeIcon;
        break;
      case APP_ROUTES.BOTTOM.NOTIFICATION:
        iconName = focused
          ? Images.NotificationDarkIcon
          : Images.NotificationIcon;
        break;
      default:
        iconName = Images.Facebook;
    }
    return (
      <>
        <Image
          source={iconName}
          tintColor={
            route.name !== APP_ROUTES.BOTTOM.RESUMES ? iconTintColor : undefined
          }
          style={styles.bottomTabIcon}
        />
      </>
    );
  },
});
const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={APP_ROUTES.BOTTOM.HomeBottomTab}
        component={HomeScreen}
      />
      <Tab.Screen name={APP_ROUTES.BOTTOM.RESUMES} component={ProfileScreen} />
      <Tab.Screen
        name={APP_ROUTES.BOTTOM.NOTIFICATION}
        component={NotificationsScreen}
      />
      <Tab.Screen name={APP_ROUTES.BOTTOM.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomTabIcon: {
    height: verticalScale(24),
    width: horizontalScale(24),
    resizeMode: 'contain',
  },
});

export default MyTabs;

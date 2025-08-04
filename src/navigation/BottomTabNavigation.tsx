import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {APP_ROUTES} from './routes';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../Metrics';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {colors, images} from '../theme';

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
    let iconTintColor = focused ? colors.primary : colors.black;
    switch (route.name) {
      case APP_ROUTES.BOTTOM.HomeBottomTab:
        iconName = focused ? images.HomeDarkIcon : images.HomeIcon;
        break;
      case APP_ROUTES.BOTTOM.PROFILE:
        iconName = focused ? images.ProfileDarkIcon : images.ProfileLightIcon;
        break;
      case APP_ROUTES.BOTTOM.RESUMES:
        iconName = images.ResumeIcon;
        break;
      case APP_ROUTES.BOTTOM.NOTIFICATION:
        iconName = focused
          ? images.NotificationDarkIcon
          : images.NotificationIcon;
        break;
      default:
        iconName = images.Facebook;
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
      {/* <Tab.Screen name={APP_ROUTES.BOTTOM.RESUMES} component={ProfileScreen} />
      <Tab.Screen
        name={APP_ROUTES.BOTTOM.NOTIFICATION}
        component={NotificationsScreen}
      /> */}
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

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/useRedux';
import {logoutUser} from '../../redux/slice/authSlice/authSlice';
import {useNavigation} from '@react-navigation/native';
import {APP_ROUTES} from '../../navigation/routes';
import ButtonComp from '../../components/ButtonComp';
import {Container} from '../../components';
import {colors} from '../../theme';

const ProfileScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const {user} = useAppSelector(state => state);

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      navigation.navigate(APP_ROUTES.STACK.WELCOME);
    } catch (error) {
      console.log('Logout error:', error);
    }
  };

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.profileSection}>
          <Text style={styles.title}>Profile</Text>
          <View style={styles.userInfo}>
            <Text style={styles.label}>Username:</Text>
            <Text style={styles.value}>{user?.res?.username || 'N/A'}</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{user?.res?.email || 'N/A'}</Text>
          </View>
        </View>

        <View style={styles.logoutSection}>
          <ButtonComp
            title="Logout"
            onPress={handleLogout}
            buttonStyle={styles.logoutButton}
            backgroundColor={colors.primary}
            textStyle={styles.logoutText}
          />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileSection: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 30,
    textAlign: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
  },
  value: {
    fontSize: 16,
    color: colors.primary,
  },
  logoutSection: {
    marginBottom: 30,
  },
  logoutButton: {
    height: 50,
    borderRadius: 8,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProfileScreen;

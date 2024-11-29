import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {theme, userTestImage} from '../../configs';
import {Icon} from '../icons';
import {Avatar} from '../Avatar';
import {IconTypes} from '../icons/iconTypes';
import {useSelector} from 'react-redux';
import {selectUser} from '../../redux/selectors';
import {useGetUserProfileQuery} from '../../redux/slices/UserApi';
import {AppMainLayout} from '../../layouts';

type Menu = {
  icon: string;
  label: string;
  screen: string;
};

export function HomeScreenDrawer({navigation}: any) {
  const savedUser = useSelector(selectUser);
  const {data: user} = useGetUserProfileQuery(savedUser.user_id);
  const [activeMenu, setActiveMenu] = useState('Home');
  const menus: Menu[] = [
    {
      icon: 'home',
      label: 'Home',
      screen: 'Home',
    },
    {
      icon: 'home',
      label: 'My Houses',
      screen: 'FavoriteHouse',
    },
    {
      icon: 'heart',
      label: 'My favorites',
      screen: 'FavoriteHouse',
    },
    {
      icon: 'user',
      label: 'My Profile',
      screen: 'UserProfile',
    },
  ];

  const selectMenu = (menu: Menu) => {
    setActiveMenu(menu.label);
    navigation.navigate(menu.screen);
  };

  const logout = () => navigation.navigate('Login');
  return (
    <AppMainLayout>
      <View style={styles.drawerHeaderContainer}>
        <View style={styles.avatarContainer}>
          <Avatar url={userTestImage} size={48} />
        </View>
        <View style={styles.userContainer}>
          <Text style={styles.greeting}>{user?.name}</Text>
          <View style={styles.location}>
            <Icon icon="location" size={16} stroke={theme.color.gray.mid} />
            <Text style={styles.address}>Dar es salaam</Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.menuContainer}>
          {menus.map(menu => (
            <Pressable
              key={menu.label}
              style={{
                ...styles.menuItem,
                backgroundColor:
                  activeMenu === menu.label
                    ? theme.color.orange
                    : theme.color.white,
              }}
              onPress={() => selectMenu(menu)}>
              <View
                style={{
                  ...styles.iconContainer,
                  backgroundColor:
                    activeMenu === menu.label
                      ? theme.color.white
                      : theme.color.lightOrange,
                }}>
                <Icon
                  icon={menu.icon as IconTypes}
                  size={16}
                  stroke={theme.color.orange}
                  fill={
                    activeMenu === menu.label
                      ? theme.color.white
                      : theme.color.orange
                  }
                  strokeWidth={2.5}
                />
              </View>
              <Text
                style={{
                  ...styles.menuText,
                  color:
                    activeMenu === menu.label
                      ? theme.color.white
                      : theme.color.black,
                }}>
                {menu.label}
              </Text>
            </Pressable>
          ))}
          <Pressable onPress={logout}>
            <View style={styles.logoutContainer}>
              <View style={styles.logoutIconContainer}>
                <Icon
                  icon="logout"
                  size={14}
                  stroke={theme.color.gray.mid}
                  strokeWidth={1.5}
                />
              </View>
              <Text style={styles.logoutText}>Log out</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </AppMainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingHorizontal: 15,
    paddingBottom: 30,
    backgroundColor: theme.color.white,
    height: '100%',
  },
  drawerHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: theme.color.offWhite,
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: theme.color.gray.light,
  },
  avatarContainer: {
    borderWidth: 1,
    borderColor: theme.color.orange,
    borderRadius: 48,
  },
  userContainer: {
    flexDirection: 'column',
    gap: 2,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  greeting: {
    color: theme.color.black,
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 26,
  },
  address: {
    color: theme.color.gray.mid,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
  },
  menuContainer: {
    marginTop: 20,
    flexDirection: 'column',
    gap: 10,
  },
  menuItem: {
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 9,
    gap: 10,
  },
  menuText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 26,
  },
  iconContainer: {
    height: 30,
    width: 30,
    borderRadius: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginHorizontal: 10,
    marginTop: 10,
  },
  logoutIconContainer: {
    height: 30,
    width: 30,
    borderRadius: 9,
    backgroundColor: theme.color.gray.semiLight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: theme.color.gray.mid,
  },
});

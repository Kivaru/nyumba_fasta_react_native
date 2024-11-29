import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  PaymentScreen,
  SearchScreen,
  SettingScreen,
  TransactionsScreen,
  FaqScreen,
  AboutUsScreen,
  ContactUsScreen,
  FavoriteScreen,
  UserProfileScreen,
  RentPropertiesScreen,
  SalePropertiesScreen,
} from '../screens';
import {HomeBottomTabBar} from '../components/HomeBottomTabBar';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreenDrawer} from '../components/Drawer';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const DrawerContent = ({navigation}: any) => (
  <HomeScreenDrawer navigation={navigation} />
);

const HomeScreenNavigation = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    screenOptions={{headerShown: false}}
    drawerContent={DrawerContent}>
    <Drawer.Screen name="Home" component={HomeScreen} />
  </Drawer.Navigator>
);

export function HomeTabBarNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="root"
      screenOptions={{headerShown: false}}
      tabBar={HomeBottomTabBar}>
      <Tab.Screen name="root" component={HomeScreenNavigation} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Payment" component={PaymentScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
      <Tab.Screen name="Faq" component={FaqScreen} />
      <Tab.Screen name="FavoriteHouse" component={FavoriteScreen} />
      <Tab.Screen name="AboutUs" component={AboutUsScreen} />
      <Tab.Screen name="ContactUs" component={ContactUsScreen} />
      <Tab.Screen name="Transactions" component={TransactionsScreen} />
      <Tab.Screen name="UserProfile" component={UserProfileScreen} />
      <Tab.Screen name="RentProperties" component={RentPropertiesScreen} />
      <Tab.Screen name="SaleProperties" component={SalePropertiesScreen} />
    </Tab.Navigator>
  );
}

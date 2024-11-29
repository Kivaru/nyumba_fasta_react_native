import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, RegisterScreen} from '../screens';
import {HomeTabBarNavigation} from './HomeTabNavigation';

const Stack = createNativeStackNavigator();

export function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Register"
        screenOptions={{
          headerShown: false,
          orientation: 'portrait',
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeTabBarNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

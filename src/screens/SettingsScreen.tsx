import React from 'react';
import {theme} from '../configs/theme';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Header, Icon} from '../components';
import {AppMainLayout} from '../layouts';

type Screens = {
  name: string;
  path: string;
};

export function SettingScreen({navigation}: any) {
  const screens: Screens[] = [
    {
      name: 'About us',
      path: 'AboutUs',
    },
    {
      name: 'Contact us',
      path: 'ContactUs',
    },
    {
      name: 'FAQ',
      path: 'Faq',
    },
  ];
  const navigateToScreen = (screen: string) => navigation.navigate(screen);

  return (
    <AppMainLayout>
      <Header title="Settings" icon="settings" />
      <View style={styles.container}>
        <Text style={styles.tittle}>General</Text>
        <View style={styles.screens}>
          {screens.map(screen => (
            <View key={screen.name}>
              <Pressable
                style={styles.screenContainer}
                onPress={() => navigateToScreen(screen.path)}>
                <Text style={styles.screenText}>{screen.name}</Text>
                <Icon
                  icon="chevron-right"
                  size={24}
                  stroke={theme.color.orange}
                  strokeWidth={2}
                />
              </Pressable>
              <View style={styles.divider}></View>
            </View>
          ))}
        </View>
      </View>
    </AppMainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  tittle: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 26,
    color: theme.color.black,
    marginBottom: 5,
  },
  screenText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 26,
    color: theme.color.black,
  },
  screens: {
    marginTop: 20,
    flexDirection: 'column',
    gap: 10,
  },
  screenContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  divider: {
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.color.gray.light,
  },
});

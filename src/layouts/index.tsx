import React, {ReactNode} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {theme} from '../configs';

type Props = {
  children: ReactNode;
};

export function AppMainLayout({children}: Props) {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.color.white,
  },
});

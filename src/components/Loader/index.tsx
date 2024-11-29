import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {theme} from '../../configs/theme';

export function Loader() {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color={theme.color.orange} />
    </View>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    paddingVertical: 20,
  },
});

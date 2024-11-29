import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../configs/theme';

export function Divider() {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <Text style={styles.text}>Or</Text>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    height: 0.5,
    backgroundColor: theme.color.gray.light,
    width: '43%',
  },
  text: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    marginHorizontal: 10,
  },
});

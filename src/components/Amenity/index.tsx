import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from '../icons';
import {theme} from '../../configs';

type Props = {
  name: string;
};

export function Amenity({name}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.iconContainer}>
        <Icon icon="tick" size={16} stroke={theme.color.white} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: theme.color.gray.light,
    borderRadius: 15,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    width: 25,
    backgroundColor: theme.color.orange,
    borderRadius: 10,
  },
});

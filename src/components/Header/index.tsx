import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Icon} from '../icons';
import {theme} from '../../configs';
import {IconTypes} from '../icons/iconTypes';
import {useNavigation} from '@react-navigation/native';

type Props = {
  title: string;
  icon: IconTypes;
};

export function Header({title, icon}: Props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Icon
          icon="arrow-left"
          size={24}
          strokeWidth={1.5}
          stroke={theme.color.black}
        />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
      <Icon icon={icon} size={24} fill={theme.color.orange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    backgroundColor: theme.color.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: theme.color.gray.light,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28,
    color: theme.color.black,
  },
});

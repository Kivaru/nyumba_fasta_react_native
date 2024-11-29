/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {theme} from '../../configs/theme';
import {Icon} from '../icons';

type Props = {
  onChangeText(text: string): void;
  value: string;
};

export function SearchField({onChangeText, value}: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Icon icon="search" size={16} stroke={theme.color.gray.vdark} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
          placeholder="Search your house"
          placeholderTextColor={theme.color.gray.vdark}
          autoCorrect={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    borderRadius: 15,
    height: 56,
    backgroundColor: theme.color.gray.vLight,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderColor: theme.color.gray.light,
  },
  inputContainer: {
    width: '90%',
  },
  input: {
    color: theme.color.black,
    backgroundColor: 'transparent',
    borderWidth: 0,
    paddingBottom: 5,
    height: 45,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
  },
});

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {theme} from '../../configs/theme';

type Props = {
  label: string;
  onChangeText(text: string): void;
  value: string;
  multiline?: boolean;
  error?: string;
};

export function TextArea({
  label,
  onChangeText,
  value,
  multiline,
  error,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={{...styles.inputContainer, height: multiline ? 201 : 56}}>
        <TextInput
          style={{...styles.input, height: multiline ? '100%' : 30}}
          onChangeText={onChangeText}
          value={value}
          placeholderTextColor={theme.color.gray.vdark}
          autoCorrect={false}
          multiline
          numberOfLines={multiline ? 10 : 1}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 8,
  },
  inputContainer: {
    paddingVertical: 13,
    paddingHorizontal: 10,
    backgroundColor: theme.color.gray.vLight,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: theme.color.gray.light,
  },
  label: {
    color: theme.color.black,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 22,
  },
  errorText: {
    color: theme.color.red,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
  },
  input: {
    color: theme.color.black,
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
});

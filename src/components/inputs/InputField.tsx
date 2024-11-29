/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  KeyboardType,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {theme} from '../../configs/theme';
import {Icon} from '../icons';
import {IconTypes} from '../icons/iconTypes';

type Props = {
  icon: IconTypes;
  label: string;
  type: KeyboardType;
  onChangeText(text: string): void;
  value: string;
  error?: string | undefined;
};

export function InputField({
  icon,
  label,
  type,
  onChangeText,
  value,
  error,
}: Props) {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  const borderColor = () => {
    if (error) {
      return theme.color.red;
    } else {
      return focused ? theme.color.orange : theme.color.gray.light;
    }
  };

  return (
    <View>
      <View
        style={{
          ...styles.container,
          borderColor: borderColor(),
        }}>
        <Icon
          icon={icon}
          size={16}
          fill={focused ? theme.color.black : theme.color.gray.vdark}
        />
        <View style={styles.inputContainer}>
          {(focused || value) && <Text style={styles.label}>{label}</Text>}
          <TextInput
            style={{...styles.input, height: focused || value ? 25 : 45}}
            onChangeText={onChangeText}
            value={value}
            placeholder={focused ? '' : label}
            placeholderTextColor={theme.color.gray.vdark}
            onFocus={handleFocus}
            onBlur={handleBlur}
            keyboardType={type}
            secureTextEntry={showPassword && icon === 'password'}
            autoCorrect={false}
          />
        </View>
        {icon === 'password' && (
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <Icon
                size={24}
                icon="eye"
                stroke={theme.color.gray.vdark}
                strokeWidth={2}
              />
            ) : (
              <Icon
                size={24}
                icon="eye-off"
                stroke={theme.color.gray.vdark}
                strokeWidth={2}
              />
            )}
          </Pressable>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 2,
    paddingLeft: 10,
    paddingRight: 30,
    borderRadius: 15,
    height: 56,
    backgroundColor: theme.color.gray.vLight,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  inputContainer: {
    width: '90%',
  },
  label: {
    color: theme.color.gray.vdark,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    marginLeft: 2,
  },
  errorText: {
    marginTop: 5,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
    color: theme.color.red,
  },
  input: {
    color: theme.color.black,
    backgroundColor: 'transparent',
    paddingVertical: 3,
    paddingLeft: 4,
    borderWidth: 0,
  },
});

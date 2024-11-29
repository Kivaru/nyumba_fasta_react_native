import React from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Icon} from '../icons';
import {theme} from '../../configs/theme';
import {IconTypes} from '../icons/iconTypes';

export type Props = {
  onPress: () => void;
  type: 'default' | 'filled' | 'provider';
  label: string;
  active?: boolean;
  icon?: IconTypes;
  isLoading?: boolean;
};

export function Button({type, onPress, label, active, icon, isLoading}: Props) {
  return (
    <Pressable onPress={onPress}>
      {type === 'default' && (
        <View
          style={{
            ...styles.default,
            backgroundColor: active
              ? theme.color.gray.light
              : theme.color.white,
          }}>
          <Text
            style={{
              ...styles.defaultLabel,
              color: active ? theme.color.black : theme.color.gray.vdark,
            }}>
            {label}
          </Text>
        </View>
      )}
      {type === 'filled' && (
        <View style={{...styles.shared, ...styles.filled}}>
          {isLoading ? (
            <ActivityIndicator size="small" color={theme.color.white} />
          ) : (
            <View style={styles.content}>
              <Text style={styles.filledLabel}>{label}</Text>
              {icon ? (
                <View style={styles.iconContainer}>
                  <Icon
                    size={17}
                    icon={icon}
                    stroke={theme.color.white}
                    strokeWidth={2}
                  />
                </View>
              ) : (
                <View style={styles.iconContainer}>
                  <Icon
                    size={17}
                    icon="arrowRightFilled"
                    fill={theme.color.white}
                  />
                </View>
              )}
            </View>
          )}
        </View>
      )}
      {type === 'provider' && (
        <View style={{...styles.shared, ...styles.provider}}>
          <Image source={require('../../assets/google-logo.png')} />
          <Text style={styles.providerLabel}>{label}</Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  shared: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 56,
    borderRadius: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 4,
  },
  default: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  defaultLabel: {
    color: theme.color.black,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
  },
  filled: {
    backgroundColor: theme.color.orange,
    gap: 6,
  },
  provider: {
    backgroundColor: theme.color.white,
    borderWidth: 1,
    borderColor: theme.color.gray.light,
    gap: 10,
  },
  iconContainer: {
    marginTop: 4,
  },
  filledLabel: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: theme.color.white,
  },
  providerLabel: {
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 22,
    color: theme.color.black,
  },
});

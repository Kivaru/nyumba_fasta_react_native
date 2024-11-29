import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {Icon} from '../icons';
import {theme} from '../../configs';

type Props = {
  onChecked(event: any): void;
  checked: boolean;
};

export function Checkbox({onChecked, checked}: Props) {
  return (
    <Pressable
      style={{
        ...styles.container,
        backgroundColor: checked ? theme.color.green : theme.color.white,
        borderColor: checked ? theme.color.green : theme.color.orange,
      }}
      onPress={onChecked}>
      {checked && <Icon icon="tick" size={15} stroke={theme.color.white} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: 20,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

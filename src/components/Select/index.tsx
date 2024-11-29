import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {theme} from '../../configs';
import {Icon} from '../icons';

type Item = {
  value: string;
  label: string;
};

type Props = {
  items: Item[];
  placeholder: string;
  value: string;
  onValueChange(value: string): void;
};

export function Select({items, placeholder, value, onValueChange}: Props) {
  const [open, setOpen] = useState(false);

  const handleSelect = (item: string) => {
    onValueChange(item);
    setOpen(false);
  };
  const selectedItem = items.find(item => item.value === value);

  return (
    <View>
      <Pressable style={styles.select} onPress={() => setOpen(!open)}>
        <Text style={styles.selectText}>
          {selectedItem ? selectedItem.label : placeholder}
        </Text>
        {open ? (
          <Icon
            icon="chevron-up"
            size={24}
            stroke={theme.color.black}
            strokeWidth={2}
          />
        ) : (
          <Icon
            icon="chevron-down"
            size={24}
            stroke={theme.color.black}
            strokeWidth={2}
          />
        )}
      </Pressable>
      {open && (
        <View style={styles.selectBox}>
          {items.map(item => (
            <Pressable
              key={item.label}
              onPress={() => handleSelect(item.value)}
              style={styles.selectItem}>
              <Text style={styles.selectText}>{item.label}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  select: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: theme.color.gray.light,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  selectBox: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: theme.color.gray.light,
  },
  selectItem: {
    borderBottomWidth: 1,
    borderColor: theme.color.gray.light,
    padding: 12,
    backgroundColor: theme.color.white,
  },
  selectText: {
    color: theme.color.black,
  },
});

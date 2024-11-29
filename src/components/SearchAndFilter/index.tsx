import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon, SearchField} from '..';
import {theme} from '../../configs';

type Props = {
  onValueChange(text: string): void;
  searchTerm: string;
};

export function SearchandFilter({onValueChange, searchTerm}: Props) {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchField}>
        <SearchField onChangeText={onValueChange} value={searchTerm} />
      </View>
      <View style={styles.filterContainer}>
        <Icon icon="filter" size={24} fill={theme.color.white} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  searchField: {
    width: '80%',
  },
  filterContainer: {
    backgroundColor: theme.color.orange,
    height: 56,
    width: 59,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

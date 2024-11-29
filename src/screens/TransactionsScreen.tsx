import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from '../components';
import {AppMainLayout} from '../layouts';

export function TransactionsScreen() {
  return (
    <AppMainLayout>
      <Header title="Transactions" icon="payment" />
      <View style={styles.container}>
        <Text>transactions screen</Text>
      </View>
    </AppMainLayout>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
});

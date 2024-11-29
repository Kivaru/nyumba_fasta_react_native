import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../configs/theme';
import {Header, Button, InputField, Select} from '../components';
import {AppMainLayout} from '../layouts';

export function PaymentScreen() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [phone, setPhone] = useState('');
  const pushPay = () => console.log('pushPay');
  const paymentMethods = ['Mobile payment', 'Card Payment'].map(method => {
    return {
      label: method,
      value: method,
    };
  });

  return (
    <AppMainLayout>
      <Header title="Payment" icon="payment" />
      <View style={styles.container}>
        <Text style={styles.totalAmount}>Total Amount</Text>
        <View style={styles.amountContainer}>
          <Text style={styles.rentals}>NYUMBA FASTA RENTALS</Text>
          <Text style={styles.amountToPay}>Pay TZS 1,500</Text>
        </View>
        <View style={styles.select}>
          <Text style={styles.selectText}>Select payment method</Text>
          <Select
            items={paymentMethods}
            placeholder="Select"
            value={paymentMethod}
            onValueChange={value => setPaymentMethod(value)}
          />
        </View>
        <View style={styles.pushPayContainer}>
          {paymentMethod === 'Mobile payment' && (
            <>
              <Text style={styles.paymentType}>
                We support Tigo,Vodacom and Airtel
              </Text>
              <InputField
                label="Enter phone number"
                icon="phone"
                type="phone-pad"
                onChangeText={number => setPhone(number)}
                value={phone}
              />
              <Button
                onPress={pushPay}
                label="Pay"
                type="filled"
                icon="payment"
              />
            </>
          )}
          {paymentMethod === 'Card Payment' && (
            <>
              <Text style={styles.paymentType}>M-Pesa & Card Payment</Text>
              <Button
                onPress={pushPay}
                label="Pay"
                type="filled"
                icon="payment"
              />
            </>
          )}
        </View>
      </View>
    </AppMainLayout>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  totalAmount: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 26,
    color: theme.color.black,
  },
  select: {
    marginTop: 30,
  },
  selectText: {
    marginBottom: 10,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
    color: theme.color.black,
  },
  amountContainer: {
    marginTop: 10,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: theme.color.gray.light,
    borderRadius: 15,
  },
  rentals: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 22,
    color: theme.color.black,
  },
  amountToPay: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    color: theme.color.orange,
  },
  pushPayContainer: {
    marginTop: 15,
    flexDirection: 'column',
    gap: 15,
  },
  paymentType: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
    color: theme.color.black,
  },
});

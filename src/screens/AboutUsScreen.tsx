import React from 'react';
import {View, ScrollView, Text, StyleSheet, Image} from 'react-native';
import {Header} from '../components';
import {theme} from '../configs';
import {AppMainLayout} from '../layouts';

export function AboutUsScreen() {
  return (
    <AppMainLayout>
      <Header title="About us" icon="language" />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={require('../assets/logo.png')} />
          </View>
          <Text style={styles.aboutText}>
            Nyumba fasta is a web and mobile platform founded in the year 2021,
            With the aim of simplifying the rental processes. That is to say,
            the renter will be able to get a house easily, and a land lord will
            secure trust worthy tenants through our application. We aim at
            providing services to reduce the struggle and the discomfort one
            goes through while in search of residence. We are Tanzanians whose
            sole purpose is to solve problems that we experience in our
            societies, hence Nyumba fasta being our first project, introducing
            many others to come.
          </Text>
        </View>
      </ScrollView>
    </AppMainLayout>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    marginTop: 30,
    marginHorizontal: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: theme.color.offWhite,
    borderRadius: 15,
  },
  aboutText: {
    marginTop: 25,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: theme.color.gray.mid,
  },
});

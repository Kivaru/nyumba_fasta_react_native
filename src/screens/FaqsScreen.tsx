import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Header, Accordion} from '../components';
import {AppMainLayout} from '../layouts';

type Faqs = {
  question: string;
  answer: string;
};

export function FaqScreen() {
  const faqs: Faqs[] = [
    {
      question: 'What benefit does the Landlord get by using Nyumba fasta ?',
      answer: 'What benefit does the Landlord get by using Nyumba fasta ?',
    },
    {
      question: 'What benefit does the renter get by using Nyumba fasta?',
      answer: 'What benefit does the renter get by using Nyumba fasta?',
    },
    {
      question:
        'What help is offered by the company to the customer when inconveniences happen i.e. complains on a rude and irresponsible renter?',
      answer:
        'What help is offered by the company to the customer when inconveniences happen i.e. complains on a rude and irresponsible renter?',
    },
    {
      question:
        'Do you have any specification on houses that are to be uploaded on the website',
      answer:
        'Do you have any specification on houses that are to be uploaded on the website',
    },
    {
      question: 'Do you collaborate with brokers?',
      answer: 'Do you collaborate with brokers?',
    },
    {
      question: 'What does the broker gain by collaborating with you?',
      answer: 'What does the broker gain by collaborating with you?',
    },
    {
      question:
        'Do you operate in other regions too, aside from dar es saalam?',
      answer: 'Do you operate in other regions too, aside from dar es saalam?',
    },
    {
      question: 'Does your system work only for smart phones?',
      answer: 'Does your system work only for smart phones?',
    },
    {
      question:
        'Can the company engage in an agreement with the landlord, to finish the contract signing and the rent due date tracking within the website',
      answer:
        'Can the company engage in an agreement with the landlord, to finish the contract signing and the rent due date tracking within the website',
    },
  ];
  return (
    <AppMainLayout>
      <Header title="Faq" icon="language" />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={styles.container}>
          {faqs.map(faq => (
            <View key={faq.answer}>
              <Accordion question={faq.question} answer={faq.question} />
            </View>
          ))}
        </View>
      </ScrollView>
    </AppMainLayout>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  container: {
    paddingVertical: 25,
    paddingHorizontal: 15,
    paddingBottom: 30,
    flexDirection: 'column',
    gap: 20,
  },
});

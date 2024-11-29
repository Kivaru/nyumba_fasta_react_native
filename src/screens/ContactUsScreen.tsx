import React from 'react';
import {ScrollView, View, StyleSheet, Pressable, Text} from 'react-native';
import {Header, TextArea} from '../components';
import {theme} from '../configs';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {AppMainLayout} from '../layouts';

type InititalValues = {
  name: string;
  email: string;
  message: string;
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format'),
  message: Yup.string()
    .required('Message is required')
    .min(10, 'Provide detailed message'),
});

export function ContactUsScreen() {
  const initialValues: InititalValues = {
    name: '',
    email: '',
    message: '',
  };
  const submitMessage = (values: InititalValues) => {
    console.log('values', values);
  };

  return (
    <AppMainLayout>
      <Header title="Contract us" icon="language" />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={styles.container}>
          <KeyboardAwareScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}>
            <Formik
              initialValues={initialValues}
              onSubmit={submitMessage}
              validationSchema={validationSchema}>
              {({handleChange, handleSubmit, values, errors}) => (
                <View style={styles.formContainer}>
                  <TextArea
                    label="Name"
                    onChangeText={handleChange('name')}
                    value={values.name}
                    error={errors.name}
                  />
                  <TextArea
                    label="Email"
                    onChangeText={handleChange('email')}
                    value={values.email}
                    error={errors.email}
                  />
                  <TextArea
                    label="Message"
                    onChangeText={handleChange('message')}
                    value={values.message}
                    error={errors.message}
                    multiline
                  />
                  <View style={styles.submitButtonContainer}>
                    <Pressable
                      onPress={() => handleSubmit()}
                      style={styles.submitButton}>
                      <Text style={styles.submitText}>Submit</Text>
                    </Pressable>
                  </View>
                </View>
              )}
            </Formik>
          </KeyboardAwareScrollView>
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
    paddingVertical: 20,
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  formContainer: {
    paddingVertical: 10,
    flexDirection: 'column',
    gap: 20,
  },
  submitText: {
    color: theme.color.white,
  },
  submitButton: {
    height: 40,
    width: 143,
    borderRadius: 12,
    backgroundColor: theme.color.green,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

import React, {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {theme} from '../configs/theme';
import {Button, Checkbox, Divider, InputField} from '../components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {getPayload, getRoleId} from '../utils';
import {useRegisterMutation} from '../redux/slices/Auth';
import {useDispatch} from 'react-redux';
import {setUser} from '../redux/slices/Appstate';
import {AppMainLayout} from '../layouts';

type FormValues = {
  name: string;
  lname: string;
  phonenumber: string;
  email: string;
  password: string;
  agreeToTerms?: boolean;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('First name is required'),
  lname: Yup.string().required('Last name is required'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format'),
  phonenumber: Yup.string()
    .required('Phone is required')
    .length(10, 'Incomplete phone number'),
  password: Yup.string().required('Password is required').length(8),
  agreeToTerms: Yup.boolean().isTrue(),
});

export function RegisterScreen({navigation}: any) {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState('Renter');
  const users = ['Renter', 'Home Owner', 'Broker'];
  const handleRegister = () => console.log('pressed');
  const navigateToLoginPage = () => navigation.navigate('Login');
  const [register, {isLoading}] = useRegisterMutation();

  const onRegister = async (values: FormValues) => {
    delete values.agreeToTerms;
    try {
      const payload = getPayload({role_id: getRoleId(currentUser), ...values});
      const response = await register(payload).unwrap();
      if (response.status === '200') {
        dispatch(
          setUser({
            user_id: response.user_id,
            token: response.token,
          }),
        );
        navigation.navigate('Home');
      }
    } catch (err) {
      console.log('error', err);
    }
  };

  return (
    <AppMainLayout>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={styles.container}>
          <KeyboardAwareScrollView
            bounces={false}
            showsVerticalScrollIndicator={false}>
            <View style={styles.logoContainer}>
              <Image source={require('../assets/logo.png')} />
            </View>
            <View style={styles.tabContainer}>
              {users.map(user => (
                <View key={user}>
                  <Button
                    label={user}
                    type="default"
                    onPress={() => setCurrentUser(user)}
                    active={user === currentUser}
                  />
                </View>
              ))}
            </View>
            <Text style={styles.heading}>Register As {currentUser}</Text>
            <Text style={styles.subHeading}>
              Register with your data that you entered during your registration
            </Text>
            <Formik
              initialValues={{
                name: '',
                lname: '',
                email: '',
                phonenumber: '',
                password: '',
                agreeToTerms: false,
              }}
              validationSchema={validationSchema}
              onSubmit={onRegister}>
              {({
                handleChange,
                handleSubmit,
                values,
                setFieldValue,
                errors,
              }) => (
                <View style={styles.formContainer}>
                  <InputField
                    label="First name"
                    icon="user"
                    type="default"
                    onChangeText={handleChange('name')}
                    value={values.name}
                    error={errors.name}
                  />
                  <InputField
                    label="Last name"
                    icon="user"
                    type="default"
                    onChangeText={handleChange('lname')}
                    value={values.lname}
                    error={errors.lname}
                  />
                  <InputField
                    label="Email"
                    icon="email"
                    type="default"
                    onChangeText={handleChange('email')}
                    value={values.email}
                    error={errors.email}
                  />
                  <InputField
                    label="Phone"
                    icon="phone"
                    type="phone-pad"
                    onChangeText={handleChange('phonenumber')}
                    value={values.phonenumber}
                    error={errors.phonenumber}
                  />
                  <InputField
                    label="Enter Your Password"
                    icon="password"
                    type="default"
                    onChangeText={handleChange('password')}
                    value={values.password}
                    error={errors.password}
                  />
                  <View style={styles.requirementsContainer}>
                    <View style={styles.checkbox}>
                      <Checkbox
                        checked={values.agreeToTerms}
                        onChecked={() =>
                          setFieldValue('agreeToTerms', !values.agreeToTerms)
                        }
                      />
                    </View>
                    <Text style={styles.requirement}>
                      By clicking you accept our privacy policy and
                      <Text style={styles.terms}> terms and conditions</Text>
                    </Text>
                  </View>
                  <Button
                    onPress={handleSubmit}
                    label="Register"
                    type="filled"
                    isLoading={isLoading}
                  />
                </View>
              )}
            </Formik>
            <View style={styles.divider}>
              <Divider />
            </View>
            <Button
              onPress={handleRegister}
              label="Continue with Google"
              type="provider"
            />
            <View style={styles.accontText}>
              <Text>Already have an account?</Text>
              <Pressable onPress={navigateToLoginPage}>
                <Text style={styles.loginText}>Login</Text>
              </Pressable>
            </View>
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
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: theme.color.white,
    paddingBottom: 30,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tabContainer: {
    height: 56,
    width: '100%',
    borderWidth: 1,
    borderColor: theme.color.gray.light,
    borderRadius: 15,
    marginTop: 30,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  checkbox: {
    marginTop: 2,
  },
  heading: {
    color: theme.color.black,
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28,
    marginTop: 10,
  },
  subHeading: {
    color: theme.color.gray.mid,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 5,
  },
  formContainer: {
    paddingVertical: 10,
    flexDirection: 'column',
    gap: 20,
  },
  requirementsContainer: {
    marginTop: 8,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  requirement: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: theme.color.gray.mid,
  },
  terms: {
    color: theme.color.black,
  },
  divider: {
    marginVertical: 20,
  },
  accontText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.24,
    color: theme.color.gray.mid,
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  loginText: {
    color: theme.color.orange,
  },
});

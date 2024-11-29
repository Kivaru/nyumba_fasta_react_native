import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button, Divider, InputField} from '../components';
import {theme} from '../configs/theme';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useLoginMutation} from '../redux/slices/Auth';
import {getPayload} from '../utils';
import {useDispatch} from 'react-redux';
import {setUser} from '../redux/slices/Appstate';
import {AppMainLayout} from '../layouts';

type FormValues = {
  phonenumber: string;
  password: string;
};

const validationSchema = Yup.object().shape({
  phonenumber: Yup.string()
    .required('Phone is required')
    .length(10, 'Incomplete phone number'),
  password: Yup.string().required('Password is required'),
});

export function LoginScreen({navigation}: any) {
  const dispatch = useDispatch();
  const [login, {isLoading}] = useLoginMutation();
  const onLoginWithGoogle = () => console.log('pressed');
  const navigateToRegisterPage = () => navigation.navigate('Register');

  const onLogin = async (values: FormValues) => {
    try {
      const payload = getPayload(values);
      const response = await login(payload).unwrap();
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
            <Text style={styles.heading}>Login</Text>
            <Text style={styles.subHeading}>
              Login with your data that you entered during your dashboard
            </Text>
            <Formik
              initialValues={{phonenumber: '', password: ''}}
              onSubmit={onLogin}
              validationSchema={validationSchema}>
              {({handleChange, handleSubmit, values, errors}) => (
                <View style={styles.formContainer}>
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
                  <Button
                    onPress={handleSubmit}
                    label="Login"
                    type="filled"
                    isLoading={isLoading}
                  />
                </View>
              )}
            </Formik>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
            <View style={styles.divider}>
              <Divider />
            </View>
            <Button
              onPress={onLoginWithGoogle}
              label="Continue with Google"
              type="provider"
            />
            <View style={styles.accontText}>
              <Text>Don’t have an account?</Text>
              <Pressable onPress={navigateToRegisterPage}>
                <Text style={styles.signUpText}>Signup</Text>
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
    backgroundColor: theme.color.white,
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 50,
  },
  heading: {
    color: theme.color.black,
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28,
    marginTop: 10,
  },
  subHeading: {
    color: theme.color.black,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    marginVertical: 5,
  },
  formContainer: {
    paddingVertical: 10,
    flexDirection: 'column',
    gap: 20,
  },
  divider: {
    marginVertical: 20,
  },
  forgotPassword: {
    color: theme.color.red,
    marginTop: 20,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '600',
    textAlign: 'center',
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
  signUpText: {
    color: theme.color.orange,
  },
});

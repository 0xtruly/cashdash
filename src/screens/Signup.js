import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Input, Button } from 'react-native-elements';
import { fireMethods } from '../utils/firebase';
import { SIGNUP_CONST } from '../utils';
import InputField from '../components/InputField';
import { UserContext } from '../providers/UserProvider';

const { auth } = fireMethods;

const Signup = ({ navigation }) => {
  const [fields, setfields] = useState({});
  const propOwn = Object.getOwnPropertyNames(fields);

  const handleSubmit = async (dispatch) => {
    const { username, email, password } = fields;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );
      user.updateProfile({ username });
      dispatch({
        type: 'SIGNUP',
        payload: user,
      });
      navigation.navigate('Login');
    } catch (e) {
      console.log('an error occurred', e);
    }

    setfields({
      username: '',
      email: '',
      password: '',
    });
  };
  console.log('fields', JSON.stringify(fields, null, 2));

  return (
    <UserContext.Consumer>
      {(value) => {
        const { dispatch } = value;
        return (
          <SafeAreaView>
            <View style={styles.container}>
              <View style={styles.topContent}>
                <Text style={styles.text}>Welcome to</Text>
                <Avatar
                  source={{
                    uri:
                      'https://res.cloudinary.com/dcp4ezo2a/image/upload/f_auto,q_auto/v1593763643/Cashdashblue.png',
                  }}
                  size="medium"
                  containerStyle={{ width: 200 }}
                />
              </View>
              <ScrollView>
                <View>
                  {SIGNUP_CONST.map(({ title, placeholder, name }) => (
                    <InputField
                      placeholders={placeholder}
                      color="white"
                      TextInput={(value) => {
                        let input = title;
                        setfields({
                          ...fields,
                          [input]: value,
                        });
                      }}
                      name={name}
                    />
                  ))}
                </View>
                <Button
                  title="Sign Up"
                  onPress={() => handleSubmit(dispatch)}
                  buttonStyle={styles.button}
                  containerStyle={{ alignItems: 'center' }}
                  disabled={propOwn.length < 3 ? true : false}
                />
                <View style={styles.linkContainer}>
                  <Text style={styles.link}>Already have an account? </Text>
                  <Text
                    style={[{ fontWeight: '700' }, styles.link]}
                    onPress={() => navigation.navigate('Login')}>
                    Login
                  </Text>
                </View>
              </ScrollView>
            </View>
          </SafeAreaView>
        );
      }}
    </UserContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#F2F2F2',
    paddingLeft: 20,
    paddingTop: 30,
  },
  topContent: {
    height: 200,
    paddingLeft: 20,
    paddingTop: 30,
  },
  formArea: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  avatar: {
    alignSelf: 'flex-end',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  text: {
    color: '#212540',
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    paddingBottom: 30,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  button: {
    backgroundColor: '#212540',
    borderRadius: 30,
    width: 149,
    height: 44,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  link: {
    color: '#212540',
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
  },
});
export default Signup;

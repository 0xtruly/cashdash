import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Avatar, Input, Button } from 'react-native-elements';
import InputField from '../components/InputField';
import { LOGIN_CONST } from '../utils';
import { UserContext } from '../providers/UserProvider';
import { fireMethods } from '../utils/firebase';

const { auth } = fireMethods;

const Login = ({ navigation }) => {
  const [authenticated, setauthenticated] = useState(false);
  const [fields, setfields] = useState({});
  const propOwn = Object.getOwnPropertyNames(fields);

  const handleSubmit = async (dispatch) => {
    const { email, password } = fields;
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);

      dispatch({
        type: 'LOGIN',
        payload: user,
      });
      navigation.navigate('Dashboard');
    } catch (e) {
      console.log('an error occurred', e);
    }

    setfields({
      email: '',
      password: '',
    });
  };

  useEffect(() => {
    if (authenticated) {
      navigation.navigate('Dashboard');
    }
  }, [authenticated === false]);

  console.log('fields', JSON.stringify(fields, null, 2));

  return (
    <UserContext.Consumer>
      {(value) => {
        const { dispatch, reAuth } = value;
        console.log('auth:', reAuth);
        if (reAuth) {
          setauthenticated(reAuth);
        }
        console.log('authenticated:', authenticated);
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
              <View>
                <View>
                  {LOGIN_CONST.map(({ title, placeholder, name }) => {
                    return (
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
                    );
                  })}
                </View>
                <Button
                  title="Login"
                  onPress={() => handleSubmit(dispatch)}
                  buttonStyle={styles.button}
                  containerStyle={{ alignItems: 'center' }}
                  disabled={propOwn.length < 2 ? true : false}
                />
                <View style={styles.linkContainer}>
                  <Text style={styles.link}>Don't have an account yet? </Text>
                  <Text
                    style={[{ fontWeight: '700' }, styles.link]}
                    onPress={() => navigation.navigate('Signup')}>
                    Sign Up
                  </Text>
                </View>
              </View>
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
    height: 250,
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
export default Login;

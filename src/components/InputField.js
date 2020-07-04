import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const InputField = ({ TextInput, placeholders, Value, name, color }) => {
  const [status, setStatus] = useState(false);
  return (
    <View>
      <Input
        inputContainerStyle={styles.input}
        // inputStyle={color === 'white' ? styles.in2 : styles.in}
        placeholder={placeholders}
        leftIcon={<Icon name={name} size={24} color="#212540" />}
        onChangeText={TextInput}
        value={Value}
        placeholderTextColor={`#BDBDBD`}
        rightIcon={
          placeholders === 'Password' ? (
            <Icon
              name={status ? 'eye-outline' : 'eye-off-outline'}
              size={24}
              color={'grey'}
              onPress={() => {
                setStatus(!status);
              }}
            />
          ) : null
        }
        secureTextEntry={placeholders === 'Password' && !status ? true : false}
        keyboardType={placeholders === 'Number' ? 'numeric' : 'default'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 23,
    paddingBottom: 0,
    width: widthPercentageToDP('85%'),
  },
  in: {
    fontSize: heightPercentageToDP('2%'),
  },
  in2: {
    fontSize: heightPercentageToDP('2%'),
    color: 'white',
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
});

export default InputField;

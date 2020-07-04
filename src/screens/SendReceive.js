import React from 'react';
import { Text, StyleSheet, TextInput } from 'react-native';
import Layout from '../Layout';
import AvatarSection from '../components/AvatarSection';
import { View } from 'native-base';

const SendReceive = () => {
  return (
    <Layout>
      <AvatarSection avatar height="40%">
        <View style={styles.layout}>
          <Text style={styles.text}>₦</Text>
          <TextInput style={styles.text} keyboardType="number-pad">
            0.00
          </TextInput>
        </View>
      </AvatarSection>
      <Text>Send Cash</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  text: {
    alignItems: 'center',
    fontSize: 40,
    fontFamily: 'OpenSans-Bold',
    color: '#212540',
  },
  layout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default SendReceive;

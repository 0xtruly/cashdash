import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Layout from '../Layout';
import AvatarSection from '../components/AvatarSection';
import { Avatar } from 'react-native-elements';
import Materialicons from 'react-native-vector-icons/MaterialCommunityIcons';

const Reward = () => {
  return (
    <Layout>
      <AvatarSection avatar height="40%">
        <Avatar
          source={{
            uri:
              'https://res.cloudinary.com/dcp4ezo2a/image/upload/f_auto,q_auto/v1593646061/Gift.png',
          }}
          size="xlarge"
          // containerStyle={{ borderColor: 'white', borderWidth: 5 }}
        />
      </AvatarSection>
      <View style={styles.content}>
        <Text style={styles.text}>Share your invite code</Text>
        <View style={styles.share}>
          <Text style={styles.bold}>45HTY</Text>
          <Materialicons name={'share-variant'} size={18} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.bold}>INVITE A FRIEND</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#F2F2F2',
    borderRadius: 30,
    width: 250,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'OpenSans-Light',
    fontSize: 16,
  },
  bold: {
    fontFamily: 'OpenSans-Bold',
  },
  share: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    paddingVertical: 10,
  },
});
export default Reward;

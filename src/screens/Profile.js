import React, { useCallback } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Layout from '../Layout';
import AvatarSection from '../components/AvatarSection';
import { Avatar } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { PROFILE_LIST } from '../utils';
import Materialicons from 'react-native-vector-icons/MaterialCommunityIcons';
import { UserContext } from '../providers/UserProvider';
import { signOut } from '../utils/firebase';

const Profile = ({ navigation }) => {
  const handleSignout = () => {
    const signout = signOut();
    console.log(signout);
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  };
  return (
    <Layout>
      <AvatarSection
        bgColor="#212540"
        top="35%"
        avatar
        height="40%"
        center="center">
        <Avatar
          source={{
            uri:
              'https://res.cloudinary.com/dcp4ezo2a/image/upload/f_auto,q_auto/v1593610517/clive-surreal-9kQBQqY_xrk-unsplash.jpg',
          }}
          size="xlarge"
          rounded
          containerStyle={{
            borderColor: 'white',
            borderWidth: 5,
            shadowColor: 'rgba(0, 0, 0, 0.25)',
            shadowOffset: '0px 4.77733px 4.77733px',
            shadowOpacity: '.25',
            shadowRadius: 1,
            elevation: 9,
          }}
        />
      </AvatarSection>
      <View style={styles.container}>
        <FlatList
          data={PROFILE_LIST}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <View style={[styles.list]}>
                  <View style={styles.title}>
                    <Materialicons
                      style={styles.icons}
                      name={item.icon}
                      size={18}
                    />
                    {item.id === 'a5' ? (
                      <Text style={styles.text} onPress={handleSignout}>
                        {item.name}
                      </Text>
                    ) : (
                      <Text style={styles.text}>{item.name}</Text>
                    )}
                  </View>
                  <Materialicons
                    style={styles.arrow}
                    name={'chevron-right'}
                    size={18}
                  />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 400,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  list: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '78%',
  },
  text: {
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
    fontWeight: 'bold',
  },
  arrow: {
    // direction: 'ltr',
    alignSelf: 'center',
  },
  title: {
    flexWrap: 'nowrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    paddingRight: 10,
  },
});
export default Profile;

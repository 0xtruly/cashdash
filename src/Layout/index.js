import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import AvatarSection from '../components/AvatarSection';

const Layout = ({ children }) => {
  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        {/* <AvatarSection bgColor="#212540" /> */}
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 10,
    // paddingTop: 10,
    backgroundColor: 'white',
    height: '100%',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Layout;

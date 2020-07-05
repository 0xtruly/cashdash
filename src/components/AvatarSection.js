import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const AvatarSection = ({ bgColor, children, top, avatar, height, center }) => {
  return (
    <View
      style={[
        { backgroundColor: bgColor, height: heightPercentageToDP(height) },
        styles.container,
      ]}>
      <View style={styles.avatar}>
        {avatar ? (
          <Avatar
            rounded
            source={{
              uri:
                'https://res.cloudinary.com/dcp4ezo2a/image/upload/f_auto,q_auto/v1593610517/clive-surreal-9kQBQqY_xrk-unsplash.jpg',
            }}
            size="medium"
          />
        ) : null}
      </View>
      <View style={[{ top: top, alignItems: center }, styles.content]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  content: {
    position: 'relative',
  },
  avatar: {
    alignSelf: 'flex-end',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});
export default AvatarSection;

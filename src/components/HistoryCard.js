import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

const HistoryCard = ({ avatar, date, amount, displayName, credit, debit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Avatar
          source={{
            uri: avatar
              ? avatar
              : 'https://res.cloudinary.com/dcp4ezo2a/image/upload/f_auto,q_auto/v1593610517/clive-surreal-9kQBQqY_xrk-unsplash.jpg',
          }}
          size="medium"
          rounded
        />
        <View style={styles.leftTextContainer}>
          <Text style={styles.name}>
            {displayName ? displayName : 'Sarah Bajo'}
          </Text>
          <Text style={styles.date}>{date ? date : '20 June, 2020'}</Text>
        </View>
      </View>
      <View>
        <Text>{amount ? amount : '₦ 972.00'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: widthPercentageToDP('90%'),
    height: heightPercentageToDP('10%'),
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftTextContainer: {
    paddingLeft: 20,
  },
  name: {
    fontSize: 18,
    fontFamily: 'OpenSans-Bold',
    color: '#212540',
  },
  date: {
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
    color: '#757F8C',
  },
});
export default HistoryCard;

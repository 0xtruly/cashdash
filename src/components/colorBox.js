import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ColorBox = ({ hexCode, colorName }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };
  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };

  return (
    <View style={[boxColor, styles.box]} key={hexCode}>
      <Text style={(styles.boxText, textColor)}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 5,
  },
  boxText: {
    fontWeight: 'bold',
    color: 'white',
  },
});
export default ColorBox;

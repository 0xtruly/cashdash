import React, { useCallback, useEffect, useState } from 'react';
import {
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  View,
  Platform,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { Avatar, Input, Button, SearchBar } from 'react-native-elements';
import PalettePreview from '../components/PalettePreview';
import Layout from '../Layout';
import AvatarSection from '../components/AvatarSection';
import HistoryCard from '../components/HistoryCard';

const _android = Platform.OS === 'android';

const Home = ({ navigation }) => {
  const [palettes, setpalettes] = useState([]);
  const [isRefreshing, setisRefreshing] = useState(false);
  const getPalettes = useCallback(async () => {
    const allPalettes = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );

    if (allPalettes.ok) {
      const _palettes = await allPalettes.json();
      setpalettes(_palettes);
      ``;
    }
  }, []);

  useEffect(() => {
    getPalettes();
  }, []);

  const handleRefresh = useCallback(async () => {
    setisRefreshing(true);
    await getPalettes();
    setTimeout(() => {
      setisRefreshing(false);
    }, 1000);
  }, []);

  return (
    // <FlatList
    //   style={styles.list}
    //   data={palettes}
    //   keyExtractor={(item) => item.paletteName}
    //   renderItem={({ item }) => (
    //     <PalettePreview
    //       handlePress={() => navigation.navigate('ColorPalette', item)}
    //       palette={item}
    //     />
    //   )}
    //   ListEmptyComponent={() => <Text>No data at this time</Text>}
    //   refreshing={isRefreshing}
    //   onRefresh={handleRefresh}
    // />
    <Layout>
      <AvatarSection avatar height="40%" center="center">
        <View>
          <Text style={styles.text}>₦0</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Fund wallet"
            // onPress={() => handleSubmit(dispatch)}
            buttonStyle={styles.button}
            containerStyle={{ alignItems: 'center' }}
            titleStyle={{ color: '#212540', fontFamily: 'OpenSans-Bold' }}
          />
          <Button
            title="Withdraw"
            // onPress={() => handleSubmit(dispatch)}
            buttonStyle={styles.button}
            containerStyle={{ alignItems: 'center' }}
            titleStyle={{ color: '#212540', fontFamily: 'OpenSans-Bold' }}
          />
        </View>
      </AvatarSection>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomTitle}>History</Text>
        <View>
          {_android ? (
            <SearchBar
              placeholder="Search history"
              platform="android"
              containerStyle={styles.searchbarContainer}
              inputContainerStyle={styles.inputContainer}
            />
          ) : (
            <SearchBar
              platform="ios"
              containerStyle={styles.searchbarContainer}
              inputContainerStyle={styles.inputContainer}
            />
          )}
          <HistoryCard />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white',
    padding: 10,
  },
  text: {
    alignItems: 'center',
    fontSize: 40,
    fontFamily: 'OpenSans-Bold',
    color: '#212540',
  },
  button: {
    width: 149,
    height: 44,
    backgroundColor: '#F2F2F2',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 60,
  },
  bottomContainer: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('55%'),
    backgroundColor: '#F2F2F2',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 9,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  bottomTitle: {
    padding: 20,
    fontSize: 24,
    fontFamily: 'OpenSans-Bold',
    color: '#212540',
  },
  searchbarContainer: {
    height: 32,
    width: widthPercentageToDP('90%'),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  inputContainer: {
    alignItems: 'center',
    // justifyContent: 'center',// justifyContent: 'center',
  },
});

export default Home;

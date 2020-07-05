import React, { useCallback, useEffect, useState } from 'react';
import {
  Text,
  FlatList,
  Dimensions,
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
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import Layout from '../Layout';
import AvatarSection from '../components/AvatarSection';

const _android = Platform.OS === 'android';
const screenWidth = Dimensions.get('window').width;

const Statistics = ({ navigation }) => {
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
      <AvatarSection avatar height="50%">
        <View>
          <Text style={styles.text}>Statistics</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <LineChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={widthPercentageToDP('90%')} // from react-native
            height={heightPercentageToDP('40%')}
            yAxisLabel="₦"
            yAxisSuffix="k"
            yAxisInterval={0.5} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#212540',
              backgroundGradientFrom: '#212540',
              backgroundGradientTo: '#212540',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 10,
              },
              propsForDots: {
                r: '5',
                strokeWidth: '1',
                stroke: '#ffffff',
              },
            }}
            bezier
            style={{
              marginVertical: 10,
              borderRadius: 8,
            }}
          />
        </View>
      </AvatarSection>
    </Layout>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white',
    padding: 10,
  },
  text: {
    fontSize: 36,
    fontFamily: 'OpenSans-Bold',
    color: '#212540',
    paddingLeft: 15,
    paddingVertical: 15,
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

export default Statistics;

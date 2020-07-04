import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/AntDesign';
import Home from '../screens/Home';
import Statistics from '../screens/Statistics';
import SendReceive from '../screens/SendReceive';
import Reward from '../screens/Reward';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const TabIcons = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          size = 18;
          if (route.name === 'Home') {
            // iconName = focused ? 'md-home' : 'md-home';
            iconName = 'home';
          } else if (route.name === 'Statistics') {
            iconName = 'linechart';
          } else if (route.name === 'SendReceive') {
            iconName = 'swap';
          } else if (route.name === 'Reward') {
            iconName = 'gift';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#1528A4',
        inactiveTintColor: '#BDBDBD',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Statistics" component={Statistics} />
      <Tab.Screen name="SendReceive" component={SendReceive} />
      <Tab.Screen name="Reward" component={Reward} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabIcons;

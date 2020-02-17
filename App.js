import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import MainScreen from './screens/MainScreen';
import WriteScreen from './screens/WriteScreen';
import DetailScreen from './screens/DetailScreen';

const BaseNavi = createBottomTabNavigator({
  MainScreen: {
    screen: MainScreen,
  },
  WriteScreen: {
    screen: WriteScreen,
  },
  DetailScreen: {
    screen: DetailScreen,
  },
})

const MyNavi = createAppContainer(BaseNavi);

export default function App() {
  return (
    <View style={styles.container}>
      <MyNavi/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

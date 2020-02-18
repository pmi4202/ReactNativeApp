import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import {  createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MainScreen from './screens/MainScreen';
import WriteScreen from './screens/WriteScreen';
import DetailScreen from './screens/DetailScreen';
import { SimpleLineIcons , Foundation } from '@expo/vector-icons'; 

const BaseNavi = createBottomTabNavigator({
  MainScreen: {//label 이름(screen 이름 지정)
    screen: MainScreen,
  },
  DetailScreen: {
    screen: DetailScreen,
    navigationOptions : {
      tabBarIcon : ({tintColor})=>(
        <SimpleLineIcons name = "book-open" size = {25} style={{color:tintColor}}/>
      ),
    },
  },
  WriteScreen: {
    screen: WriteScreen,
    navigationOptions : {
      tabBarIcon : ({tintColor})=>(
        <Foundation name = "pencil" size = {30} style={{color:tintColor}}/>
      )
    },
  },
},
{
  tabBarOptions:{
    showLabel: false
  }
}
)

const BaseNavi2 = createStackNavigator(
  {
    Write: WriteScreen,
    Tab: BaseNavi,
    Detail : DetailScreen,
  },
  {
    initialRouteName: 'Tab',
    //mode : 'modal', //IOS만 해당
    headerMode :'none', //직접 만들어 줄거임
  }
)

const MyNavi = createAppContainer(BaseNavi2);

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

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigators from './src/routes/Navigators/MainStackNavigators';

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigators />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

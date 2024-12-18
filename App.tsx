import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigators from './src/routes/Navigators/MainStackNavigators';
import {Provider} from 'react-redux';
import Store from './src/Redux/store/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <MainStackNavigators />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});

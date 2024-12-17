import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../constants/Screen';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate(ScreenNames.Login)}>
        <Text>Go to Route</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

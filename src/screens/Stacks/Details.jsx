import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../constants/Screen';

const Details = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Details</Text>
      <TouchableOpacity onPress={() => navigation.navigate(ScreenNames.Home)}>
        <Text>Go to Route</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});

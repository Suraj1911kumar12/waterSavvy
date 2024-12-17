import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AuthLayoutStyles from '../../Styles/AuthLayoutStyles';
import Icon from 'react-native-vector-icons/Entypo';
import {Color} from '../../constants/Color';
import {useNavigation} from '@react-navigation/native';

const Auth_Layout = ({children, title = ''}) => {
  const navigation = useNavigation();
  return (
    <View style={AuthLayoutStyles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={30} color={Color.primary} />
      </Pressable>
      <Text style={AuthLayoutStyles.headTitle}>{title}</Text>
      {children}
    </View>
  );
};

export default Auth_Layout;

import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Auth_Layout from '../../components/Layouts/Auth_Layout';
import CustomeInput from '../../components/form_components/CustomeInput';
import Btn from '../../components/UI_Components/buttons/Btn';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../constants/Screen';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  return (
    <Auth_Layout title={'Login'}>
      <View>
        <CustomeInput
          placeholder="Enter Email"
          onChnage={setEmail}
          title={'Email'}
          value={email}
        />
      </View>
      <Btn onPress={() => navigation.navigate(ScreenNames.Home)} />
    </Auth_Layout>
  );
};

export default Login;

const styles = StyleSheet.create({});

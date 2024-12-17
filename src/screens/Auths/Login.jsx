import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Auth_Layout from '../../components/Layouts/Auth_Layout';
import CustomeInput from '../../components/form_components/CustomeInput';

const Login = () => {
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
    </Auth_Layout>
  );
};

export default Login;

const styles = StyleSheet.create({});

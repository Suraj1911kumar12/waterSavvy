import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Color} from '../../constants/Color';

const CustomeInput = ({type = '', title, onChnage, value, placeholder}) => {
  return (
    <View
      style={{
        padding: 5,
        borderWidth: 1,
        borderColor: Color.white,
        marginBottom: 10,
        backgroundColor: Color.white,
        elevation: 5,
        borderRadius: 5,
        fontSize: 16,
        color: Color.black,
        paddingHorizontal: 15,
        shadowColor: '#000',
      }}>
      <Text
        style={{
          color: Color.grey,
        }}>
        {title}
      </Text>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: '#000',
        }}
        onChangeText={onChnage}
        value={value}
        placeholder={placeholder}
        // keyboardType={type }
      />
    </View>
  );
};

export default CustomeInput;

const styles = StyleSheet.create({});

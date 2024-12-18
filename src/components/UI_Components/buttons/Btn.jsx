import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color} from '../../../constants/Color';

const Btn = ({
  title = 'Submit',
  bgShow = false,
  onPress,
  textColor = '#FFFFFF',
  borderColor = Color.blue,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: bgShow ? Color.blue : 'transparent',
          borderColor: bgShow ? 'transparent' : borderColor,
          borderWidth: bgShow ? 0 : 2,
        },
      ]}
      onPress={onPress}>
      <Text
        style={[styles.buttonText, {color: bgShow ? textColor : borderColor}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Color.blue,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

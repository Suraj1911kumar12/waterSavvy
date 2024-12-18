import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const Header = () => {
  const selector = useSelector(state => state.cartItem);
  console.log('Selector: ', selector);
  const cart = selector.cart;
  const price = selector.price;
  return (
    <View
      style={{
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        elevation: 10,
      }}>
      <Text>{cart.length}</Text>
      <Text>{price}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});

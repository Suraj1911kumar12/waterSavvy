import {Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Color} from '../../constants/Color';
import {useSelector} from 'react-redux';
import Product from './Product';

const Home = () => {
  const navigation = useNavigation();
  const selector = useSelector(state => state);
  const [cartlength, setCartLength] = useState(0);
  console.log(selector.cartItem, 'selector.cartItem');

  useEffect(() => {
    console.log('Hitted!');

    setCartLength(selector.cartItem?.length);
  }, [selector.cartItem]);

  return (
    <View>
      <View
        style={{
          backgroundColor: Color.darkGray,
          padding: 20,
          margin: 10,
          borderRadius: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View />
        <View>
          <Text
            style={{
              color: Color.white,
              fontWeight: 'bold',
              fontSize: 20,
              marginLeft: 10,
              marginBottom: 10,
            }}>
            Home
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: Color.white,
              fontWeight: 'bold',
              fontSize: 20,
              marginLeft: 10,
              marginBottom: 10,
            }}>
            Cart ({cartlength})
          </Text>
        </View>
      </View>
      <Product />
    </View>
  );
};

export default Home;

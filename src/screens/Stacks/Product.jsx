import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Color} from '../../constants/Color';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, increaseItem} from '../../Redux/slices/cartItems';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../constants/Screen';
import {SCREEN_HEIGHT} from '../../constants/Size';

// const products = [
//   {
//     id: '1',
//     name: 'Product 1',
//     price: '$10.00',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: '2',
//     name: 'Product 2',
//     price: '$20.00',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: '3',
//     name: 'Product 3',
//     price: '$30.00',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: '4',
//     name: 'Product 4',
//     price: '$40.00',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: '5',
//     name: 'Product 5',
//     price: '$50.00',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: '6',
//     name: 'Product 6',
//     price: '$60.00',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: '7',
//     name: 'Product 7',
//     price: '$70.00',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: '8',
//     name: 'Product 8',
//     price: '$80.00',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: '9',
//     name: 'Product 9',
//     price: '$90.00',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: '10',
//     name: 'Product 10',
//     price: '$100.00',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: '11',
//     name: 'Product 11',
//     price: '$110.00',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: '12',
//     name: 'Product 12',
//     price: '$120.00',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: '13',
//     name: 'Product 13',
//     price: '$130.00',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: '14',
//     name: 'Product 14',
//     price: '$140.00',
//     image: 'https://via.placeholder.com/150',
//   },
// ];

const Product = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const selector = useSelector(state => state);
  const [cartItems, setCartItems] = useState([]);

  const getProduct = () => {
    try {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(items => {
          console.log('Items fetched:', items);

          setProducts(items);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    setCartItems(selector.cartItem);
  }, [selector.cartItem]);

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };
  const handleIncrease = item => {
    dispatch(increaseItem(item));
  };
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(ScreenNames.productDetails, {
          id: item,
        })
      }
      style={styles.productCard}>
      <Image source={{uri: item.image}} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      {cartItems.find(e => e.id === item.id) ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',

            gap: 4,
            paddingHorizontal: 10,
            marginBottom: 10,
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleAddToCart(item);
            }}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              handleIncrease(item);
            }}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleAddToCart(item);
          }}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: SCREEN_HEIGHT,
    backgroundColor: Color.base,
    paddingTop: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  listContainer: {
    marginBottom: 100,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 10,
    padding: 10,
    width: '45%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  productName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2D9CDB',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

import {StyleSheet} from 'react-native';
import {Color} from '../constants/Color';

const AuthLayoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Color.lightIndigo,
  },
  headTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    marginVertical: 20,
  },
});

export default AuthLayoutStyles;

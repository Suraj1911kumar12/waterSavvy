import {StyleSheet} from 'react-native';
import {Color} from '../../constants/Color';

const WelcomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.base,
    position: 'relative',
  },
  backgroundImage: {
    height: 500,
    justifyContent: 'center',
    width: '100%',
    opacity: 0.3,
    position: 'absolute',
  },
  orbAIImage: {
    width: 180,
    height: 180,
    marginBottom: 30,
    alignSelf: 'center',
  },
  mainContainer: {
    padding: 20,
    borderRadius: 10,
    width: '100%',
    height: '60%',
    justifyContent: 'center',
  },
  textContainer: {
    width: '100%',
    height: `25%`,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 'auto',
  },
  getStartedContainer: {
    marginVertical: 5,
  },
});

export default WelcomeStyle;

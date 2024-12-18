import {Dimensions, StyleSheet} from 'react-native';
import {Color} from '../../constants/Color';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constants/Size';
const {width, height} = Dimensions.get('window');

const WelcomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.base,
    position: 'relative',
  },
  backgroundImage: {
    justifyContent: 'center',
    width: '100%',
    opacity: 0.3,
    position: 'absolute',
    overflow: 'visible',
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
  title: {
    fontSize: SCREEN_WIDTH * 0.08,
    fontWeight: 'bold',
    color: Color.darkGray,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: SCREEN_WIDTH * 0.045,
    color: Color.lightGray,
    textAlign: 'center',
  },
  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height * 0.02,
    width: '100%',
    paddingHorizontal: SCREEN_WIDTH * 0.05,
  },
  dividerLine: {
    height: 1,
    width: '40%',
    backgroundColor: Color.grey,
  },
  dividerText: {
    fontSize: SCREEN_WIDTH * 0.03,
    color: Color.grey,
    marginHorizontal: SCREEN_WIDTH * 0.02,
    textTransform: 'uppercase',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: SCREEN_WIDTH * 0.05,
    alignItems: 'center',
    marginTop: SCREEN_HEIGHT * 0.01,
    width: '100%',
  },
  socialButton: {
    alignItems: 'center',
    padding: SCREEN_WIDTH * 0.03,
    backgroundColor: '#F5F5F5',
    borderRadius: SCREEN_WIDTH * 0.1,
    width: SCREEN_WIDTH * 0.13,
    height: SCREEN_WIDTH * 0.13,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  socialIcon: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
  },
  accountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 5,
    marginTop: SCREEN_HEIGHT * 0.02,
    width: '100%',
    paddingHorizontal: SCREEN_WIDTH * 0.2,
    marginBottom: SCREEN_HEIGHT * 0.03,
  },
  haveAccountText: {
    fontSize: SCREEN_WIDTH * 0.04,
    color: '#7A7A7A',
  },
  welcomeBackText: {
    fontSize: SCREEN_WIDTH * 0.04,
    fontWeight: 'bold',
    color: Color.blue,
    textDecorationLine: 'underline',
  },
  backgroundOrb: {
    position: 'absolute',
    width: '120%',
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    opacity: 0.5,
  },
});

export default WelcomeStyle;

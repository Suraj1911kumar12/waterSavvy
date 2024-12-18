import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import WelcomeStyle from '../../../Styles/welcome/WelcomeStyle';
import Btn from '../../../components/UI_Components/buttons/Btn';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../../constants/Screen';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../constants/Size';
import {Color} from '../../../constants/Color';
import {useDispatch} from 'react-redux';

const {width, height} = Dimensions.get('window');

const SocialLoginButton = ({image}) => {
  return (
    <View style={WelcomeStyle.socialButton}>
      <Image source={image} style={WelcomeStyle.socialIcon} />
    </View>
  );
};

const Welcome1 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={WelcomeStyle.container}>
      {/* Background Image */}
      <Image
        source={require('../../../../assets/images/Group_34.png')}
        resizeMode="stretch"
        style={[
          WelcomeStyle.backgroundImage,
          {
            height: SCREEN_HEIGHT * 0.5,
          },
        ]}
      />

      {/* Title and Subtitle */}
      <View style={WelcomeStyle.textContainer}>
        <Text style={WelcomeStyle.title}>WaterSavvy</Text>
        <Text style={WelcomeStyle.subtitle}>Visualize Water Data</Text>
      </View>
      <View style={WelcomeStyle.mainContainer}>
        {/* Orb AI Image */}
        <Image
          source={require('../../../../assets/images/Background_Orb.png')}
          resizeMode="cover"
          style={WelcomeStyle.backgroundOrb}
        />
        <Image
          source={require('../../../../assets/images/ORB_AI.png')}
          resizeMode="cover"
          style={WelcomeStyle.orbAIImage}
        />

        {/* Buttons */}
        <View
          style={[
            WelcomeStyle.getStartedContainer,
            {
              paddingTop: 150,
            },
          ]}>
          <Btn
            bgShow
            title="Start Browsing"
            onPress={() => navigation.navigate(ScreenNames.welcome2)}
          />
          <Btn title="Sign Up" />
        </View>
      </View>
      <View style={[WelcomeStyle.accountContainer]}>
        <Text style={WelcomeStyle.haveAccountText}>Have an account?</Text>
        <Text style={WelcomeStyle.welcomeBackText}>Welcome Back</Text>
      </View>
    </SafeAreaView>
  );
};

export default Welcome1;

const styles = StyleSheet.create({
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
    marginVertical: SCREEN_HEIGHT * 0.02,
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
    gap: width * 0.05,
    alignItems: 'center',
    marginTop: height * 0.01,
    width: '100%',
  },
  socialButton: {
    alignItems: 'center',
    padding: width * 0.03,
    backgroundColor: '#F5F5F5',
    borderRadius: SCREEN_WIDTH * 0.1,
    width: width * 0.13,
    height: width * 0.13,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {SCREEN_WIDTH: 0, SCREEN_HEIGHT: 2},
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
    marginTop: height * 0.02,
    width: '100%',
    paddingHorizontal: SCREEN_WIDTH * 0.2,
    marginBottom: SCREEN_HEIGHT * 0.03,
  },
  haveAccountText: {
    fontSize: width * 0.04,
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
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    opacity: 0.5,
  },
});

import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WelcomeStyle from '../../../Styles/welcome/WelcomeStyle';
import {Color} from '../../../constants/Color';
import Btn from '../../../components/UI_Components/buttons/Btn';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../../constants/Screen';
import google from '../../../../assets/images/google.png';
import Microsoft from '../../../../assets/images/Microsoft.png';
import Iphone from '../../../../assets/images/iphone.png';
const SocialLoginButton = ({icon, name, onPress, image}) => {
  return (
    <View style={styles.socialButton}>
      {/* <FontAwesome name={icon} size={24} color={Color.grey} /> */}
      <Image source={image} />
    </View>
  );
};

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={WelcomeStyle.container}>
      {/* Background Image */}
      <Image
        source={require('../../../../assets/images/Group_34.png')}
        resizeMode="cover"
        style={WelcomeStyle.backgroundImage}
      />

      {/* Title and Subtitle */}
      <View style={WelcomeStyle.textContainer}>
        <Text style={styles.title}>WaterSavvy</Text>
        <Text style={styles.subtitle}>Visualize Water Data</Text>
      </View>
      <View style={WelcomeStyle.mainContainer}>
        {/* Orb AI Image */}
        <Image
          source={require('../../../../assets/images/ORB_AI.png')}
          resizeMode="cover"
          style={WelcomeStyle.orbAIImage}
        />

        {/* Buttons */}
        <View style={WelcomeStyle.getStartedContainer}>
          <Btn
            bgShow
            title="Start Browsing"
            onPress={() => navigation.navigate(ScreenNames.welcome1)}
          />
          <Btn title="Sign Up" />
        </View>

        {/* Divider with "or" */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or sign up with</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Social Login Buttons */}
        <View style={styles.socialLoginContainer}>
          <SocialLoginButton icon="google" name="Google" image={google} />
          <SocialLoginButton icon="apple" name="Apple" image={Iphone} />
          <SocialLoginButton
            icon="windows"
            name="Microsoft"
            image={Microsoft}
          />
        </View>
      </View>
      <View style={styles.accountContainer}>
        <Text style={styles.haveAccountText}>Have an account?</Text>
        <Text style={styles.welcomeBackText}>Welcome Back</Text>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Color.darkGray,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: Color.lightGray,
    textAlign: 'center',
  },
  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  dividerLine: {
    height: 1,
    width: '40%',
    backgroundColor: Color.grey,
  },
  dividerText: {
    fontSize: 12,
    color: Color.grey,
    marginHorizontal: 8,
    textTransform: 'uppercase',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F5F5F5',
    // borderRadius: 50,
    borderRadius: 100,
    width: 50,
    height: 50,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  socialButtonText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '600',
    color: Color.black,
  },
  accountContainer: {
    height: '5%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 20,
    width: '100%',
    gap: 1,
    paddingHorizontal: 100,
    marginBottom: 20,
  },
  haveAccountText: {
    fontSize: 16,
    color: '#7A7A7A', // Light grey for subtle text
  },
  welcomeBackText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Color.blue, // Black for emphasis
    textDecorationLine: 'underline',
  },
});

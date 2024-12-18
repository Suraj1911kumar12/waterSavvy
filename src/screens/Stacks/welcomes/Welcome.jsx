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
import {Color} from '../../../constants/Color';
import Btn from '../../../components/UI_Components/buttons/Btn';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../../constants/Screen';
import google from '../../../../assets/images/google.png';
import Microsoft from '../../../../assets/images/Microsoft.png';
import Iphone from '../../../../assets/images/iphone.png';

const {width, height} = Dimensions.get('window');

const SocialLoginButton = ({image}) => {
  return (
    <View style={WelcomeStyle.socialButton}>
      <Image source={image} style={WelcomeStyle.socialIcon} />
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
        style={[
          WelcomeStyle.backgroundImage,
          {
            height: height * 0.6,
            // top: -100,
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
        <View style={WelcomeStyle.getStartedContainer}>
          <Btn
            bgShow
            title="Start Browsing"
            onPress={() => navigation.navigate(ScreenNames.welcome1)}
          />
          <Btn title="Sign Up" />
        </View>

        {/* Divider with "or" */}
        <View style={WelcomeStyle.dividerContainer}>
          <View style={WelcomeStyle.dividerLine} />
          <Text style={WelcomeStyle.dividerText}>or sign up with</Text>
          <View style={WelcomeStyle.dividerLine} />
        </View>

        {/* Social Login Buttons */}
        <View style={WelcomeStyle.socialLoginContainer}>
          <SocialLoginButton image={google} />
          <SocialLoginButton image={Iphone} />
          <SocialLoginButton image={Microsoft} />
        </View>
      </View>
      <View style={WelcomeStyle.accountContainer}>
        <Text style={WelcomeStyle.haveAccountText}>Have an account?</Text>
        <Text style={WelcomeStyle.welcomeBackText}>Welcome Back</Text>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({});

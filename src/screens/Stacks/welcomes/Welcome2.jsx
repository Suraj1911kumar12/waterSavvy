import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import WelcomeStyle from '../../../Styles/welcome/WelcomeStyle';
import {Color} from '../../../constants/Color';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {SCREEN_HEIGHT} from '../../../constants/Size';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../../constants/Screen';

const SocialLoginButton = ({icon, name, onPress}) => {
  return (
    <View style={WelcomeStyle.socialButton}>
      <FontAwesome name={icon} size={24} color={Color.grey} />
    </View>
  );
};

const Welcome2 = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(ScreenNames.Login)}
      style={WelcomeStyle.container}>
      {/* Background Image */}
      <Image
        source={require('../../../../assets/images/Group_34.png')}
        resizeMode="cover"
        style={[
          WelcomeStyle.backgroundImage,
          {
            height: SCREEN_HEIGHT * 0.7,
          },
        ]}
      />

      {/* Title and Subtitle */}
      <View style={WelcomeStyle.textContainer}>
        <Text style={WelcomeStyle.title}>WaterSavvy </Text>
        <Text style={WelcomeStyle.subtitle}>Visualize Water Data</Text>
      </View>
      <View style={WelcomeStyle.mainContainer}>
        <Image
          source={require('../../../../assets/images/Background_Orb.png')}
          resizeMode="cover"
          style={WelcomeStyle.backgroundOrb}
        />
        {/* Orb AI Image */}

        <Image
          source={require('../../../../assets/images/ORB_AI.png')}
          resizeMode="cover"
          style={{width: 300, height: 300, alignSelf: 'center'}}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Welcome2;

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: Color.darkGray,
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 18,
//     color: Color.lightGray,
//     textAlign: 'center',
//   },
//   dividerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: 20,
//     width: '100%',
//     paddingHorizontal: 20,
//   },
//   dividerLine: {
//     height: 1,
//     width: '40%',
//     backgroundColor: Color.grey,
//   },
//   dividerText: {
//     fontSize: 12,
//     color: Color.grey,
//     marginHorizontal: 8,
//     textTransform: 'uppercase',
//   },
//   socialLoginContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     marginTop: 10,
//     width: '100%',
//   },
//   socialButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//     backgroundColor: '#F5F5F5',
//     // borderRadius: 50,
//     borderRadius: 100,
//     width: 50,
//     height: 50,
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   socialButtonText: {
//     marginLeft: 8,
//     fontSize: 14,
//     fontWeight: '600',
//     color: Color.black,
//   },
//   accountContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//     width: '100%',
//     gap: 1,
//     paddingHorizontal: 100,
//     marginBottom: 20,
//   },
//   haveAccountText: {
//     fontSize: 16,
//     color: '#7A7A7A', // Light grey for subtle text
//   },
//   welcomeBackText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: Color.blue, // Black for emphasis
//     textDecorationLine: 'underline',
//   },
// });

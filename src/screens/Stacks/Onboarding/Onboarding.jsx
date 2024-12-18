import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useNavigation} from '@react-navigation/native';
import {Color} from '../../../constants/Color';
import {ScreenNames} from '../../../constants/Screen';
import image from '../../../../assets/images/ORB_AI.png';
import {SCREEN_WIDTH} from '../../../constants/Size';

const Onboarding = () => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide index

  const data = [
    {
      id: 1,
      image: image,
      title: '#1 Water aggregator is built on our strong partnerships.',
      description:
        'We collaborate with leading water utility providers to ensure you receive the most accurate and reliable information.',
    },
    {
      id: 2,
      image: image,
      title: 'Water Savvy Expert in Your Pocket!',
      description:
        'Discover the world’s largest water quality resource at your fingertips.',
    },
    {
      id: 3,
      image: image,
      title: 'Water Quality Forecast',
      description:
        'Discover a new level of confidence and convenience in managing your water needs.',
    },
  ];

  const renderSlides = ({item}) => {
    return (
      <View style={styles.slideContainer}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    );
  };

  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        {/* Dots */}
        <View style={styles.dotContainer}>
          {data.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dotStyle,
                activeIndex === index && styles.activeDotStyle,
              ]}
            />
          ))}
        </View>

        {/* Buttons */}
        <View style={styles.buttonWrapper}>
          {activeIndex === data.length - 1 ? (
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.navigate(ScreenNames.welcome)}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => setActiveIndex(activeIndex + 1)}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <AppIntroSlider
        data={data}
        renderItem={renderSlides}
        renderPagination={renderPagination}
        onSlideChange={index => setActiveIndex(index)} // Update activeIndex on slide change
        onDone={() => navigation.navigate(ScreenNames.welcome)}
      />
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Color.base,
  },
  slideContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.base,
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 80,
  },
  image: {
    width: SCREEN_WIDTH * 0.4,
    height: SCREEN_WIDTH * 0.4,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 2,
  },
  title: {
    color: Color.blue,
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    color: Color.textBlack,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '20%',
  },
  dotContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dotStyle: {
    backgroundColor: Color.darkGray,
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDotStyle: {
    backgroundColor: Color.blue,
    width: 20,
    height: 8,
    borderRadius: 4,
  },
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: Color.blue,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  buttonText: {
    color: Color.white,
    fontWeight: '700',
    fontSize: 16,
  },
});

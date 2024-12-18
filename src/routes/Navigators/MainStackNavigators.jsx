import {StatusBar} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenNames} from '../../constants/Screen';
import Home from '../../screens/Stacks/Home';
import Details from '../../screens/Stacks/Details';
import Login from '../../screens/Auths/Login';
import Welcome from '../../screens/Stacks/welcomes/Welcome';
import Welcome1 from '../../screens/Stacks/welcomes/Welcome1';
import Welcome2 from '../../screens/Stacks/welcomes/Welcome2';
import Onboarding from '../../screens/Stacks/Onboarding/Onboarding';
import ProductDetails from '../../screens/Stacks/ProductDetails';

const Stack = createStackNavigator();
const MainStackNavigators = () => {
  return (
    <>
      <StatusBar hidden />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={ScreenNames.onboarding} component={Onboarding} />

        <Stack.Screen name={ScreenNames.welcome} component={Welcome} />
        <Stack.Screen name={ScreenNames.welcome1} component={Welcome1} />
        <Stack.Screen name={ScreenNames.welcome2} component={Welcome2} />
        <Stack.Screen name={ScreenNames.Home} component={Home} />
        <Stack.Screen name={ScreenNames.Detail} component={Details} />
        <Stack.Screen name={ScreenNames.Login} component={Login} />
        <Stack.Screen
          name={ScreenNames.productDetails}
          component={ProductDetails}
        />
      </Stack.Navigator>
    </>
  );
};

export default MainStackNavigators;

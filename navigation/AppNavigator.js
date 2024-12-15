import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../src/screens/login';
import SignUp1 from '../src/screens/SingUp1';
import SignUp2 from '../src/screens/SingUp2';
import SignUp3 from '../src/screens/SingUp3';
import HomeScreen from '../src/HomeScreen';
import GuruScreen from '../src/GuruScreen';
import MuridScreen from '../src/MuridScreen';
import SignUpScreenGuru from '../src/screens/SingUpGuru';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name="SingUp1" component={SignUp1} options={{headerShown: false}}/>
      <Stack.Screen name="SingUp2" component={SignUp2} options={{headerShown: false}}/>
      <Stack.Screen name="SingUp3" component={SignUp3} options={{headerShown: false}}/>
      <Stack.Screen name="SingUpGuru" component={SignUpScreenGuru} options={{headerShown: false}}/>

      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Guru" component={GuruScreen} />
      <Stack.Screen name="Murid" component={MuridScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default AppNavigator;

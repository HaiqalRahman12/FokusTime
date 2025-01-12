import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../src/screens/login';
import SignUp1 from '../src/screens/SingUp1';
import SignUp2 from '../src/screens/SingUp2';
import SignUp3 from '../src/screens/SingUp3';
import HomeScreen from '../src/HomeScreen';
import GuruScreen from '../src/GuruScreen';
import MuridNavigator from '../src/murid/MuridNavigator';

import IsiKelas from '../src/murid/kelas/IsiKelas';
import DetailKelasScreen from '../src/murid/kelas/DetailKelasScreen';
import SignUpScreenGuru from '../src/screens/SingUpGuru';
import Notifikasi from '../src/murid/Notifikasi';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="TABMurid">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SingUp1" component={SignUp1} options={{ headerShown: false }} />
      <Stack.Screen name="SingUp2" component={SignUp2} options={{ headerShown: false }} />
      <Stack.Screen name="SingUp3" component={SignUp3} options={{ headerShown: false }} />
      <Stack.Screen name="Daftar" component={SignUpScreenGuru} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Guru" component={GuruScreen} />
      <Stack.Screen name="TABMurid" component={MuridNavigator} options={{ headerShown: false }} />

{/* kelas */}
      {/* <Stack.Screen name="IsiKelas" component={IsiKelas}   />
      <Stack.Screen name="DetailKelas" component={DetailKelasScreen}  /> */}
      <Stack.Screen name="Notif" component={Notifikasi} options={{ headerShown: false, animation: "none" }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

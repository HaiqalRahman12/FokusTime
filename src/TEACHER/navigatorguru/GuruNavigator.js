import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GuruScreen from '../../GuruScreen';
import DetailKelasGuru from '../components/ComponenDetail';
import ChatScreen from '../../components/Chat';
import ChatScreenGuru from '../components/ChatGuru';


const Stack = createStackNavigator();

const GuruNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={GuruScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="DetailKelas" component={DetailKelasGuru} options={{ headerShown: false,animation: "none" }}/>
        <Stack.Screen name="ChatGuru" component={ChatScreenGuru} options={{ headerShown: false,animation: "none" }}/>
        {/* <Stack.Screen name="DetailKelasGuru" component={Notifikasi} options={{ headerShown: false, animation: "none" }} /> */}
    </Stack.Navigator>
  );
};

export default GuruNavigator;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import MuridScreen from '../MuridScreen';
import KelasScreen from '../screensmurid/kelas';

import IsiKelas from './kelas/IsiKelas';
import DetailKelasScreen from './kelas/DetailKelasScreen';
import Pencapaian from '../screensmurid/Pencapain';
import Pengaturan from '../screensmurid/Pengaturan';
import ChatScreen from '../components/Chat';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const NamesStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="IsiKelas" component={KelasScreen} options={{ headerShown: false ,animation: "none"}} />
    <Stack.Screen name="DetailKelas" component={DetailKelasScreen} options={{ headerShown: false,animation: "none" }} />
    <Stack.Screen name="Chat" component={ChatScreen} options={{ headerShown: false,animation: "none" }} />
  </Stack.Navigator>
);

const MuridNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;

          switch (route.name) {
            case 'Home':
              iconSource = focused
                ? require('../../assets/tabhome2.png')
                : require('../../assets/tabhome1.png');
              break;
            case 'Kelas':
              iconSource = focused 
                ? require('../../assets/tabkelas2.png')
                : require('../../assets/tabkelas1.png')
              break;
            case 'Pencapain':
              iconSource = focused 
                ? require('../../assets/tabpencapain2.png')
                : require('../../assets/tabpencapain1.png')
              break;
            case 'Pengaturan':
              iconSource = focused 
                ? require('../../assets/tabpengaturan2.png')
                : require('../../assets/tabpengaturan1.png')
              break;

            default:
              iconSource = require('../../assets/tabhome1.png');
          }

          return (
            <Image
              source={iconSource}
              style={{  }}
            />
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarIconStyle: {
            marginVertical: 10, // Menempatkan ikon di tengah secara vertikal
          },
        tabBarStyle: {
          height: 60, // Tinggi footer/tab bar
          borderTopLeftRadius: 30, // Radius untuk bagian atas kiri
          borderTopRightRadius: 30, // Radius untuk bagian atas kanan
          backgroundColor: 'white', // Warna latar belakang footer (opsional)
          position: 'absolute', // Memastikan radius terlihat
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={MuridScreen}
        options={{
          tabBarLabel: '', // Menghilangkan label teks
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Kelas"
        component={NamesStack}
        options={{
          tabBarLabel: '', // Menghilangkan label teks
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Pencapain"
        component={Pencapaian}
        options={{
          tabBarLabel: '', // Menghilangkan label teks
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Pengaturan"
        component={Pengaturan}
        options={{
          tabBarLabel: '', // Menghilangkan label teks
          headerShown: false
        }}
      />

    </Tab.Navigator>
  );
};



export default MuridNavigator;

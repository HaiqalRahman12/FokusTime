import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Kelasdalam = ({ title, subtitle, totalSiswa, onPress }) => {
  return (
    <View>
      <Text>Tugas</Text>
      <Text>Materi</Text>
      <Text>Siswa</Text> {/*didalamnya ada nama siswa */}
    </View> 
  );
};

export default Kelasdalam;

const styles = StyleSheet.create({
  
});

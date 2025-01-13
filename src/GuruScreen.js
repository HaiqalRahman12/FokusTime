import React, { useState } from 'react';
import { View, Text,Image, FlatList, StyleSheet,ScrollView } from 'react-native';
import KelasGuru from './TEACHER/Kelas';
import HeaderGuru from './TEACHER/components/Header-guru';




const GuruScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderGuru/>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.bawa}>
          <View style={styles.datang}>
          <Image style={{ marginRight: 10}} source={require('../assets/otak.png')} />
          <Text style={{ fontSize: 13,marginTop:10}}>Selamat datang kembali!</Text>
          </View>
          <View style={styles.tulis}>
            
              <Image style={{ marginRight: 10 }} source={require('../assets/bukukecil.png')} />
              <Text style={{ fontSize: 23, fontWeight: 'bold' }}>Kelas</Text>
        </View>
        <View style={{ borderBottomWidth:1,marginBottom:10,marginTop:10 }}/>

        <KelasGuru/>
        

        </View>
      </ScrollView>
    </View>
  );
};

export default GuruScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingVertical: 10,
    paddingBottom: 100, // Tambahkan ruang di bawah agar tidak terhalang footer
  },
  bawa: {
    paddingHorizontal: 20,
  },
  datang:{
    flexDirection: 'row',
    marginBottom:10
  },
  tulis: {
    flexDirection: 'row',
},
});

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ScrollView } from 'react-native';
import Header from '../components/Header';
import CardKelas from '../murid/cardKelas';
import TambahComponent from '../murid/tembahkelas';
import IsiKelas from '../murid/kelas/IsiKelas';
import DiagramBox from '../components/Berlangsung';
import MendaliComponent from '../murid/MedaliHome';


const Pencapaian = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Simulasi sinkronisasi data tugas dari server
    setTasks(['Tugas Matematika', 'Tugas Fisika']);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.bawa}>
          <View style={styles.tulis}>
              <Image style={{ marginRight: 10 }} source={require('../../assets/pencapain.png')} />
              <Text style={{ fontSize: 23, fontWeight: 'bold' }}>Pencapain</Text>
        </View>
        
        <View style={{ borderBottomWidth:1,marginBottom:10,marginTop:10 }}/>
        <Text style={{ fontSize: 23, fontWeight: 'bold' }}>Sedang berlangsung</Text>

        <DiagramBox/>


        <View style={{ borderBottomWidth:1,marginBottom:10,marginTop:10 }}/>
        <Text style={{ fontSize: 23, fontWeight: 'bold' }}>Koleksi</Text>
        
        <MendaliComponent/>
        

        </View>
      </ScrollView>
    </View>
  );
};

export default Pencapaian;

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
  tulis: {
    flexDirection: 'row',
},
});

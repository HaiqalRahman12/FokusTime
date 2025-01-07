import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ScrollView } from 'react-native';
import Header from './components/Header';
import TugasComponent from './murid/TugasHome';
import KelasComponent from './murid/KelasHome';
import DatangComponent from './murid/datang';
import MedaliComponent from './murid/MedaliHome';
import TambahComponent from './murid/tembahkelas';

const MuridScreen = () => {
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
            <Image style={{ marginRight: 10 }} source={require('../assets/otak.png')} />
            <Text style={{ fontSize: 23 }}>Selamat datang kembali!</Text>
          </View>

          <DatangComponent />

          <View style={styles.tulis}>
            <Image style={{ marginRight: 10 }} source={require('../assets/waktu.png')} />
            <Text style={{ fontSize: 23, fontWeight: 'bold' }}>Tugas kamu</Text>
          </View>

          <Text>Ada tugas yang menantimu!</Text>
          <TugasComponent />

          <View style={styles.tulis}>
            <Image style={{ marginRight: 10 }} source={require('../assets/bukukecil.png')} />
            <Text style={{ fontSize: 23, fontWeight: 'bold' }}>Kelas</Text>
          </View>
          <Text>Pilih kelas yang ingin kamu pelajari</Text>
          <KelasComponent />

          <View style={styles.tulis}>
            <Image style={{ marginRight: 10 }} source={require('../assets/pencapain.png')} />
            <Text style={{ fontSize: 23, fontWeight: 'bold' }}>Pencapaian</Text>
          </View>
          <Text>Bagus! Tingkatkan terus pencapaianmu!</Text>
          <MedaliComponent />

        </View>
      </ScrollView>
    </View>
  );
};

export default MuridScreen;

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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  taskItem: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  tulis: {
    flexDirection: 'row',
  },
});

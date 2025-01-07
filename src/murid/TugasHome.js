import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TugasComponent = () => {
  return (
    <View style={styles.tugas}>
      <Image style={styles.image} source={require('../../assets/Buku1.png')} />

      <View style={styles.textColumnLeft}>
        <Text style={styles.title}>Matematika</Text>
        <Text style={styles.author}>Wagi Artono</Text>
        <Text style={styles.subtitle}>Trigonametri</Text>
      </View>

      <View style={styles.textColumnRight}>
        <Text style={styles.label}>Tenggat</Text>
        <Text style={styles.date}>27 Oktober 2025</Text>
        <Text style={styles.time}>11.59 PM</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tugas: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#98DED9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    marginBottom:10,
    marginTop:10
  },
  image: {
    marginRight: 10,
    width: 50,
    height: 50,
  },
  textColumnLeft: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start', // Menjadikan teks rata kiri
    marginHorizontal: 5,
  },
  textColumnRight: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end', // Menjadikan teks rata kanan
    marginHorizontal: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 13,
    color: '#666',
    fontStyle: 'italic',
  },
  author: {
    fontSize: 12,
    color: '#999',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF5F5F',
  },
  date: {
    fontSize: 12,
    color: '#666',
  },
  time: {
    fontSize: 12,
    color: '#FFF',
    backgroundColor: '#FF5F5F', // Warna latar belakang yang menarik
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },
});

export default TugasComponent;

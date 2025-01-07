import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SingleBarChart from '../components/diagram';

const MotivasiBox = () => {

  const fetchValues = async () => {
    return { left: 25, right: 50 };
  };


  return (
    <View style={styles.rowContainer}>
       <LinearGradient
            colors={['#C7FFD8', '#98DED9']} // Gradasi dari hijau muda ke putih
            style={styles.container1}
          >
            <Text style={styles.title}>Ayo Belajar!</Text>
            <Text style={styles.subtitle}>Rebahan gak bikin kamu pintar dan kaya raya.</Text>
          </LinearGradient>
      
      <View style={styles.container2}>
        <Image style={styles.image} source={require('../../assets/Award 2.png')} />
        <Text style={styles.title}>Tak Terhentikan!</Text>
        
        <SingleBarChart fetchValues={fetchValues}/>

        <Text style={styles.subtitle1}>Kerjakan tugas sebanyak 50 kali</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    
    margin: 10,
    gap:5
  },
  container1: {
    flex: 1,
    padding: 1,
    backgroundColor: '#FFDDC1',
    borderRadius: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  container2: {
    flex: 1,
    padding: 20,
    backgroundColor: '#98DED9',
    borderRadius: 10,
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    borderWidth:5,
    borderColor:'#161D6F'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  subtitle1: {
    fontSize: 10,
    color: '#555',
    textAlign: 'center',
  },
});

export default MotivasiBox;

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet,Image } from 'react-native';
import Header from './components/Header';

const MuridScreen = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Simulasi sinkronisasi data tugas dari server
    setTasks(['Tugas Matematika', 'Tugas Fisika']);
  }, []);

  return (
    <View style={styles.container}>
      <Header/>
      
      <Text style={styles.title}>Tugas Anda</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.taskItem}>{item}</Text>}
      />
    </View>
  );
};

export default MuridScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
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
  
});

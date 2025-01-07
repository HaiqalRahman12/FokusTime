import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Modal, TouchableOpacity, TextInput } from 'react-native';

const TambahComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [kodeKelas, setKodeKelas] = useState('');

  const handleInput = () => {
    console.log(`Kode kelas yang dimasukkan: ${kodeKelas}`);
    setKodeKelas('');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image style={styles.image} source={require('../../assets/addkelas.png')} />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>x</Text>
            </TouchableOpacity>
            <Text style={styles.title}>GABUNG KELAS</Text>
            <Image style={{height:170,width:170}} source={require('../../assets/singup2.png')} />
            <Text style={styles.label}>Kode Kelas</Text>
            <TextInput 
              style={styles.input}
              placeholder="Masukkan kode kelas"
              value={kodeKelas}
              onChangeText={setKodeKelas}
            />
            <TouchableOpacity 
              style={styles.button} 
              onPress={handleInput}
            >
              <Text style={styles.buttonText}>Tambahkan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 604,
    left: 320,
  },
  image: {
    width: 50,
    height: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#ccc',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TambahComponent;

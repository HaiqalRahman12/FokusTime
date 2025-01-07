import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, TextInput, Button } from 'react-native';

const HeaderEdit = () => {
  const [name, setName] = useState('Maulana Riski');
  const [modalVisible, setModalVisible] = useState(false); // State untuk menampilkan modal
  const [newName, setNewName] = useState(name); // State untuk input nama baru

  // Fungsi untuk membuka modal
  const handleEditName = () => {
    setModalVisible(true);
  };

  // Fungsi untuk menyimpan nama baru
  const handleSaveName = () => {
    setName(newName);
    setModalVisible(false); // Menutup modal setelah nama disimpan
  };

  return (
    <View style={styles.header}>
      {/* Profil */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/40' }} // Ganti dengan URL gambar profil Anda
          style={styles.profileImage}
        />
        <View style={styles.textContainer}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>{name}</Text>
            <TouchableOpacity onPress={handleEditName}>
              <Image
                source={require('../../assets/edit.png')} // Ikon pensil
                style={styles.editIcon}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.rank}>#1_dikelas</Text>
        </View>
      </View>

      {/* Modal untuk mengedit nama */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Edit Nama</Text>
            <TextInput
              style={styles.input}
              value={newName}
              onChangeText={setNewName} // Menyimpan nilai input teks
            />
            <View style={styles.modalButtons}>
              <Button title="Batal" onPress={() => setModalVisible(false)} />
              <Button title="Simpan" onPress={handleSaveName} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: '#B4ECE3', // Warna latar header
    shadowColor: '#000', // Warna bayangan
    shadowOffset: { width: 0, height: 4 }, // Arah bayangan
    shadowOpacity: 0.2, // Opasitas bayangan
    shadowRadius: 10, // Radius bayangan
    elevation: 10, // Untuk perangkat Android
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F77E21',
    marginRight: 12,
  },
  textContainer: {
    flexDirection: 'column',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  editIcon: {
    width: 16,
    height: 16,
    marginLeft: 8,
  },
  rank: {
    fontSize: 14,
    color: '#666666',
  },
  // Modal styles
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
    marginBottom: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default HeaderEdit;

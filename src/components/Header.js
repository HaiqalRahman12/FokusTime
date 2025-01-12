import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  const klik = () => {
    navigation.navigate('Notif');
  };

  return (
    <View style={styles.header}>
      {/* Profil */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/40' }} // Ganti dengan URL gambar Anda
          style={styles.profileImage}
        />
        <View style={styles.profileText}>
          <Text style={styles.name}>Maulana Riski</Text>
          <Text style={styles.rank}>#1_dikelas</Text>
        </View>
      </View>

      {/* Total Tugas */}
      <View style={styles.taskContainer}>
        <View style={styles.taskTitle}>
          <Text style={styles.taskTitleText}>Total Tugas</Text>
        </View>
        <View style={styles.taskStatus}>
          <View style={[styles.taskItem, styles.taskCompleted]}>
            <Text style={styles.taskNumberBlack}>10</Text>
            <Text style={styles.taskLabelBlack}>Selesai</Text>
          </View>
          <View style={[styles.taskItem, styles.taskIncomplete]}>
            <Text style={styles.taskNumberBlack}>5</Text>
            <Text style={styles.taskLabelBlack}>Belum</Text>
          </View>
        </View>
      </View>

      {/* Notifikasi */}
      <TouchableOpacity onPress={klik}>
        <Image
          source={{ uri: 'https://via.placeholder.com/24' }} // Ganti dengan URL gambar lonceng Anda
          style={styles.notificationIcon}
        />
      </TouchableOpacity>
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
    marginRight: 60,
    marginTop:10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0E0E0', // Placeholder untuk gambar
  },
  profileText: {
    marginLeft: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  rank: {
    fontSize: 12,
    color: '#666',
  },
  taskContainer: {
    alignItems: 'center',
  },
  taskTitle: {
    backgroundColor: '#161D6F', // Warna latar "Total Tugas"
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 4,
  },
  taskTitleText: {
    fontSize: 9,
    fontWeight: 'bold',
    color: '#FFFFFF', // Warna teks "Total Tugas"
  },
  taskStatus: {
    flexDirection: 'row',
    marginTop: 4,
  },
  taskItem: {
    alignItems: 'center',
    marginHorizontal: 3,
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  taskCompleted: {
    backgroundColor: '#B4FF9D', // Warna latar "Selesai"
  },
  taskIncomplete: {
    backgroundColor: '#FF8D8D', // Warna latar "Belum"
  },
  taskNumberBlack: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#000000', // Warna teks angka
  },
  taskLabelBlack: {
    fontSize: 8,
    color: '#000000', // Warna teks label
  },
  notificationIcon: {
    width: 24,
    height: 24,
  },
});

export default Header;

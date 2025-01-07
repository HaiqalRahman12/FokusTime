import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import HeaderEdit from '../components/Headerseting';

const Pengaturan = () => {
//   const handlePress = (label) => {
//     alert(`Anda memilih: ${label}`);
//   };

  const settings = [
    {
      id: 1,
      title: 'Akun',
      description: 'Privasi, sekuriti, dan ganti email atau password',
      icon: require('../../assets/user.png'),
    },
    {
      id: 2,
      title: 'Notifikasi',
      description: 'Notifikasi chat, tugas, dan materi',
      icon: require('../../assets/bellpengaturan.png'),
    },
    {
      id: 3,
      title: 'Bantuan',
      description: 'Kostumer servis, bantuan, dan lainnya',
      icon: require('../../assets/help.png'),
    },
    {
      id: 4,
      title: 'Keluar',
      description: '',
      icon: require('../../assets/log-out.png'),
      color: 'red',
    },
  ];

  return (
    <View style={styles.container}>
      <HeaderEdit />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.bawa}>
          <Text style={styles.headerText}>Pengaturan</Text>
          <View style={styles.separator} />

          {settings.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.settingRow}
            //   onPress={() => handlePress(item.title)}
            >
              <Image style={styles.icon}source={item.icon} />
              <View style={styles.textContainer}>
                <Text style={[styles.title, item.color && { color: item.color }]}>{item.title}</Text>
                {item.description ? (
                  <Text style={styles.description}>{item.description}</Text>
                ) : null}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Pengaturan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingVertical: 10,
    paddingBottom: 100, // Tambahkan ruang di bawah agar tidak terhalang footer
  },
  bawa: {
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  separator: {
    borderBottomWidth: 1,
    marginBottom: 10,
    marginTop: 10,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 2,
  },
  icon: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 10,
    fontWeight: '300',
    color: '#666',
  },
});

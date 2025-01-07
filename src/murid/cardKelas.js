import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CardKelas = ({ title, subtitle, totalSiswa, onPress }) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Image
        style={styles.icon}
        source={require('../../assets/matematikakecil.png')} // Sesuaikan path jika berbeda
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.totalSiswa}>
          Total Siswa: <Text style={styles.dynamicText}>{totalSiswa}</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const App = () => {
  const handleCardPress = (title) => {
    alert(`Kamu memilih kelas: ${title}`);
  };

  return (
    <View style={styles.container}>
      <CardKelas
        title="Matematika - XII A"
        subtitle="Wagi Artono"
        totalSiswa={32}
        onPress={() => handleCardPress("Matematika - XII A")}
      />
      <CardKelas
        title="Fisika - XI B"
        subtitle="Dewi Rahayu"
        totalSiswa={28}
        onPress={() => handleCardPress("Fisika - XI B")}
      />
      <CardKelas
        title="Kimia - XI C"
        subtitle="Anita Sari"
        totalSiswa={25}
        onPress={() => handleCardPress("Kimia - XI C")}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({

  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#98DED9',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    margin: 10,
  },
  icon: {
    marginRight: 15,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 12,
    color: '#555',
  },
  totalSiswa: {
    fontSize: 17,
    color: '#333',
  },
  dynamicText: {
    fontWeight: 'bold',
    color: '#000',
  },
});

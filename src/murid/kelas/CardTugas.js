import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const TugasCard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        {/* Bagian Atas */}
        <View style={styles.header}>
          <Image
            source={require('../../../assets/Buku1.png')} // Ganti dengan icon yang sesuai
            style={styles.icon}
          />

          <View style={styles.textColumnLeft}>
            <Text style={styles.title}>Matematika</Text>
            <Text style={styles.author}>Wagi Artono</Text>
            <Text style={styles.subtitle}>Tugas 1 | Trigonometri</Text>
          </View>

          <View style={styles.textColumnRight}>
            <Text style={styles.label}>Tenggat</Text>
            <Text style={styles.date}>27 Oktober 2025</Text>
            <Text style={styles.time}>11:59 PM</Text>
          </View>
        </View>

        {/* Bagian Bawah */}
        <View style={styles.body}>
          <Text style={styles.description}>
            Jawablah soal 
          </Text>

          <View style={styles.fileSection}>
            <View style={styles.fileInfo}>
              <Image
                source={require('../../../assets/pdf.png')} // Ganti dengan ikon PDF
                style={styles.fileIcon}
              />
              <Text style={styles.fileName}>Tugas_1.pdf</Text>
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Kerjakan</Text>
              <Image
                source={require('../../../assets/edit.png')} // Ganti dengan ikon panah
                style={styles.buttonIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#F6F6F6',
  },
  card: {
    
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  header: {
    backgroundColor: '#98DED9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  icon: {
    width: 67,
    height: 67,
  },
  textColumnLeft: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004D40',
  },
  author: {
    fontSize: 12,
    color: '#004D40',
  },
  subtitle: {
    fontSize: 14,
    color: '#004D40',
  },
  textColumnRight: {
    alignItems: 'flex-end',
    marginTop: 5,
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
  body: {
    backgroundColor: '#FFFFFF',
    padding: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  description: {
    fontSize: 14,
    color: '#004D40',
    marginBottom:5,
    fontWeight: 'bold',
  },
  fileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  fileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fileIcon: {
    width: 15,
    height: 15,
    marginRight: 2,
  },
  fileName: {
    fontSize: 14,
    color: '#00796B',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0288D1',
    padding: 2,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
    color: '#FFFFFF',
    marginRight: 5,
  },
  buttonIcon: {
    width: 16,
    height: 16,
    tintColor: '#FFFFFF',
  },
});

export default TugasCard;

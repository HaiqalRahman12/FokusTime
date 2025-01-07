import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const MateriCard = () => {
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

          {/* Kata "suda" */}
          <View style={styles.textColumnRight}>
           <Text style={styles.sudaText}>sudah</Text>
          </View>
          
        </View>

        {/* Bagian Bawah */}
        <View style={styles.body}>
          <Text style={styles.description}>
            Berikut Materi
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
              <Text style={styles.buttonText}>Buka</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    
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
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  icon: {
    width: 40,
    height: 40,
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
  sudaText: {
    fontSize: 14,
    fontWeight: 'bold',
    
  },
  body: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  description: {
    fontSize: 14,
    color: '#004D40',
    marginBottom: 10,
  },
  fileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  fileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fileIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  fileName: {
    fontSize: 14,
    color: '#00796B',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0288D1',
    padding: 3,
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
  textColumnRight: {
    alignItems: 'center', // Pusatkan teks "suda" secara horizontal
    marginBottom: 30,
    backgroundColor:'#B4FF9D',
    padding:2,
    borderRadius:5
  },
});

export default MateriCard;

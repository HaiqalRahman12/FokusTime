import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
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
           <Text style={styles.sudaText}>Sudah</Text>
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

const App = () => {
  return (
    <ScrollView>
      <MateriCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2, // Untuk Android
    
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
  sudaText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: '#B4FF9D',
    padding: 5,
    borderRadius: 5,
    marginBottom:20
  },
  body: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  description: {
    fontSize: 14,
    color: '#004D40',
    marginBottom: 5,
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
    padding: 5,
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
    alignItems: 'center',
  },
});

export default App;

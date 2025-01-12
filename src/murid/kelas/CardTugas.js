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

const TugasCard = ({ title, subtitle, matpel, author, topik, tanggal, waktu, deskripsi, fileName, fileIcon, buttonIcon }) => {
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
            <Text style={styles.title}>{matpel}</Text>
            <Text style={styles.author}>{author}</Text>
            <Text style={styles.subtitle}>{`${title} | ${topik}`}</Text>
          </View>

          <View style={styles.textColumnRight}>
            <Text style={styles.label}>Tenggat</Text>
            <Text style={styles.date}>{tanggal}</Text>
            <Text style={styles.time}>{waktu}</Text>
          </View>
        </View>

        {/* Bagian Bawah */}
        <View style={styles.body}>
          <Text style={styles.description}>{deskripsi}</Text>

          <View style={styles.fileSection}>
            <View style={styles.fileInfo}>
              <Image
                source={fileIcon} // Ikon file dari props
                style={styles.fileIcon}
              />
              <Text style={styles.fileName}>{fileName}</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => console.log('Kerjakan')}>
              <Text style={styles.buttonText}>Kerjakan</Text>
              <Image
                source={buttonIcon} // Ikon tombol dari props
                style={styles.buttonIcon}
              />
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
      <TugasCard
        title="Tugas 1"
        subtitle="Trigonometri"
        matpel="Matematika"
        author="Wagi Artono"
        topik="Trigonometri"
        tanggal="27 Oktober 2025"
        waktu="11:59 PM"
        deskripsi="Jawablah soal berikut"
        fileName="Tugas_1.pdf"
        fileIcon={require('../../../assets/pdf.png')}
        buttonIcon={require('../../../assets/edit.png')}
      />
      <TugasCard
        title="Tugas 2"
        subtitle="Integral"
        matpel="Fisika"
        author="Budi Santoso"
        topik="Integral Dasar"
        tanggal="28 Oktober 2025"
        waktu="10:00 AM"
        deskripsi="Kerjakan soal integral berikut"
        fileName="Tugas_2.pdf"
        fileIcon={require('../../../assets/pdf.png')}
        buttonIcon={require('../../../assets/edit.png')}
      />
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
    backgroundColor: '#FF5F5F',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
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
});

export default App;

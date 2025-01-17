import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderGuru from './Header-guru';
import CardMateriGuru from './CardMateriGuru';
import NamaMurid from './NamaSiswaGuru';
import CardTugasGuru from './tugas';

const DetailKelasScreen = ({ route }) => {
  const { title: initialTitle, subtitle, totalSiswa } = route.params;

  const [activeTab, setActiveTab] = useState('Tugas');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [classTitle, setClassTitle] = useState(initialTitle); // Tambahkan state untuk classTitle
  const [classCode, setClassCode] = useState('123456');
  const [classLink, setClassLink] = useState('https://example.com/class');

  const renderContent = () => {
    const navigation = useNavigation();
    switch (activeTab) {
      case 'Tugas':
        return <CardTugasGuru/>;
      case 'Materi':
        return <CardMateriGuru/>;
      case 'Siswa':
        return <NamaMurid navigation={navigation}/>;
      default:
        return null;
    }
  };

  const handleSave = () => {
    setTitle(classTitle); // Perbarui title dengan nilai dari classTitle
    console.log('Updated Title:', classTitle);
    console.log('Class Code:', classCode);
    console.log('Class Link:', classLink);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <HeaderGuru/>
      <View style={styles.detailContainer}>
        <View style={styles.cardContainer}>
          <Image
            style={styles.icon}
            source={require('../../../assets/matematikakecil.png')}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.totalSiswa}>
              Total Siswa: <Text style={styles.dynamicText}>{totalSiswa}</Text>
            </Text>
          </View>
          <TouchableOpacity
            style={{ marginTop: 50 }}
            onPress={() => setIsModalVisible(true)}
          >
            <Image
              source={require('../../../assets/edit.png')}
              style={{ marginTop: 10 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.tabContainer}>
          {['Tugas', 'Materi', 'Siswa'].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tab,
                activeTab === tab && styles.activeTab,
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.contentContainer}>{renderContent()}</View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle} onPress={() => setIsModalVisible(false)}>Edit Kelas</Text>
            <TextInput
              style={styles.input}
              value={classTitle} // Gunakan classTitle di TextInput
              onChangeText={setClassTitle}
              placeholder="Nama Kelas"
            />
            <Text style={styles.input}>{classCode}</Text>
            <Text style={styles.input}>{classLink}</Text>
            <View style={styles.modalButtonContainer}>
              <Button title="Simpan" onPress={handleSave} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  detailContainer: {
    flex: 1,
    padding: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#98DED9',
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    margin: 1,
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
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
  },
  totalSiswa: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
  },
  dynamicText: {
    fontWeight: 'bold',
    color: '#000',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    backgroundColor: '#151C68',
    borderRadius: 10,
    padding: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: '#C7FFD8',
    borderRadius: 5,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F6F6F6',
  },
  activeTabText: {
    color: '#000000',
  },
  contentContainer: {
    flex: 1,
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default DetailKelasScreen;

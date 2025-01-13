
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import HeaderGuru from './Header-guru';


const DetailKelasScreen = ({ route }) => {
  const { title, subtitle, totalSiswa } = route.params;

  const [activeTab, setActiveTab] = useState('Tugas');

  const renderContent = () => {
    switch (activeTab) {
      case 'Tugas':
        return <Text>halo</Text>;
      case 'Materi':
        return <Text>halo</Text>;
      case 'Siswa':
        return <Text>halo</Text>;
      default:
        return null;
    }
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
    </View>
  );
};

export default DetailKelasScreen;

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  detailContainer: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
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
    
    // backgroundColor: 'pink',
    
  },
  contentText: {
    fontSize: 16,
    color: '#333',
    // textAlign: 'center',
  },
});

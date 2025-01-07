
import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, View, Image,FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";
import ModalChat from "./ButtonChat";

const dummyData = [
  {
      id: 1,
      title: "Asep",
      img: "https://via.placeholder.com/150",
  },
  {
        id: 2,
        title: "Rahmat Hidayat",
        img: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        title: "Siti Fatimah",
        img: "https://via.placeholder.com/150",
    },
    {
        id: 4,
        title: "Dian Pratama",
        img: "https://via.placeholder.com/150",
    },
  
];





const SiswaNama = ({ title, subtitle, totalSiswa }) => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    navigation.navigate('DetailKelas', { title, subtitle, totalSiswa });
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  

  const renderItem = ({ item }) => (
    <View style={styles.container}>
        <View style={styles.leftContent}>
            <Image source={{ uri: item.img }} style={styles.profileImage} />
            <Text style={{ fontSize: 23, fontWeight: 'bold',marginLeft:5 }}>{item.title}</Text>
        </View>
        <TouchableOpacity>
          <ModalChat/>
        </TouchableOpacity>
    </View>
);


  return (
    <View>
        <Text style={{ fontSize: 23, fontWeight: 'bold' }}>Guru</Text>
        <View style={{ borderBottomWidth:1,marginBottom:10,marginTop:10 }}/>
        
        
        <View style={styles.container}>
          <View style={styles.leftContent}>
            <Image source={require('../../../assets/kepiting.png')}/>
            <Text style={{ fontSize: 23, fontWeight: 'bold',marginLeft:5 }}>Wagi Artono</Text>
          </View>
          <TouchableOpacity >
            <ModalChat navigation={navigation}/>
          </TouchableOpacity>
        </View>
    
    <Text style={{ fontSize: 23, fontWeight: 'bold',paddingTop:15 }}>Siswa</Text>
    <View style={{ borderBottomWidth:1,marginBottom:10,marginTop:10 }}/>
    

    <FlatList
            data={dummyData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
        />
    
    </View>
  );
};

export default SiswaNama;

const styles = StyleSheet.create({
    guru:{
      flexDirection: 'row',
      
    },
    container: {
      flexDirection: 'row', // Mengatur tata letak horizontal
      alignItems: 'center', // Memusatkan item secara vertikal
      justifyContent: 'space-between', // Memberikan ruang di antara item (kiri dan kanan)
      paddingHorizontal: 1, // Memberikan padding horizontal agar tidak mepet layar
    },
    leftContent: {
      flexDirection: 'row', // Mengatur gambar dan teks di kiri secara horizontal
      alignItems: 'center',
    },
    leftImage: {
      width: 40, // Lebar gambar kiri
      height: 40, // Tinggi gambar kiri
      marginRight: 8, // Memberikan margin kanan antara gambar dan teks
      borderRadius: 20, // Membuat gambar menjadi lingkaran (opsional)
    },
    text: {
      fontSize: 16,
    },
    rightImage: {
      width: 30, // Lebar gambar kanan
      height: 30, // Tinggi gambar kanan
    },
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
  },
});

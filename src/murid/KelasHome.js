import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const KelasComponent = () => {
  return (
    <View style={styles.kelas}>
      <TouchableOpacity>
        <Image style={styles.image} source={require('../../assets/kimia.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.image} source={require('../../assets/kimia.png')} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={styles.image} source={require('../../assets/matematika.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  kelas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  image: {
    margin: 5, // Memberi spasi antara gambar
    
  },
});

export default KelasComponent;

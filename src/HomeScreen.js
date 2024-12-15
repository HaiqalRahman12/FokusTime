import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Satu lagi...{'\n'}
      Pilih profesi anda</Text>
      <Text style={[styles.title1, ]}>Kenalan dulu yuk!</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#C7FFD8' }]}
        onPress={() => navigation.navigate('SingUpGuru')}>
          <Image style={styles.gambar} source={require('../assets/guru.png')}></Image>
        <Text style={styles.buttonText}>Guru</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#98DED9' }]}
        onPress={() => navigation.navigate('Murid')}>
          <Image source={require('../assets/murid.png')}></Image>
        <Text style={styles.buttonText}>Murid</Text>
      </TouchableOpacity>

      <Text style={styles.link} onPress={() => navigation.navigate('SingUp3')}>  
        kembali  
      </Text>
    </View>

    
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#F6F6F6'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 0,
    left:-20
  },
  title1:{
    marginBottom: 10,
    left:-90,
    fontSize:14
  },
  button: {
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '300',
    height:260,
    alignItems: 'center',
    shadowColor: '#000',
    marginTop: 20,
    elevation: 15,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight:'bold'
  },
  link: {  
    color: 'blue',  
    textDecorationLine: 'underline', 
    top:805,
    position:'absolute',
    textAlign:'center' 
  },
  gambar:{
    height:199
  } 
});

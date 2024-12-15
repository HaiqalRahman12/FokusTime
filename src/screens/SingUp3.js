import { View, Text, TextInput, Button, StyleSheet, Image,TouchableOpacity  } from 'react-native';
import React, { useState } from 'react';

 



const SignUpScreen3 = ({ navigation }) => {
    const kembali = () => {
        navigation.navigate('SingUp2');
      };

      const handleSingup2 = () => {
        navigation.navigate('Home');
      };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Sebelum{'\n'}kita mula...</Text>
        <Text style={styles.title1}>Kenalan dulu yuk!</Text>
        <Image style={styles.gambar} source={require('../../assets/singup3.png')}/>

        <Text style={styles.title2}>Siapa nama kamu</Text>
        <TextInput
        style={styles.input}
        placeholder="Masukan nama anda"
        />
        

        <TouchableOpacity style={styles.button} onPress={handleSingup2}>
            <Text style={styles.buttonText}>Lanjut</Text>
        </TouchableOpacity>

        <Text style={styles.title3}>Pilih avatar yang kamu suka~</Text>
        <View style={styles.avatar}>
            <Image source={require('../../assets/avatar1.png')}/>
            <Image source={require('../../assets/avatar2.png')}/>
            <Image source={require('../../assets/avatar3.png')}/>
            <Image source={require('../../assets/avatar4.png')}/>
            <Image source={require('../../assets/avatar5.png')}/>
        </View>

        <Text style={styles.link} onPress={kembali}>  
        kembali  
        </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F6F6F6',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  title:{
    top:128,
    fontWeight:'bold',
    fontSize: 32,
    left:-65,
  },
  title1:{
    position:'absolute',
    top:214,
    fontSize: 14,
    left:62,
  },
  title2:{
    position:'absolute',
    top:537,
    fontSize: 14,
    left:62,
  },
  title3:{
    position:'absolute',
    top: 640,
    fontSize: 14,
    left:62,
  },


  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 15,
    backgroundColor: '#fff',
    height:50,
    width:300,
    height:50,
    top :570,
    position: 'absolute'
  },

  
  button: {
    position:'absolute',
    width: 300,
    height: 50,
    top: 750,
    backgroundColor: '#161D6F',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
  },
  link: {  
    color: 'blue',  
    textDecorationLine: 'underline', 
    top:805,
    position:'absolute',
    textAlign:'center' 
  }, 
  gambar:{
    top: 250,
    position:'absolute'

  },
  avatar:{
    flexDirection: 'row',
    alignItems: 'center',
    gap:15,
    top:670,
    position: 'absolute'
  }
});

export default SignUpScreen3;
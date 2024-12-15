import { View, Text, TextInput, Button, StyleSheet, Image,TouchableOpacity  } from 'react-native';
import React, { useState } from 'react';

 



const SignUpScreen2 = ({ navigation }) => {
    const kembali = () => {
        navigation.navigate('SingUp1');
      };

      const handleSingup2 = () => {
        navigation.navigate('SingUp3');
      };

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Focus On Your GOAL!</Text>
        <Image style={styles.gambar} source={require('../../assets/singup2.png')}/>
      
        <Text style={styles.title1}>Fokus ke tujuan {'\n'} 
        dan capai cita cita! </Text>
        <Text style={styles.title2}>Fokus pada tujuan</Text>

        <TouchableOpacity style={styles.button} onPress={handleSingup2}>
            <Text style={styles.buttonText}>Lanjut</Text>
        </TouchableOpacity>

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
    color:'balck',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign:'center',
    // width:365,
    // height:39,
    top:177,
    // left: 24
  },
  title1:{
    color:'balck',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign:'auto',
    left:-20,
    top:550,
  },
  title2:{
    fontSize:14,
    left: 50,
    top:674,
    position:'absolute'
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
    top: 280,
    position:'absolute'

  },
});

export default SignUpScreen2;
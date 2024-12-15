import { View, Text, TextInput, Button, StyleSheet, Image,TouchableOpacity  } from 'react-native';
import React, { useState } from 'react';

 



const SignUpScreenGuru = ({ navigation }) => {
    

  return (
    <View style={styles.container}>
        <Text style={{fontWeight:'bold',fontSize:32}}>Isi data diri</Text>
        <Text style={{textAlign:'center',}}>Lanjut ke pendaftaran{'\n'}agar kamu terdata</Text>

        <View style={styles.isi}>
            <Text>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Masukan email anda"
                
                
            />

            <Text>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Masukan password anda"
                
                
            />

            <Text>Konfirmasi Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Masukan password anda"
               
                
            />

            <Text>Tanggal lahir</Text>
            <TextInput
                style={styles.input}
                placeholder="Masukan email anda"
                
                
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Daftar</Text>
            </TouchableOpacity>

            <Text style={styles.link} onPress={() => navigation.navigate('SingUp3')}>  
                kembali  
            </Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
  },
  isi:{
    width:300,
    top:30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 15,
    backgroundColor: '#fff',
    height:50
  },
  button: {
    width: 'auto',
    height: 50,
    top: 0,
    margin:0,
    backgroundColor: '#161D6F',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center',
  },
  link: {  
    color: 'blue',  
    textDecorationLine: 'underline', 
    textAlign:'center',
    
    top:80,
  },
 
});

export default SignUpScreenGuru;
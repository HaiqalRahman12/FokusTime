import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert,Image,TouchableOpacity ,ScrollView} from 'react-native';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lakukan validasi login di sini
    if (email === 'murid@gmail.com' && password === 'test123') {
      navigation.navigate('Murid');
    }
    if (email === 'guru@gmail.com' && password === 'test123') {
        navigation.navigate('Guru');
    } else {
      // Jika login gagal, tampilkan pesan error
      Alert.alert('Login Failed', 'Invalid email or password');
    }
  };

  const signUp = () => {
    navigation.navigate('SingUp1');
  };

  return (
    
    <View style={styles.container}>
        <Image style={styles.gambar} source={require('../../assets/fokustime.png')}></Image>
        <Text style={styles.title1}>Belajar dengan fokus dan juga seru!</Text>
        <View style={styles.isi}>
            <Text style={styles.title}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <Text style={styles.title}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            
            <Text style={{ marginTop: 5 }}>Don't have an account?</Text>
            <TouchableOpacity style={styles.button2} onPress={signUp}>
                <Text style={styles.buttonText}>SignUP</Text>
            </TouchableOpacity>
            
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 20,
  },
  title1: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '100%',
  },
  gambar: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#161D6F',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  button2: {
    backgroundColor: '#98DED9',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  isi: {
    width: '100%',
    paddingHorizontal: 10,
  },
  
});

export default LoginScreen;
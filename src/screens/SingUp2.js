import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView, SafeAreaView } from 'react-native';

const { width, height } = Dimensions.get('window');

const SignUpScreen2 = ({ navigation }) => {
  const kembali = () => {
    navigation.navigate('SingUp1');
  };

  const handleSingup2 = () => {
    navigation.navigate('SingUp3');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Focus On Your GOAL!</Text>
          <Image style={styles.gambar} source={require('../../assets/singup2.png')} />
          <Text style={styles.title1}>Fokus ke tujuan {'\n'}
            dan capai cita-cita!
          </Text>
          <Text style={styles.title2}>Fokus pada tujuan</Text>

          <TouchableOpacity style={styles.button} onPress={handleSingup2}>
            <Text style={styles.buttonText}>Lanjut</Text>
          </TouchableOpacity>

          <Text style={styles.link} onPress={kembali}>
            kembali
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F6F6F6',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: height * 0.05,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: width * 0.05,
  },
  title: {
    color: 'black',
    fontSize: width * 0.08,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: height * 0.02,
  },
  title1: {
    color: 'black',
    fontSize: width * 0.06,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: height * 0.02,
  },
  title2: {
    fontSize: width * 0.04,
    textAlign: 'center',
    marginBottom: height * 0.05,
  },
  button: {
    width: '80%',
    height: height * 0.06,
    backgroundColor: '#161D6F',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height * 0.02,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: width * 0.045,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontSize: width * 0.04,
    marginTop: height * 0.01,
  },
  gambar: {
    width: width * 0.8,
    height: height * 0.3,
    resizeMode: 'contain',
    marginBottom: height * 0.02,
  },
});

export default SignUpScreen2;

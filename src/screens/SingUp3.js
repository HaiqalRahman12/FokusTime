import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, SafeAreaView, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

const avatarImages = [
  require('../../assets/avatar1.png'),
  require('../../assets/avatar2.png'),
  require('../../assets/avatar3.png'),
  require('../../assets/avatar4.png'),
  require('../../assets/avatar5.png'),
];

const SignUpScreen3 = ({ navigation }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const kembali = () => {
    navigation.navigate('SingUp2');
  };

  const handleSingup2 = () => {
    navigation.navigate('Home');
  };

  const handleAvatarSelect = (index) => {
    setSelectedAvatar(index);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Sebelum {'\n'} kita mulai...</Text>
          <Text style={styles.title1}>Kenalan dulu yuk!</Text>
          <Image style={styles.gambar} source={require('../../assets/singup3.png')} />

          <Text style={styles.title2}>Siapa nama kamu?</Text>
          <TextInput style={styles.input} placeholder="Masukkan nama Anda" />

          <Text style={styles.title3}>Pilih avatar yang kamu suka~</Text>
          <View style={styles.avatarContainer}>
            {avatarImages.map((image, index) => (
              <TouchableOpacity key={index} onPress={() => handleAvatarSelect(index)}>
                <Image
                  source={image}
                  style={[
                    styles.avatar,
                    selectedAvatar === index && styles.selectedAvatar,
                  ]}
                />
              </TouchableOpacity>
            ))}
          </View>

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
    fontWeight: 'bold',
    fontSize: width * 0.08,
    textAlign: 'center',
    marginBottom: height * 0.02,
  },
  title1: {
    fontSize: width * 0.045,
    textAlign: 'center',
    marginBottom: height * 0.02,
  },
  title2: {
    fontSize: width * 0.045,
    marginBottom: height * 0.01,
  },
  title3: {
    fontSize: width * 0.045,
    marginBottom: height * 0.02,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
    width: '80%',
    marginBottom: height * 0.02,
  },
  avatarContainer: {
    flexDirection: 'row',
    gap:15,
    flexWrap: 'wrap',
    marginBottom: height * 0.02,
  },
  avatar: {
    borderRadius: width * 0.1,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedAvatar: {
    borderColor: '#161D6F',
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
  },
  gambar: {
    width: width * 0.6,
    height: height * 0.25,
    resizeMode: 'contain',
    marginBottom: height * 0.02,
  },
});

export default SignUpScreen3;

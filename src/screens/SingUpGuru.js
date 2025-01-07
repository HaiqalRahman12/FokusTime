import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

const SignUpScreenGuru = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false); // Close the DateTimePicker after selection
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 32 }}>Isi data diri</Text>
      <Text style={{ textAlign: 'center' }}>
        Lanjut ke pendaftaran{'\n'}agar kamu terdata
      </Text>

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
          secureTextEntry
        />

        <Text>Konfirmasi Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan password anda"
          secureTextEntry
        />

        <Text>Tanggal Lahir</Text>
        <TouchableOpacity
          style={styles.dateInput}
          onPress={() => setShow(true)}
        >
          <Text style={styles.dateText}>
            {date.toISOString().split('T')[0]} {/* Format YYYY-MM-DD */}
          </Text>
        </TouchableOpacity>

        {show && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChange}
          />
        )}

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Daftar</Text>
        </TouchableOpacity>

        <Text style={styles.link} onPress={() => navigation.navigate('Home')}>
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
  isi: {
    width: 300,
    top: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 15,
    backgroundColor: '#fff',
    height: 50,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
    height: 50,
    justifyContent: 'center',
    marginBottom: 15,
  },
  dateText: {
    fontSize: 16,
    color: '#000',
  },
  button: {
    width: 'auto',
    height: 50,
    top: 0,
    margin: 0,
    backgroundColor: '#161D6F',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    textAlign: 'center',
    top: 80,
  },
});

export default SignUpScreenGuru;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>M@KitaJobs</Text>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} />
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 50, color: '#2E8B57' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 15, marginBottom: 15, borderRadius: 8 },
  button: { backgroundColor: '#2E8B57', padding: 15, borderRadius: 8 },
  buttonText: { color: 'white', textAlign: 'center', fontWeight: 'bold' }
});

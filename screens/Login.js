import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function Login({ navigation }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    if (user === 'caio' && password === '1234') {
      navigation.replace('Tabs', { user });
    } else {
      Alert.alert('Erro', 'Usuário ou senha inválidos');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo 👋</Text>

      <TextInput placeholder="Usuário" style={styles.input} onChangeText={setUser} />
      <TextInput placeholder="Senha" secureTextEntry style={styles.input} onChangeText={setPassword} />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', padding:20, backgroundColor:'#F5F5F5' },
  title: { fontSize:30, marginBottom:30, textAlign:'center', fontWeight:'bold' },
  input: { borderWidth:1, padding:12, marginBottom:15, borderRadius:10, backgroundColor:'#fff' },
  button:{ backgroundColor:'#6C63FF', padding:15, borderRadius:10 },
  buttonText:{ color:'#fff', textAlign:'center', fontWeight:'bold' }
});

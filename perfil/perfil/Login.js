import React, { useState } from 'react'
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native'

export default function Login({ setUser }) {
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')

  function entrar() {
    if (usuario === 'caio' && senha === '123') {
      setUser({
        nome: 'Caiobrp',
        foto: 'https://avatars.githubusercontent.com/u/203374830?v=4'
      })
    } else {
      Alert.alert('Erro', 'Usuário ou senha inválidos')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>

      <TextInput
        placeholder="Usuário"
        style={styles.input}
        value={usuario}
        onChangeText={setUsuario}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
      />

      <Button title="Entrar" onPress={entrar} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5
  }
})
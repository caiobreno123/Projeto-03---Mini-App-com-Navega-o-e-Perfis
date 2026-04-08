import React from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'

export default function Perfil({ user, setUser }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: user.foto || 'https://via.placeholder.com/100' }}
        style={styles.imagem}
      />

      <Text style={styles.texto}>Nome: {user.nome}</Text>
      <Text style={styles.texto}>Email: caiobrp@email.com</Text>
      <Text style={styles.texto}>Nascimento: 02/07/2008</Text>

      <Button title="Logout" onPress={() => setUser(null)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imagem: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20
  },
  texto: {
    fontSize: 16,
    marginBottom: 5
  }
})
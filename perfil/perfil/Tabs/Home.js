import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function Home({ navigation, user }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bem-vindo, {user.nome}</Text>

      <Button
        title="Ir para Perfil"
        onPress={() => navigation.navigate('Perfil')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    fontSize: 20,
    marginBottom: 20
  }
})
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Home({ route, navigation }) {
  const { user } = route.params;

  const mensagens = [
    "Você é capaz!",
    "Nunca desista!",
    "Foco e fé!",
    "Hoje vai dar certo!"
  ];

  const mensagemAleatoria =
    mensagens[Math.floor(Math.random() * mensagens.length)];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Home</Text>
      <Text style={styles.text}>Bem-vindo, {user}</Text>
      <Text style={styles.msg}>{mensagemAleatoria}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Perfil')}
      >
        <Text style={styles.buttonText}>Ir para Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center' },
  title: { fontSize:26, fontWeight:'bold' },
  text:{ marginTop:10 },
  msg: { margin:20, fontStyle:'italic', color:'#6C63FF' },
  button:{
    backgroundColor:'#6C63FF',
    padding:12,
    borderRadius:10
  },
  buttonText:{ color:'#fff' }
});

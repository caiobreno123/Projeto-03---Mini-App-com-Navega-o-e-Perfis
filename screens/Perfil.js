import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Perfil({ route, navigation }) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.pravatar.cc/150' }}
        style={styles.img}
      />

      <Text style={styles.text}>Nome: {user}</Text>
      <Text style={styles.text}>Email: {user}@gmail.com</Text>
      <Text style={styles.text}>Nascimento: 01/01/2000</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('Login')}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, alignItems:'center', justifyContent:'center' },
  img: { width:120, height:120, borderRadius:60, marginBottom:20 },
  text:{ marginBottom:5 },
  button:{
    marginTop:20,
    backgroundColor:'#FF5252',
    padding:12,
    borderRadius:10
  },
  buttonText:{ color:'#fff', fontWeight:'bold' }
});

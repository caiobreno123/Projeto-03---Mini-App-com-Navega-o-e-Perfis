import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Config() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Configurações</Text>
      <Text>Personalize seu app aqui</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center' },
  title: { fontSize:22, fontWeight:'bold' }
});

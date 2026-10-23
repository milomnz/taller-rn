import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function login() {
  return (
    <View style={styles.container}>
      <Text>login</Text>
      {/* replace en vez de push: el login sale del historial y "atrás" no vuelve aquí */}
      <Pressable style={styles.button} onPress={() => router.replace('/')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  button: {
    backgroundColor: '#3B2F2F',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
})

import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function perfil() {
  return (
    <View style={styles.container}>
      <Text>perfil</Text>
      {/* /acerca se abre como modal (presentation: 'modal' en el _layout raíz) */}
      <Pressable style={styles.button} onPress={() => router.push('/acerca')}>
        <Text style={styles.buttonText}>Acerca de</Text>
      </Pressable>
      {/* replace en vez de push: la app sale del historial y "atrás" no vuelve a ella */}
      <Pressable style={[styles.button, styles.logout]} onPress={() => router.replace('/login')}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
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
  logout: {
    backgroundColor: '#B23A3A',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
})

import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function acerca() {
  return (
    <View style={styles.container}>
      <Text>acerca</Text>
      {/* back() cierra el modal y vuelve a la pantalla que lo abrió */}
      <Pressable style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Cerrar</Text>
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

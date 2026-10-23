import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

// Marco compartido por todas las pantallas del grupo (auth)
export default function AuthLayout() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.brand}>Biblioteca</Text>
        <Slot />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E9D2',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 24,
  },
  brand: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 24,
    color: '#3B2F2F',
  },
})

import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

import { LIBROS } from '@/data/libros'

export default function LibroDetalle() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const libro = LIBROS.find((l) => l.id === id)

  if (!libro) {
    return (
      <View style={styles.container}>
        <Stack.Screen options={{ title: 'Detalle' }} />
        <Text>Libro no encontrado</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {/* Stack.Screen dentro del componente: el header toma el título del libro */}
      <Stack.Screen options={{ title: libro.titulo }} />
      <Text style={styles.titulo}>{libro.titulo}</Text>
      <Text>{libro.autor}</Text>
      <Text>{libro.anio}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
  },
})

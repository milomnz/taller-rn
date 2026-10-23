import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import { LIBROS } from '@/data/libros'

export default function index() {
  return (
    <FlatList
      data={LIBROS}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        // Cada fila navega al detalle pasando el id como parámetro
        <Link href={{ pathname: '/libro/[id]', params: { id: item.id } }} asChild>
          <Pressable style={styles.fila}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.autor}>{item.autor}</Text>
          </Pressable>
        </Link>
      )}
      ItemSeparatorComponent={() => <View style={styles.separador} />}
    />
  )
}

const styles = StyleSheet.create({
  fila: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  autor: {
    color: '#666666',
  },
  separador: {
    height: 1,
    backgroundColor: '#DDDDDD',
  },
})

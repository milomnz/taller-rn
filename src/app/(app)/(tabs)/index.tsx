import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function index() {
  return (
    <View>
      <Text>index</Text>
      {/* TEMPORAL (B2.3): acceso a /login para probar el grupo (auth) */}
      <Link href="/login">Ir a /login</Link>
    </View>
  )
}

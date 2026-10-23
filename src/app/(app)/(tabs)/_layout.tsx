import React from 'react'
import { Tabs } from 'expo-router/tabs'
import Ionicons from '@expo/vector-icons/Ionicons'

// headerShown: false → solo se ve el header del Drawer (con el botón de menú)
export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          // "as string": los tipos de color de Tabs e Ionicons no coinciden
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color as string} size={size} />,
        }}
      />
      <Tabs.Screen
        name="favoritos"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color, size }) => <Ionicons name="heart" color={color as string} size={size} />,
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color as string} size={size} />,
        }}
      />
    </Tabs>
  )
}

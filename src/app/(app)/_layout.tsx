import React from 'react'
import { Drawer } from 'expo-router/drawer'

// drawerLabel: texto en el menú lateral · title: texto en el header
export default function AppLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="(tabs)" options={{ drawerLabel: 'Inicio', title: 'Inicio' }} />
      <Drawer.Screen name="ajustes" options={{ drawerLabel: 'Ajustes', title: 'Ajustes' }} />
    </Drawer>
  )
}

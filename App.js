import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from './src/screens/Auth/LoginScreen'

export default function App() {
  return (
    <View>
      <Text>App</Text>
      <LoginScreen />
    </View>
  )
}

const styles = StyleSheet.create({})
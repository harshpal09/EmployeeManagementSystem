import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AuthNavigator, AdminNavigator, EmployeeNavigator, AppNavigator } from '../../navigation/Index';


export default function LoginScreen() {
  return (
    <View>
        <AuthNavigator />
      <Text>LoginScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
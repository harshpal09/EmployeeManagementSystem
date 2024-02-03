// AuthNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import { HomeAdmin } from '../../export';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen} />
      <Stack.Screen name="home" component={HomeAdmin} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AttendanceTrackingAdmin, AddEditEmployee, HomeAdmin,Profile} from '../../export';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { THEME_COLOR } from '../components/Common/Styles';

const Tab = createBottomTabNavigator();

const AdminNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarActiveTintColor: 'orange', tabBarInactiveTintColor: 'gray' }}
    >
      <Tab.Screen
        name="HomeAdmin"
        component={HomeAdmin}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AddEditEmployee"
        component={AddEditEmployee}
        options={{
          tabBarLabel: 'Add/Edit Employee',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="edit" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AttendanceTrackingAdmin"
        component={AttendanceTrackingAdmin}
        options={{
          tabBarLabel: 'Attendance Tracking',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="chart-bar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          headerBackground:THEME_COLOR,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={size} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AdminNavigator;


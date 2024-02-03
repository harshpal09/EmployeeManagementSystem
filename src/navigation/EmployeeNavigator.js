import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeEmployee, AttendanceTracking, EmployeeDetails, Profile } from '../../export';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { THEME_COLOR } from '../components/Common/Styles';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
import { useMMKV } from '../context/MMKVContext';
import { DARK_THEME_COLOR, DARK_THEME_DARK_TEXT_COLOR, LIGHT_THEME_BACKGROUND_COLOR } from '../themes/Theme';

const Tab = createBottomTabNavigator();

const EmployeeNavigator = () => {
  const {theme, updateTheme} = useMMKV();
  return (
    <Tab.Navigator
      screenOptions={{ tabBarActiveTintColor:theme.isDark ? DARK_THEME_DARK_TEXT_COLOR: THEME_COLOR, tabBarInactiveTintColor: 'gray',tabBarStyle:{backgroundColor:theme.isDark ? DARK_THEME_COLOR:LIGHT_THEME_BACKGROUND_COLOR} }}
    >
      <Tab.Screen
        name="Home"
        component={HomeEmployee}
        options={{
          tabBarLabel: 'Home',
          headerStyle:{backgroundColor:theme.isDark ? DARK_THEME_COLOR: THEME_COLOR},
          headerTitleStyle:{color: 'white'},
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="EmployeeDetails"
        component={EmployeeDetails}
        options={{
          tabBarLabel: 'Details',
          headerStyle:{backgroundColor:theme.isDark ? DARK_THEME_COLOR: THEME_COLOR},
          headerTitleStyle:{color: 'white'},
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AttendanceTracking"
        component={AttendanceTracking}
        options={{
          tabBarLabel: 'Attendance Tracking',
          headerStyle:{backgroundColor:theme.isDark ? DARK_THEME_COLOR: THEME_COLOR},
          headerTitleStyle:{color: 'white'},
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="chart-bar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Your Profile',
          headerStyle:{backgroundColor:theme.isDark ? DARK_THEME_COLOR: THEME_COLOR},
          headerTitleStyle:{color: 'white'},
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={size} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default EmployeeNavigator;

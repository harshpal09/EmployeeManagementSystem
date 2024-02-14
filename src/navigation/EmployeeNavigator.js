import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeEmployee,
  AttendanceTracking,
  EmployeeDetails,
  Profile,
} from '../../export';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {THEME_COLOR, globalStyles, width} from '../components/Common/Styles';
import {useMMKV} from '../context/MMKVContext';
import {
  DARK_THEME_COLOR,
  DARK_THEME_DARK_TEXT_COLOR,
  LIGHT_THEME_BACKGROUND_COLOR,
} from '../themes/Theme';
import {Image, View} from 'react-native';
import ThemeToggle from '../components/Common/ThemeToggle';
import {
  DarkTextLarge,
  DarkTextMedium,
} from '../components/Common/StyledComponent';
const Tab = createBottomTabNavigator();

const EmployeeNavigator = () => {
  const {theme, updateTheme} = useMMKV();

  const renderRight = () => {
    return (
      <View
        style={[
          {width: 140, backgroundColor: 'transparent', height: 40},
          globalStyles.rowContainer,
          globalStyles.flexBox,
        ]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <DarkTextLarge style={{color: 'white', fontSize: 14}}>
           Dark Mode{' '}
          </DarkTextLarge>
        </View>
        <View
          style={[
            {width: 45, backgroundColor: 'transparent', marginTop: -20},
            globalStyles.flexBox,
          ]}>
          <ThemeToggle />
        </View>
      </View>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.isDark
          ? DARK_THEME_DARK_TEXT_COLOR
          : THEME_COLOR,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: theme.isDark
            ? DARK_THEME_COLOR
            : LIGHT_THEME_BACKGROUND_COLOR,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeEmployee}
        options={{
          tabBarLabel: 'Home',
          headerStyle: {
            backgroundColor: theme.isDark ? DARK_THEME_COLOR : THEME_COLOR,
          },
          headerTitleStyle: {color: 'white'},
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
          headerLeft: () => (
            // Add your image component here
            <Image
              source={require('../assets/akhilsystems_favicon_white.png')}
              resizeMode="contain"
              style={{
                width: 40,
                height: 40,
                marginLeft: 10,
                tintColor: 'white',
              }}
            />
          ),
          headerRight: () => renderRight(),
        }}
      />
      {/* <Tab.Screen
        name="EmployeeDetails"
        component={EmployeeDetails}
        options={{
          tabBarLabel: 'Details',
          headerStyle: {
            backgroundColor: theme.isDark ? DARK_THEME_COLOR : THEME_COLOR,
          },
          headerTitleStyle: {color: 'white'},
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="user" color={color} size={size} />
          ),
          headerRight: () => renderRight(),
        }}
      /> */}
      <Tab.Screen
        name="AttendanceTracking"
        component={AttendanceTracking}
        options={{
          tabBarLabel: 'My Attendance',
          headerStyle: {
            backgroundColor: theme.isDark ? DARK_THEME_COLOR : THEME_COLOR,
          },
          headerTitleStyle: {color: 'white'},
          headerTitle:'My Attendance',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="chart-bar" color={color} size={size} />
          ),
          headerRight: () => renderRight(),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'My Profile',
          headerStyle: {
            backgroundColor: theme.isDark ? DARK_THEME_COLOR : THEME_COLOR,
          },
          headerTitleStyle: {color: 'white'},
          headerTitle:'My Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={size}
            />
          ),
          headerRight: () => renderRight(),
        }}
      />
    </Tab.Navigator>
  );
};

export default EmployeeNavigator;

// AppNavigator.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AdminNavigator, AuthNavigator, EmployeeNavigator } from '../navigation/Index'
import { useSelector } from 'react-redux'; // Assuming you are using Redux for state management
import LoginScreen from '../screens/Auth/LoginScreen';

const AppNavigator = () => {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const isAdmin = useSelector((state) => state.user.isAdmin);

    // console.log("app navigator =>",isAuthenticated)
    return (
        <NavigationContainer>
            {isAuthenticated ? (
                <>
                   {isAdmin ? <AdminNavigator/>:  <EmployeeNavigator />}
                </>
            ) : (
                <AuthNavigator />
            )}
        </NavigationContainer>
    );
};

export default AppNavigator;

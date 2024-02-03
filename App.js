import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LoginScreen from './src/screens/Auth/LoginScreen'
import { Provider, useSelector } from 'react-redux'
import { store } from './src/store/utils/Index'
import AppNavigator from './src/navigation/AppNavigator'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './src/navigation/AuthNavigator'
import { THEME_COLOR, globalStyles, height, width } from './src/components/Common/Styles'
import { MMKV } from 'react-native-mmkv';
import { useDispatch } from 'react-redux';
import { setIsAdmin, setIsAuthenticated } from './src/store/modules/UserDetailsSlice'
import { LogBox } from 'react-native';
import { MMKVProvider } from './src/context/MMKVContext'
// import PushNotification from 'react-native-push-notification';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const storage = new MMKV();

const App =()=> {
  const [getValue, setGetValue] = useState(false);
  const dispatch = useDispatch();
  const val = useSelector((s) => s.user.isAuthenticated);
  const isAdmin = useSelector((s) => s.user.isAdmin);

  // console.log("is auth -=>",val);
  // console.log("is admin -=>",isAdmin)


  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = () => {
    const storedUserDetails = storage.getString('userDetails');

    const parsedUserDetails = JSON.parse(storedUserDetails != undefined ? storedUserDetails : null);
    if (parsedUserDetails) {
        setGetValue(false);
        dispatch(setIsAdmin(parsedUserDetails.isAdmin)); 
        dispatch(setIsAuthenticated(parsedUserDetails.isAuthenticated));
    } else {
      setGetValue(true);
    }
  };

  // if (!getValue) {
  //   return (
  //     <View style={[{ flex: 1, width: width, height: height }, globalStyles.flexBox]}>
  //       <ActivityIndicator size={'large'} color={THEME_COLOR} />
  //     </View>
  //   );
  // }

  return (
    <MMKVProvider>
      <AppNavigator />
    </MMKVProvider>
  );
}

export default function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}



const styles = StyleSheet.create({})
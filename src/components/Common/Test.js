import React from 'react';
import { useMMKV } from '../../context/MMKVContext';
import { Button, View } from 'react-native';

const Test = () => {
  const { theme, updateTheme} = useMMKV();

    // console.log("mmmkv vakue =>",theme)
  // Use userDetails and updateUserDetails in your component
  const handleUpdateUserDetails = () => {
    // Example: Updating isAuthenticated to true and isAdmin to false
    let obj = {
        isDark: true,
    }
    updateTheme(obj)

  };
  return (
   <View style={{}}>
        <Button title='Change' onPress={handleUpdateUserDetails} />
   </View>
  );
};

export default Test;

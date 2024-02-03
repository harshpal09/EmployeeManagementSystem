// MMKVContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { MMKV } from 'react-native-mmkv';

const MMKVContext = createContext();
const storage = new MMKV();  // Create an instance of MMKV

export const MMKVProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    isDark: false,
    // Add more user details as needed
  });

  // Load user details from MMKV on component mount
  useEffect(() => {
    const storedUserDetails = storage.getString('theme');
    if (storedUserDetails) {
        setTheme(JSON.parse(storedUserDetails));
    }
  }, []);

  const updateTheme = (newDetails) => {
    // Update state
    setTheme(newDetails);
    // Save to MMKV
    storage.set('theme', JSON.stringify(newDetails));
};

  const contextValue = {
    theme,
    updateTheme,
  };

  return (
    <MMKVContext.Provider value={contextValue}>{children}</MMKVContext.Provider>
  );
};

export const useMMKV = () => useContext(MMKVContext);

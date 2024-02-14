// services/API.js

import axios from 'axios';

const API_BASE_URL = 'https://68a1208e-6839-450d-b476-3016931dfc37.mock.pstmn.io/';

export const loginAdmin = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/Login`, {
      username,
      password,
    });

    // Return the response data directly
    return response.data;
  } catch (error) {
    // Handle login error
    console.error('Login failed:', error.message);
    throw error;
  }
};

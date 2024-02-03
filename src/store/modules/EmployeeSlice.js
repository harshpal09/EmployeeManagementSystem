// src/store/modules/employeeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    // Define your initial state here
    employees: [],
    // Add other state properties as needed
  },
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
    // Add other reducer functions as needed
  },
});

export const { setEmployees } = employeeSlice.actions;
export const selectEmployees = (state) => state.employee.employees;
export default employeeSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
// import GlobalSlice from "../features/GlobalSlice";
import UserDetailsSlice from "../modules/UserDetailsSlice";

export const store = configureStore({
    reducer: {
        user  : UserDetailsSlice,
    },
  })
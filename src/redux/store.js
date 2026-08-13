import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import fetchuserReducer from "./fetchuserSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    fetchuser: fetchuserReducer,
  },
});

export default store;
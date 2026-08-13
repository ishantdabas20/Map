import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  username: null,
  role: null,
};

const fetchuserSlice = createSlice({
  name: "fetchuser",

  initialState,

  reducers: {
    setUserDetails: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.role = action.payload.role;
    },

    clearUserDetails: (state) => {
      state.id = null;
      state.username = null;
      state.role = null;
    },
  },
});

export const {
  setUserDetails,
  clearUserDetails,
} = fetchuserSlice.actions;

export default fetchuserSlice.reducer;
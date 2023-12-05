import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  status: null,
};

export const userSlice = createSlice({
  name: "userName",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
      state.status = "Increment value";
    },

    decrement: (state) => {
      state.count = state.count - 1;
      state.status = "Decrement value";
    },

    changeValue: (state, action) => {
      state.count = action.payload;
      state.status = "Change value";
    },
  },
  //   extraReducers
});

export const { increment, decrement, changeValue } = userSlice.actions;

export default userSlice.reducer;

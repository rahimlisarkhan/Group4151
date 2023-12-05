import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const settingSlice = createSlice({
  name: "settingName",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = settingSlice.actions;

export default settingSlice.reducer;

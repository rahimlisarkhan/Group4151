import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./user/userSlice";
import settingSlice from "./setting/settingSlice";

export const store = configureStore({
  reducer: {
    userReducer: userSlice,
    settingReducer: settingSlice,
  },
});

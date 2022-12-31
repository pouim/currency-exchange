import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { RootState } from "redux/store";
import { initialState } from "./constants";

export const userConfigsSlice = createSlice({
  name: "userConfigs",
  initialState,
  reducers: {
    updateIsDarkMode: (
      state,
      action: PayloadAction<{
        isDarkMode: Partial<boolean>;
      }>
    ) => {
      const { isDarkMode } = action.payload;

      state.isDarkMode = isDarkMode;
    },
  },
});

export const useGetUserConfigs = () =>
  useSelector((state: RootState) => state.userConfigs);

// Action creators are generated for each case reducer function
export const { updateIsDarkMode } = userConfigsSlice.actions;

export default userConfigsSlice.reducer;

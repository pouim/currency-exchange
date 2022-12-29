import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isEmpty } from "helpers/function";
import { useSelector } from "react-redux";

import { RootState } from "redux/store";
import { initialState } from "./constants";
import { ConversionType } from "./types";

export const conversionHistorySlice = createSlice({
  name: "conversionHistorySlice",
  initialState,
  reducers: {
    addConversionData: (
      state,
      action: PayloadAction<{
        newData: ConversionType;
      }>
    ) => {
      const { newData } = action.payload;

      state.data.push(newData);
    },

    deleteConversionData: (
      state,
      action: PayloadAction<{
        key: string;
      }>
    ) => {
      const { key } = action.payload;

      if (!isEmpty(state.data)) {
        state.data = state.data.filter((item) => item.key !== key);
      }
    },
  },
});

export const useGetConversionHistoryData = () =>
  useSelector((state: RootState) => state.conversionHistory);

// Action creators are generated for each case reducer function
export const { addConversionData, deleteConversionData } =
  conversionHistorySlice.actions;

export default conversionHistorySlice.reducer;

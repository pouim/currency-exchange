import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

import { initialState } from "./constants";
import { StatisticsType } from "./types";

export const statisticsSlice = createSlice({
  name: "statisticsSlice",
  initialState,
  reducers: {
    updateStatistics: (
      state,
      action: PayloadAction<{
        newValues: StatisticsType;
      }>
    ) => {
      const { newValues } = action.payload;

      (Object.keys(newValues) as Array<keyof StatisticsType>).forEach((key) => {
        state[key] = newValues[key];
      });
    },
  },
});

export const useGetStatisticsData = () =>
  useSelector((state: RootState) => state.statistics);

// Action creators are generated for each case reducer function
export const { updateStatistics } = statisticsSlice.actions;

export default statisticsSlice.reducer;

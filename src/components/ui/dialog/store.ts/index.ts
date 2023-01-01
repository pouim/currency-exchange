import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { RootState } from "redux/store";
import { initialState } from "./constants";
import { OpenDialogData } from "./types";

export const dialogSlice = createSlice({
  name: "dialogSlice",
  initialState,
  reducers: {
    openDialog: (
      state,
      action: PayloadAction<{
        dialogData: OpenDialogData;
      }>
    ) => {
      const { dialogData } = action.payload;

      state.dialogData = { ...dialogData, isOpen: true };
    },

    closeDialog: (state) => {
      state.dialogData = initialState.dialogData;
    },
  },
});

export const useGetDialogData = () =>
  useSelector((state: RootState) => state.dialog.dialogData);

// Action creators are generated for each case reducer function
export const { openDialog, closeDialog } = dialogSlice.actions;

export default dialogSlice.reducer;

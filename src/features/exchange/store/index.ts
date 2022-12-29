import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { initialFormState } from "./constants";
import { FormFields } from "./types";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

export const currencyConvertorFormSlice = createSlice({
  name: "currencyConvertorForm",
  initialState: initialFormState,
  reducers: {
    updateFormFields: (
      state,
      action: PayloadAction<{
        newValues: Partial<FormFields>;
      }>
    ) => {
      const { newValues } = action.payload;

      (Object.keys(newValues) as Array<keyof FormFields>).forEach(
        (fieldName) => {
          state[fieldName] = newValues[fieldName] ?? "";
        }
      );
    },
  },
});

export const useGetFormData = () =>
  useSelector((state: RootState) => state.form);

// Action creators are generated for each case reducer function
export const { updateFormFields } = currencyConvertorFormSlice.actions;

export default currencyConvertorFormSlice.reducer;

import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { updateFormFields } from ".";
import { FormFields } from "./types";

/**
 * @function useUpdateFormFields
 * @param { keyof FormFields } fieldName
 * @param { string | number } value
 */
export const useUpdateFormFields = () => {
  const dispatch = useDispatch();
  return useCallback(
    (newValues: Partial<FormFields>) => {
      dispatch(
        updateFormFields({
          newValues,
        })
      );
    },
    [dispatch]
  );
};

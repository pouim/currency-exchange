import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { addConversionData, deleteConversionData } from ".";
import { ConversionType } from "./types";

/**
 * @function useAddConversion
 * @param { StatisticsType } value
 */
export const useAddConversion = () => {
  const dispatch = useDispatch();
  return useCallback(
    (newData: ConversionType) => {
      dispatch(addConversionData({ newData }));
    },
    [dispatch]
  );
};

/**
 * @function useDeleteConversion
 * @param { string } key
 */
export const useDeleteConversion = () => {
  const dispatch = useDispatch();
  return useCallback(
    (key: string) => {
      dispatch(deleteConversionData({ key }));
    },
    [dispatch]
  );
};

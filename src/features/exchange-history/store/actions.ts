import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { updateStatistics } from ".";
import { StatisticsType } from "./types";

/**
 * @function useUpdateStatistics
 * @param { StatisticsType } value
 */
export const useUpdateStatistics = () => {
  const dispatch = useDispatch();
  return useCallback(
    (newValues: StatisticsType) => {
      dispatch(updateStatistics({ newValues }));
    },
    [dispatch]
  );
};

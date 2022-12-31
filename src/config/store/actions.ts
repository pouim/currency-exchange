import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { updateIsDarkMode } from ".";

/**
 * @function useUpdateIsDarkMode
 * @param { boolean } isDarkMode
 * @returns { void }
 */
export const useUpdateIsDarkMode = () => {
  const dispatch = useDispatch();
  return useCallback(
    (isDarkMode: boolean) => {
      dispatch(
        updateIsDarkMode({
          isDarkMode,
        })
      );
    },
    [dispatch]
  );
};

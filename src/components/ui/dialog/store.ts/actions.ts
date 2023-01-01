import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { closeDialog, openDialog } from ".";
import { OpenDialogData } from "./types";

/**
 * @function useOpenDialog
 * @param { OpenDialogData } dialogData
 */
export const useOpenDialog = () => {
  const dispatch = useDispatch();
  return useCallback(
    (dialogData: OpenDialogData) => {
      dispatch(openDialog({ dialogData }));
    },
    [dispatch]
  );
};

/**
 * @function useCloseDialog
 */
export const useCloseDialog = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(closeDialog());
  }, [dispatch]);
};

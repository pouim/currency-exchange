import { DialogData } from "./types";

export const initialState = {
  dialogData: {
    isOpen: false,
    title: "",
    onConfirm: () => {},
  } as DialogData,
};

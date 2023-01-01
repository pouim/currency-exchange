export type DialogData = {
  isOpen: boolean;
  title: string;
  bodyText?: string;
  onConfirm: () => void;
};

export type OpenDialogData = Pick<
  DialogData,
  "title" | "bodyText" | "onConfirm"
>;

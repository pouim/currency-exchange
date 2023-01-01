import { useCallback } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useGetDialogData } from "./store.ts";
import { useCloseDialog } from "./store.ts/actions";
import { isEmpty } from "helpers/function";

function CustomDialog() {
  const { isOpen, onConfirm, title, bodyText = undefined } = useGetDialogData();

  const handleClose = useCloseDialog();

  const handleConfirm = useCallback(() => {
    handleClose();
    onConfirm();
  }, [handleClose, onConfirm]);

  return (
    <>
      {isOpen ? (
        <Dialog
          open={isOpen}
          onClose={handleClose}
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
          data-test="dialog"
        >
          <DialogTitle id="dialog-title" data-test='"dialog-title"'>
            {title}
          </DialogTitle>
          {!isEmpty(bodyText) && (
            <DialogContent>
              <DialogContentText
                id="dialog-description"
                data-test='"dialog-description"'
              >
                {bodyText}
              </DialogContentText>
            </DialogContent>
          )}
          <DialogActions>
            <Button
              color="inherit"
              onClick={handleClose}
              data-test="dialog-cancel-button"
              autoFocus
            >
              Cancel
            </Button>
            <Button
              color="warning"
              onClick={handleConfirm}
              data-test="dialog-confirm-button"
            >
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      ) : null}
    </>
  );
}

export default CustomDialog;

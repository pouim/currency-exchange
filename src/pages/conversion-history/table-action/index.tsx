import { memo, useCallback } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import ViewIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/DeleteForever";

import { useDeleteConversion } from "../store/actions";
import { TableActionProps } from "./types";
import { Box, Button } from "@mui/material";
import { AppPathNames } from "config/constants";
import { useOpenDialog } from "components/ui/dialog/store.ts/actions";

function Actions({ data }: TableActionProps) {
  const navigate = useNavigate();

  const openDialog = useOpenDialog();
  const deleteConversion = useDeleteConversion();

  const handleDeleteConversion = useCallback(() => {
    const { key } = data;

    openDialog({
      title: "Delete the item?",
      bodyText:
        "This conversion will be completely deleted from the conversion history!",
      onConfirm: () => deleteConversion(key),
    });
  }, [data, deleteConversion, openDialog]);

  const handleView = useCallback(() => {
    const { fromSymbol, toSymbol, amount } = data;

    navigate({
      pathname: `/${AppPathNames.CURRENCY_CONVERTOR}`,
      search: createSearchParams({
        fromSymbol,
        toSymbol,
        amount,
      }).toString(),
    });
  }, [data, navigate]);

  return (
    <Box display="flex" gap={5} sx={{ opacity: 0 }}>
      <Button
        onClick={handleView}
        size="small"
        variant="text"
        startIcon={<ViewIcon />}
        data-test="view-action-button"
      >
        View
      </Button>
      <Button
        onClick={handleDeleteConversion}
        size="small"
        color="warning"
        variant="text"
        startIcon={<DeleteIcon />}
        data-test="delete-action-button"
      >
        Delete from history
      </Button>
    </Box>
  );
}

export default memo(Actions);

import { memo, useCallback } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import ViewIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/DeleteForever";

import { useDeleteConversion } from "../store/actions";
import { TableActionProps } from "./types";
import { Box, Button } from "@mui/material";
import { AppPathNames } from "config/constants";

function Actions({ data }: TableActionProps) {
  const navigate = useNavigate();

  const deleteConversion = useDeleteConversion();

  const handleDeleteConversion = useCallback(() => {
    const { key } = data;
    deleteConversion(key);
  }, [data, deleteConversion]);

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
    <Box display="flex" gap={5}>
      <Button
        onClick={handleView}
        size="small"
        variant="text"
        sx={{
          fontSize: 12,
        }}
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
        sx={{
          fontSize: 12,
        }}
        startIcon={<DeleteIcon />}
        data-test="delete-action-button"
      >
        Delete from history
      </Button>
    </Box>
  );
}

export default memo(Actions);

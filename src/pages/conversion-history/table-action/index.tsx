import { memo } from "react";
import ViewIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/DeleteForever";

import { useDeleteConversion } from "../store/actions";
import { TableActionProps } from "./types";
import { Box, Button } from "@mui/material";

function Actions({ data }: TableActionProps) {
  const deleteConversion = useDeleteConversion();

  const handleDeleteConversion = () => {
    const { key } = data;
    deleteConversion(key);
  };

  return (
    <Box display="flex" gap={5}>
      <Button
        size="small"
        variant="text"
        sx={{
          fontSize: 12,
        }}
        startIcon={<ViewIcon />}
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
      >
        Delete from history
      </Button>
    </Box>
  );
}

export default memo(Actions);

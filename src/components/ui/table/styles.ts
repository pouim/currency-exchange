import { TableCell, TableRow } from "@mui/material";
import { styled } from "@mui/system";

export const CustomTableRow = styled(TableRow)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.customColor.tableHoverColor,

    "& div": {
      transition: "0.3s",
      opacity: 1,
    },
  },
}));

export const CustomTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.customColor.tableHeaderColor,
}));

import { TableRow } from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/system";

export const CustomTableRow = styled(TableRow)(() => ({
  "&:hover": {
    backgroundColor: grey[200],

    "& td": {
      transition: "0.3s",
      opacity: 1,
    },
  },
}));

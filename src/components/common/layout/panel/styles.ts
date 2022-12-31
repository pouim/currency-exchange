import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const PanelWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  justifyContent: "center",
  background: theme.palette?.customColor.appBackgroundColor,
}));

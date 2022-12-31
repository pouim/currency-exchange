import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const HeaderWrapper = styled(Box)(({ theme }) => ({
  background: theme.palette?.customColor.appHeaderBackgroundColor,
  boxShadow: `rgba(149, 157, 165, 0.2) 0px 8px 24px`
}));

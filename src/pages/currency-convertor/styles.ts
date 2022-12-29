import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled(Box)(() => ({
  width: "90%",

  "@media (min-width: 900px)": {
    width: "80%",
  },
}));

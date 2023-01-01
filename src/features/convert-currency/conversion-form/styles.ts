import { styled } from "@mui/system";

export const ConvertorWrapper = styled("form")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 20,
  marginTop: "2rem",

  "@media (min-width:1200px)": {
    flexDirection: "row",
    alignItems: "flex-end",
  },
}));
import { createTheme, ThemeOptions } from "@mui/material";
import {
  PRIMARY_COLOR,
  PRIMARY_TEXT_COLOR,
  SECONDARY_COLOR,
  SECONDARY_TEXT_COLOR,
  WARNING_COLOR,
} from "./constants";

export const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
      contrastText: "#fff",
    },
    warning: {
      main: WARNING_COLOR,
    },
    text: {
      primary: PRIMARY_TEXT_COLOR,
      secondary: SECONDARY_TEXT_COLOR,
    },
  },

  typography: {
    fontFamily: "Roboto, sans-serif",

    h1: {
      fontSize: 20,
      fontWeight: "bold",
      color: PRIMARY_TEXT_COLOR,

      "@media (min-width:700px)": {
        fontSize: 36,
      },

      "@media (min-width:1200px)": {
        fontSize: 48,
      },
    },

    h2: {
      fontSize: 18,
      fontWeight: "bold",
      color: PRIMARY_TEXT_COLOR,

      "@media (min-width:1200px)": {
        fontSize: 24,
      },
    },

    h3: {
      fontSize: 16,
      fontFamily: "Roboto Regular",
      color: PRIMARY_TEXT_COLOR,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'Roboto, sans-serif';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
      }
      `,
    },
  },
});
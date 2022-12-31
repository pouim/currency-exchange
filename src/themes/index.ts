import { createTheme, ThemeOptions } from "@mui/material";
import { grey } from "@mui/material/colors";

import { useGetUserConfigs } from "config/store";
import {
  APP_BACKGROUND_COLOR,
  APP_BLACK_COLOR,
  APP_DARK_BACKGROUND_COLOR,
  APP_WHITE_COLOR,
  PRIMARY_COLOR,
  PRIMARY_DARK_TEXT_COLOR,
  PRIMARY_TEXT_COLOR,
  SECONDARY_COLOR,
  SECONDARY_TEXT_COLOR,
  TABLE_DARK_HOVER_COLOR,
  TABLE_HOVER_COLOR,
  WARNING_COLOR,
} from "./constants";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    customColor: {
      appHeaderBackgroundColor: string;
      appBackgroundColor: string;
      tableHoverColor: string;
      tableHeaderColor: string;
    };
  }
  interface PaletteOptions {
    customColor: {
      appHeaderBackgroundColor: string;
      appBackgroundColor: string;
      tableHoverColor: string;
      tableHeaderColor: string;
    };
  }
}

export function useCreateCustomTheme() {
  const { isDarkMode } = useGetUserConfigs();

  const theme: ThemeOptions = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: PRIMARY_COLOR,
      },
      secondary: {
        main: SECONDARY_COLOR,
        contrastText: APP_WHITE_COLOR,
      },
      warning: {
        main: WARNING_COLOR,
      },
      text: {
        primary: isDarkMode ? PRIMARY_DARK_TEXT_COLOR : PRIMARY_TEXT_COLOR,
        secondary: isDarkMode ? PRIMARY_DARK_TEXT_COLOR : SECONDARY_TEXT_COLOR,
      },

      customColor: {
        appHeaderBackgroundColor: isDarkMode
          ? APP_BLACK_COLOR
          : APP_WHITE_COLOR,
        appBackgroundColor: isDarkMode
          ? APP_DARK_BACKGROUND_COLOR
          : APP_BACKGROUND_COLOR,

        tableHoverColor: isDarkMode
          ? TABLE_DARK_HOVER_COLOR
          : TABLE_HOVER_COLOR,

        tableHeaderColor: isDarkMode ? APP_BLACK_COLOR : grey[100],
      },
    },

    typography: {
      fontFamily: "Roboto, sans-serif",

      h1: {
        fontSize: 16,
        fontWeight: "bold",
        color: isDarkMode ? PRIMARY_DARK_TEXT_COLOR : PRIMARY_TEXT_COLOR,

        "@media (min-width:600px)": {
          fontSize: 20,
        },

        "@media (min-width:700px)": {
          fontSize: 36,
        },

        "@media (min-width:1200px)": {
          fontSize: 48,
        },
      },

      h2: {
        fontSize: 16,
        fontWeight: "bold",
        color: isDarkMode ? PRIMARY_DARK_TEXT_COLOR : PRIMARY_TEXT_COLOR,

        "@media (min-width:700px)": {
          fontSize: 18,
        },

        "@media (min-width:1200px)": {
          fontSize: 24,
        },
      },

      h3: {
        fontSize: 12,
        fontFamily: "Roboto Regular",
        color: isDarkMode ? PRIMARY_DARK_TEXT_COLOR : PRIMARY_TEXT_COLOR,

        "@media (min-width:700px)": {
          fontSize: 14,
        },

        "@media (min-width:1200px)": {
          fontSize: 16,
        },
      },
    },

    components: {
      MuiInput: {
        styleOverrides: {
          root: {
            fontSize: 13,
            "@media (min-width:700px)": {
              fontSize: 14,
            },

            "@media (min-width:1200px)": {
              fontSize: 15,
            },
          },
        },
      },

      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontSize: 13,
            "@media (min-width:700px)": {
              fontSize: 14,
            },

            "@media (min-width:1200px)": {
              fontSize: 15,
            },
          },
        },
      },

      MuiTableHead: {
        styleOverrides: {
          root: {
            background: "red",
          },
        },
      },

      MuiTableCell: {
        styleOverrides: {
          root: {
            fontSize: 10,

            "@media (min-width:700px)": {
              fontSize: 12,
            },

            "@media (min-width:1200px)": {
              fontSize: 14,
            },
          },
        },
      },

      MuiButton: {
        styleOverrides: {
          root: {
            fontSize: 8,

            "@media (min-width:700px)": {
              fontSize: 12,
            },
          },
        },
      },
    },
  });

  return { theme };
}

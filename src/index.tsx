import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@emotion/react";

import "./index.css";
import { theme } from "./themes";
import App from "App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Create a client
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
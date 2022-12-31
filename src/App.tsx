import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";

import Layout from "components/common/layout";
import { useCreateCustomTheme } from "themes";

function App() {
  const { theme } = useCreateCustomTheme();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

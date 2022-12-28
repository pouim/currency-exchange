import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import { Routings } from "config/routes";
import { Header } from "./header";

function Layout() {
  return (
    <Box sx={{ width: "100%" }}>
      <Header />
      <Routes>
        {Routings.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Box>
  );
}

export default Layout;

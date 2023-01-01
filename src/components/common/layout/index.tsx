import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import { Routings } from "config/routes";
import { Header } from "./header";
import CustomDialog from "components/ui/dialog";

function Layout() {
  return (
    <Box sx={{ width: "100%" }}>
      <Header />
      <Routes>
        {Routings.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      <CustomDialog />
    </Box>
  );
}

export default Layout;

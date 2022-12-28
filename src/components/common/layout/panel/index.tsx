import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";

import { PanelProps } from "./types";

function Panel({ children }: PanelProps) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      pt={5}
      px={{ s: 1, md: 0 }}
      sx={{ background: grey[300], height: "100vh" }}
    >
      {children}
    </Box>
  );
}

export default Panel;

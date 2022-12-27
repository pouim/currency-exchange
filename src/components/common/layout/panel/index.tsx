import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

import { PanelProps } from "./types";

function Panel({ title, children }: PanelProps) {
  return (
    <Box sx={{ background: grey[300], height: "100vh" }} px={22} py={8}>
      <Typography variant="h1">{title}</Typography>
      {children}
    </Box>
  );
}

export default Panel;

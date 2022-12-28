import { Box, Typography } from "@mui/material";

import Panel from "components/common/layout/panel";
import AppTable from "components/ui/table";

const sampleData = [
  {
    date: "2021/1/1",
    event: "Converting an amount of 500 from EUR to USD",
  },
  {
    date: "2021/1/2",
    event: "Converting an amount of 500 from EUR to USD",
  },
  {
    date: "2021/1/3",
    event: "Converting an amount of 500 from EUR to USD",
  },
  {
    date: "2021/1/1",
    event: "Converting an amount of 500 from EUR to USD",
  },
];

function ConversionHistory() {
  return (
    <Panel>
      <Box width={{ xs: "90%", lg: "70%", height: "100vh" }}>
        <Typography variant="h1" color="text.primary" mb={2}>
          Conversion History
        </Typography>

        <AppTable tableData={sampleData} />
      </Box>
    </Panel>
  );
}

export default ConversionHistory;

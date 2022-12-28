import { Box } from "@mui/material";
import AppTable from "components/ui/table";

const sampleData = [
  {
    date: "2021/1/1",
    exchange_rate: 1.132,
  },
  {
    date: "2021/1/2",
    exchange_rate: 1.132,
  },
  {
    date: "2021/1/3",
    exchange_rate: 1.132,
  },
];

function RateHistory() {
  return (
    <Box>
      <AppTable tableData={sampleData} />
    </Box>
  );
}

export default RateHistory;

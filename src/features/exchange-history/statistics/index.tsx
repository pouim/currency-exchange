import { TableCell } from "@mui/material";

import AppTable from "components/ui/table";
import { CustomTableRow } from "components/ui/table/styles";
import { isAllValuesTruthy } from "helpers/function";
import { useGetStatisticsData } from "../store";

function Statistics() {
  const headerCell = ["Statistics", ""];

  const statisticsData = useGetStatisticsData();
  const { lowest, highest, average } = statisticsData;

  return (
    <AppTable
      isTableEmpty={!isAllValuesTruthy(statisticsData)}
      containerHeight={211}
      headerCells={headerCell}
      dataTest="statistics"
    >
      <CustomTableRow>
        <TableCell>Lowest</TableCell>
        <TableCell data-test="lowest-rate">{lowest}</TableCell>
      </CustomTableRow>
      <CustomTableRow>
        <TableCell>Highest</TableCell>
        <TableCell data-test="highest-rate">{highest}</TableCell>
      </CustomTableRow>
      <CustomTableRow>
        <TableCell>Average</TableCell>
        <TableCell data-test="average-rate">{average.toFixed(6)}</TableCell>
      </CustomTableRow>
    </AppTable>
  );
}

export default Statistics;

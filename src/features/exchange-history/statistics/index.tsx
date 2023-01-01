import { useMemo } from "react";
import { TableCell } from "@mui/material";

import AppTable from "components/ui/table";
import { CustomTableRow } from "components/ui/table/styles";
import { findArrayMinMaxAvg, isAllValuesTruthy } from "helpers/function";
import { useGetHistoricalRatesMutation } from "services/exchange";

function Statistics() {
  const headerCell = ["Statistics", ""];

  const [, { isLoading, data }] = useGetHistoricalRatesMutation({
    fixedCacheKey: "historical-rates",
  });

  const { min, max, avg } = useMemo(() => {
    if (data?.rates) {
      const allRates = Object.keys(data.rates).map((date) => {
        const value = data.rates[date];

        return Object.values(value)[0];
      });

      return findArrayMinMaxAvg(allRates);
    }

    return { min: 0, max: 0, avg: 0 };
  }, [data?.rates]);

  return (
    <AppTable
      isTableEmpty={!isAllValuesTruthy(data)}
      isLoading={isLoading}
      containerHeight={211}
      headerCells={headerCell}
      dataTest="statistics"
    >
      <CustomTableRow>
        <TableCell>Lowest</TableCell>
        <TableCell data-test="lowest-rate">{min}</TableCell>
      </CustomTableRow>
      <CustomTableRow>
        <TableCell>Highest</TableCell>
        <TableCell data-test="highest-rate">{max}</TableCell>
      </CustomTableRow>
      <CustomTableRow>
        <TableCell>Average</TableCell>
        <TableCell data-test="average-rate">{avg.toFixed(6)}</TableCell>
      </CustomTableRow>
    </AppTable>
  );
}

export default Statistics;

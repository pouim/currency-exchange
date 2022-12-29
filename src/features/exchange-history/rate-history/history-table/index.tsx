import { TableCell } from "@mui/material";
import { useMemo } from "react";

import AppTable from "components/ui/table";
import { isEmpty } from "helpers/function";
import { HistoryTableData, HistoryTableProps } from "./types";
import { CustomTableRow } from "components/ui/table/styles";

function HistoryTable(props: HistoryTableProps) {
  const { isLoading, data } = props;

  const tableDate = useMemo(() => {
    if (data?.rates) {
      const formattedDate = Object.keys(data.rates).map((date) => {
        const value = data.rates[date];

        return {
          date,
          rate: Object.values(value)[0],
        } as HistoryTableData;
      });

      return formattedDate.reverse();
    }

    return [];
  }, [data?.rates]);

  return (
    <AppTable
      isLoading={isLoading}
      isTableEmpty={isEmpty(data)}
      headerCells={["Data", "Exchange rate"]}
      containerHeight={300}
    >
      {tableDate.map(({ date, rate }, index) => (
        <CustomTableRow key={index}>
          <TableCell>{date}</TableCell>
          <TableCell>{rate}</TableCell>
        </CustomTableRow>
      ))}
    </AppTable>
  );
}

export default HistoryTable;

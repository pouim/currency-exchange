import { TableCell } from "@mui/material";

import AppTable from "components/ui/table";
import { isEmpty } from "helpers/function";
import { HistoryTableProps } from "./types";
import { CustomTableRow } from "components/ui/table/styles";

function HistoryTable(props: HistoryTableProps) {
  const { isLoading, tableData, shouldHide = false } = props;

  return (
    <AppTable
      isLoading={isLoading}
      isTableEmpty={isEmpty(tableData)}
      headerCells={["Data", "Exchange rate"]}
      containerHeight={300}
      style={{ display: shouldHide ? "none" : "" }}
    >
      {tableData.map(({ date, rate }, index) => (
        <CustomTableRow key={index}>
          <TableCell>{date}</TableCell>
          <TableCell>{rate}</TableCell>
        </CustomTableRow>
      ))}
    </AppTable>
  );
}

export default HistoryTable;

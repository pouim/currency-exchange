import { Box, TableCell, Typography } from "@mui/material";

import Panel from "components/common/layout/panel";
import AppTable from "components/ui/table";
import { headerCells } from "./constants";
import { useGetConversionHistoryData } from "./store";
import { convertUnixTimestamp, isEmpty } from "helpers/function";
import { CustomTableRow } from "components/ui/table/styles";
import TableAction from "./table-action";

function ConversionHistory() {
  const { data } = useGetConversionHistoryData();

  return (
    <Panel>
      <Box width={{ xs: "100%", lg: "80%" }}>
        <Typography
          variant="h1"
          color="text.primary"
          mb={2}
          ml={{ xs: 1 }}
          data-test="conversion-history-title"
        >
          Conversion History
        </Typography>

        <AppTable
          containerHeight={700}
          isTableEmpty={isEmpty(data)}
          headerCells={headerCells}
          dataTest="conversion-history"
        >
          {data.map((conversion) => {
            const { timestamp, fromSymbol, toSymbol, amount } = conversion;
            return (
              <CustomTableRow data-test="conversion-history-table-row">
                <TableCell>{convertUnixTimestamp(timestamp)}</TableCell>
                <TableCell>{`Converted an amount of ${amount} from ${fromSymbol} to ${toSymbol}`}</TableCell>
                <TableCell>
                  <TableAction data={conversion} />
                </TableCell>
              </CustomTableRow>
            );
          })}
        </AppTable>
      </Box>
    </Panel>
  );
}

export default ConversionHistory;

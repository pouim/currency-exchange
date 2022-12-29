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
      <Box width={{ xs: "90%", lg: "70%", height: "100vh" }}>
        <Typography variant="h1" color="text.primary" mb={2}>
          Conversion History
        </Typography>

        <AppTable
          containerHeight={400}
          isTableEmpty={isEmpty(data)}
          headerCells={headerCells}
        >
          {data.map((conversion) => {
            const { timestamp, fromSymbol, toSymbol, amount } = conversion;
            return (
              <CustomTableRow>
                <TableCell>{convertUnixTimestamp(timestamp)}</TableCell>
                <TableCell>{`Converted an amount of ${amount} from ${fromSymbol} to ${toSymbol}`}</TableCell>
                <TableCell sx={{ opacity: 0 }}>
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

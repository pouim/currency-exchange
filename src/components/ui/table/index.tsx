import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { capitalize } from "helpers/function";
import { SECONDARY_TEXT_COLOR } from "themes/constants";
import { AppTableProps } from "./types";

function AppTable(props: AppTableProps) {
  const {
    headerCells,
    isTableEmpty,
    isEmptyMessage = "No Data!",
    isLoading,
    containerHeight = 250,
    style,
    children,
    dataTest
  } = props;

  return (
    <TableContainer
      component={Paper}
      sx={{ height: containerHeight, ...style }}
      data-test={`${dataTest}-table`}
    >
      <Table stickyHeader aria-label="simple table">
        {isLoading ? (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height={containerHeight}
          >
            <CircularProgress />
          </Box>
        ) : isTableEmpty ? (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height={250}
            data-test={`${dataTest}-table-empty-state`}
          >
            {isEmptyMessage}
          </Box>
        ) : (
          <>
            <TableHead>
              <TableRow>
                {headerCells.map((header) => (
                  <TableCell sx={{ color: SECONDARY_TEXT_COLOR }} key={header}>
                    {capitalize(header)}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>{children}</TableBody>
          </>
        )}
      </Table>
    </TableContainer>
  );
}

export default AppTable;

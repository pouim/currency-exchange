import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { capitalize } from "helpers/function";
import { CustomTableCell } from "./styles";
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
    dataTest,
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
            height={containerHeight}
            data-test={`${dataTest}-table-empty-state`}
          >
            <Typography variant="h3">{isEmptyMessage}</Typography>
          </Box>
        ) : (
          <>
            <TableHead>
              <TableRow>
                {headerCells.map((header) => (
                  <CustomTableCell key={header}>
                    <Typography color="text.secondary" variant="h3">
                      {capitalize(header)}
                    </Typography>
                  </CustomTableCell>
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

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
  } = props;

  return (
    <TableContainer component={Paper} sx={{ height: containerHeight, ...style }}>
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
          >
            {isEmptyMessage}
          </Box>
        ) : (
          <>
            <TableHead>
              <TableRow>
                {headerCells.map((header) => (
                  <TableCell key={header}>{capitalize(header)}</TableCell>
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

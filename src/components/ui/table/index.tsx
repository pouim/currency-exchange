import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { capitalize, isEmpty } from "helpers/function";
import { CustomTableRow } from "./styles";
import { AppTableProps } from "./types";

function AppTable(props: AppTableProps) {
  const { tableData, containerHeight = 250 } = props;


  console.log("tableData", tableData);

  const headers = Object.keys(tableData[0] ?? []);

  return (
    <TableContainer component={Paper} sx={{ height: containerHeight }}>
      <Table stickyHeader aria-label="simple table">
        {isEmpty(tableData) ? (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height={250}
          >
            No Data!
          </Box>
        ) : (
          <>
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableCell key={header}>{capitalize(header)}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((data, index) => (
                <CustomTableRow key={index}>
                  {headers.map((header) => {
                    const { hideCell = false } = data[header]?.config || {};
                    const tableCellValue = data[header]?.value;

                    return (
                      <TableCell
                        sx={{
                          opacity: hideCell ? 0 : 1,
                        }}
                        key={header}
                      >
                        {tableCellValue}
                      </TableCell>
                    );
                  })}
                </CustomTableRow>
              ))}
            </TableBody>
          </>
        )}
      </Table>
    </TableContainer>
  );
}

export default AppTable;

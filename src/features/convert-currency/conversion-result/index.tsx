import { Box, CircularProgress, Typography } from "@mui/material";

import { ConversionResultProps } from "./types";
import { isAllValuesTruthy } from "helpers/function";

function ConversionResult(props: ConversionResultProps) {
  const { isLoading, isSucceed, data } = props;

  const { fromSymbol, toSymbol, amount, rate, result } = data || {};

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      px={8}
      pt={5}
    >
      {isSucceed && isAllValuesTruthy(data) ? (
        <>
          <Box display="flex" mb={2}>
            <Typography variant="h1" color="text.primary" fontWeight={300}>
              {amount} {fromSymbol} =&nbsp;
            </Typography>
            <Typography variant="h1" color="secondary">
              {result} {toSymbol}
            </Typography>
          </Box>

          <Box>
            <Typography color="text.primary">
              1 {fromSymbol} = {rate} {toSymbol}
            </Typography>
            <Typography color="text.primary">
              1 {toSymbol} = {(1 / rate).toFixed(6)} {fromSymbol}
            </Typography>
          </Box>
        </>
      ) : isLoading ? (
        <CircularProgress />
      ) : (
        <Box p={8}>No Data</Box>
      )}
    </Box>
  );
}

export default ConversionResult;

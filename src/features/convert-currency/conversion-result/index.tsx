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
      data-test="conversion-result-wrapper"
    >
      {isSucceed && isAllValuesTruthy(data) ? (
        <>
          <Box display="flex" mb={2} data-test="conversion-result-info">
            <Typography variant="h1" color="text.primary" fontWeight={300}>
              {amount} {fromSymbol} =&nbsp;
            </Typography>
            <Typography variant="h1" color="secondary">
              {result} {toSymbol}
            </Typography>
          </Box>

          <Box data-test="conversion-rate-info">
            <Typography
              color="text.primary"
              data-test="conversion-rate-from-info"
            >
              1 {fromSymbol} = {rate} {toSymbol}
            </Typography>
            <Typography
              color="text.primary"
              data-test="conversion-rate-to-info"
            >
              1 {toSymbol} = {(1 / rate).toFixed(6)} {fromSymbol}
            </Typography>
          </Box>
        </>
      ) : isLoading ? (
        <Box p={5}>
          {" "}
          <CircularProgress size={30} />
        </Box>
      ) : (
        <Box data-test="conversion-result-no-data" p={8}>
          No Data
        </Box>
      )}
    </Box>
  );
}

export default ConversionResult;

import { Box, Typography } from "@mui/material";

import {
  useConvertCurrencyMutation,
  useGetAllSymbolsQuery,
} from "services/exchange";
import ConversionResult from "./conversion-result";
import ConversionForm from "./conversion-form";

function Convertor() {
  const { data } = useGetAllSymbolsQuery();
  const [
    convertCurrencyApi,
    {
      isLoading: isConverting,
      isSuccess: isConversionSucceed,
      data: conversionData,
    },
  ] = useConvertCurrencyMutation();

  const allSymbolsData = Object.keys(data?.symbols ?? []);

  return (
    <Box px={{ xs: 1 }}>
      <Typography
        variant="h1"
        color="text.primary"
        data-test="convertor-page-title"
      >
        I want to convert
      </Typography>

      <ConversionForm
        allSymbolsData={allSymbolsData}
        convertCurrencyApi={convertCurrencyApi}
      />

      <ConversionResult
        isLoading={isConverting}
        isSucceed={isConversionSucceed}
        data={{
          fromSymbol: conversionData?.query.from ?? "",
          toSymbol: conversionData?.query.to ?? "",
          amount: conversionData?.query.amount ?? 0,
          rate: conversionData?.info.rate ?? 0,
          result: conversionData?.result ?? 0,
        }}
      />
    </Box>
  );
}

export default Convertor;

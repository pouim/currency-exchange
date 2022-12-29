import { Controller } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

import AutoCompleteInput from "components/ui/auto-complete-input";
import { PRIMARY_COLOR } from "themes/constants";
import { ConvertorWrapper } from "./styles";
import { ExchangeProps } from "./types";
import { useGetAllSymbols } from "hooks";
import { isAllValuesTruthy } from "helpers/function";

function Exchange(props: ExchangeProps) {
  const {
    handleConvert,
    onToggleCurrencies,
    control,
    setValue,
    watch,
    conversionData,
  } = props;

  const { data } = useGetAllSymbols();

  const allSymbolsData = Object.keys(data?.symbols ?? []);

  return (
    <Box>
      <Typography variant="h1" color="text.primary">
        I want to convert
      </Typography>
      <ConvertorWrapper onSubmit={handleConvert}>
        <Controller
          name="amount"
          control={control}
          render={({ field }) => (
            <TextField
              sx={{ width: { xs: "100%", lg: 350 } }}
              variant="standard"
              label="Amount"
              {...field}
            />
          )}
        />

        <Box display="flex" alignItems="flex-end" gap="2%">
          <AutoCompleteInput
            name="from"
            label="From"
            options={allSymbolsData}
            watch={watch}
            setValue={setValue}
          />
          <Button
            onClick={onToggleCurrencies}
            variant="contained"
            sx={{
              background: "#fff",
              color: PRIMARY_COLOR,
              minWidth: 10,
              padding: "5px 8px",
            }}
          >
            {" "}
            <CompareArrowsIcon />
          </Button>

          <AutoCompleteInput
            name="to"
            label="To"
            options={allSymbolsData}
            watch={watch}
            setValue={setValue}
          />
        </Box>

        <Button sx={{ height: 35 }} variant="contained" type="submit">
          Convert
        </Button>
      </ConvertorWrapper>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        px={8}
        pt={5}
      >
        {isAllValuesTruthy(conversionData) ? (
          <>
            <Box display="flex" mb={2}>
              <Typography variant="h1" color="text.primary" fontWeight={300}>
                {conversionData!.amount} {conversionData!.from} ={" "}
              </Typography>{" "}
              <Typography variant="h1" color="secondary">
                {conversionData!.rate * conversionData!.amount}{" "}
                {conversionData?.to}
              </Typography>
            </Box>

            <Box>
              <Typography color="text.primary">
                1 {conversionData!.from} = {conversionData!.rate}{" "}
                {conversionData!.to}
              </Typography>
              <Typography color="text.primary">
                1 {conversionData?.to} = {1 / conversionData!.rate}{" "}
                {conversionData!.from}
              </Typography>
            </Box>
          </>
        ) : (
          <Box p={8}>No Data</Box>
        )}
      </Box>
    </Box>
  );
}

export default Exchange;

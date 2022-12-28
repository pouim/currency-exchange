import { Controller } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

import AutoCompleteInput from "components/ui/auto-complete-input";
import { PRIMARY_COLOR } from "themes/constants";
import { ConvertorWrapper } from "./styles";
import { ExchangeProps } from "./types";
import { useGetAllSymbols } from "hooks";

function Exchange(props: ExchangeProps) {
  const {
    handleConvert,
    onToggleCurrencies,
    control,
    setValue,
    watch,
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
        <Box display="flex" mb={2}>
          <Typography variant="h1" color="text.primary" fontWeight={300}>
            500 EUR ={" "}
          </Typography>{" "}
          <Typography variant="h1" color="secondary">
            576,168 USD
          </Typography>
        </Box>

        <Box>
          <Typography color="text.primary">1 EUR = 1,1532445 USD</Typography>
          <Typography color="text.primary">1 USD = 0,8754326 EUR</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Exchange;

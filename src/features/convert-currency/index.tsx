import { useCallback } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { v4 as uuidv4 } from "uuid";

import AutoCompleteInput from "components/ui/auto-complete-input";
import { PRIMARY_COLOR } from "themes/constants";
import { ConvertorWrapper } from "./styles";
import { useGetFormData } from "./store";
import { useUpdateFormFields } from "./store/actions";
import {
  useConvertCurrencyMutation,
  useGetAllSymbolsQuery,
} from "services/exchange";
import ConversionResult from "./conversion-result";
import { useAddConversion } from "pages/conversion-history/store/actions";
import {
  getQueryParams,
  getUnixTimestamp,
  isAllValuesTruthy,
  isEmpty,
  isOffline,
} from "helpers/function";
import { useIfObjectChanged } from "helpers/hooks";
import { ConversionType } from "pages/conversion-history/store/types";
import { showMessage } from "helpers/libs";

function Convertor() {
  const params = getQueryParams();

  const { amount, fromSymbol, toSymbol } = useGetFormData();
  const updateFormFields = useUpdateFormFields();

  const addToConversionHistory = useAddConversion();

  const { data } = useGetAllSymbolsQuery();
  const [
    convertCurrency,
    {
      isLoading: isConverting,
      isSuccess: isConversionSucceed,
      data: conversionData,
    },
  ] = useConvertCurrencyMutation();

  const allSymbolsData = Object.keys(data?.symbols ?? []);

  /**
   * @function handleToggleCurrencies
   * @returns { void }
   */
  const handleToggleCurrencies = useCallback(() => {
    updateFormFields({
      fromSymbol: toSymbol,
      toSymbol: fromSymbol,
    });
  }, [fromSymbol, toSymbol, updateFormFields]);

  /**
   * @function handleConvertCurrency
   * @returns { void }
   */
  const handleConvertCurrency = useCallback(
    (
      data: Pick<ConversionType, "amount" | "fromSymbol" | "toSymbol">,
      event?: React.MouseEvent<HTMLElement>
    ) => {
      event?.preventDefault();

      const { fromSymbol, toSymbol, amount } = data;

      const isUserOffline = isOffline();

      if (isUserOffline) {
        showMessage("You are offline!", "ERROR");
      } else {
        convertCurrency({
          from: fromSymbol,
          to: toSymbol,
          amount: amount,
        }).then(() => {
          addToConversionHistory({
            fromSymbol,
            toSymbol,
            amount,
            timestamp: getUnixTimestamp(),
            key: uuidv4(),
          });

          showMessage(
            `Converted an amount of ${amount} from ${fromSymbol} to ${toSymbol}`,
            "SUCCESS"
          );

          // clear amount field
          updateFormFields({
            amount: "",
          });
        });
      }
    },
    [addToConversionHistory, convertCurrency, updateFormFields]
  );

  useIfObjectChanged(params as Record<string, unknown>, () => {
    if (!isEmpty(params)) {
      const { amount, fromSymbol, toSymbol } = params as ConversionType;

      updateFormFields({
        amount,
        fromSymbol,
        toSymbol,
      });

      setTimeout(() => {
        handleConvertCurrency({ amount, fromSymbol, toSymbol }, undefined);
      }, 400);
    }
  });

  return (
    <Box>
      <Typography variant="h1" color="text.primary">
        I want to convert
      </Typography>
      <ConvertorWrapper>
        <TextField
          sx={{ width: { xs: "100%", lg: 350 } }}
          variant="standard"
          value={amount}
          onChange={(event) => updateFormFields({ amount: event.target.value })}
          label="Amount"
          type="number"
          required
        />

        <Box display="flex" alignItems="flex-end" gap="2%">
          <AutoCompleteInput
            value={fromSymbol}
            setValue={(value) => updateFormFields({ fromSymbol: value })}
            label="From"
            options={allSymbolsData}
            required
          />
          <Button
            onClick={handleToggleCurrencies}
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
            value={toSymbol}
            setValue={(value) => updateFormFields({ toSymbol: value })}
            label="To"
            options={allSymbolsData}
            required
          />
        </Box>

        <Button
          sx={{ height: 35 }}
          variant="contained"
          onClick={(event) =>
            handleConvertCurrency({ amount, fromSymbol, toSymbol }, event)
          }
          type="submit"
          disabled={!isAllValuesTruthy({ amount, fromSymbol, toSymbol })}
        >
          Convert
        </Button>
      </ConvertorWrapper>

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

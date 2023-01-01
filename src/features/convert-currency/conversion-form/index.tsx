import { memo, useCallback } from "react";
import { FieldValues, useFormContext } from "react-hook-form";
import { Box, Button, TextField } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

import AutoCompleteInput from "components/ui/auto-complete-input";
import { getQueryParams, isEmpty } from "helpers/function";
import { ConvertorWrapper } from "./styles";
import { useHandleConversion } from "./services";
import { useIfObjectChanged } from "helpers/hooks";
import { ConversionFormProps } from "./types";
import { FormFields } from "pages/currency-convertor/types";

function ConversionForm(props: ConversionFormProps) {
  const { allSymbolsData, convertCurrencyApi } = props;

  const params = getQueryParams();
  const { handleSubmit, register, getValues, setValue, resetField, formState } =
    useFormContext();

  const { isSubmitting } = formState;

  const handleConversion = useHandleConversion();

  /**
   * @function handleToggleCurrencies
   * @returns { void }
   */
  const handleToggleCurrencies = useCallback(() => {
    const { fromSymbol: prevFromSymbol, toSymbol: prevToSymbol } = getValues();

    setValue("fromSymbol", prevToSymbol);
    setValue("toSymbol", prevFromSymbol);
  }, [getValues, setValue]);

  const onSubmit = (data: FieldValues) => {
    handleConversion(data as FormFields, convertCurrencyApi, resetField);
  };

  // make conversion by query param changes.
  useIfObjectChanged(params as Record<string, unknown>, () => {
    if (!isEmpty(params)) {
      const { duration } = getValues();

      setValue("fromSymbol", params.fromSymbol);
      setValue("toSymbol", params.toSymbol);

      onSubmit({ ...params, duration });
    }
  });

  return (
    <ConvertorWrapper onSubmit={handleSubmit(onSubmit)}>
      <TextField
        sx={{ width: { xs: "100%", lg: 350 } }}
        variant="standard"
        {...register("amount")}
        label="Amount"
        type="number"
        required
        data-test="amount-field"
      />

      <Box display="flex" alignItems="flex-end" gap="2%">
        <AutoCompleteInput
          name="fromSymbol"
          label="From"
          options={allSymbolsData}
          required
          dataTest="from-field"
        />

        <Button
          name="toggle-currencies-button"
          onClick={handleToggleCurrencies}
          variant="contained"
          sx={{
            minWidth: 5,
            padding: "1px 6px",
          }}
          data-test="toggle-currencies-button"
        >
          {" "}
          <CompareArrowsIcon fontSize="small" />
        </Button>

        <AutoCompleteInput
          name="toSymbol"
          label="To"
          options={allSymbolsData}
          required
          dataTest="to-field"
        />
      </Box>

      <Button
        name="convert-button"
        sx={{ height: 35 }}
        variant="contained"
        type="submit"
        disabled={isSubmitting}
        data-test="convert-button"
      >
        Convert
      </Button>
    </ConvertorWrapper>
  );
}

export default memo(ConversionForm);

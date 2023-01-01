import { useCallback } from "react";
import { FieldValues, UseFormResetField } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import {
  formatDate,
  getLaterDate,
  getUnixTimestamp,
  isOffline,
} from "helpers/function";
import { showMessage } from "helpers/libs";
import { useAddConversion } from "pages/conversion-history/store/actions";
import { useGetHistoricalRatesMutation } from "services/exchange";
import { FormFields } from "pages/currency-convertor/types";

/**
 * @function useHandleConversion
 * @returns { void }
 */
export const useHandleConversion = () => {
  const addToConversionHistory = useAddConversion();
  const [getHistoricalRates] = useGetHistoricalRatesMutation({
    fixedCacheKey: "historical-rates",
  });

  return useCallback(
    (
      data: FormFields,
      convertCurrencyService: Function,
      resetField: UseFormResetField<FieldValues>
    ) => {
      const { fromSymbol, toSymbol, amount, duration } = data;

      const isUserOffline = isOffline();

      if (isUserOffline) {
        showMessage("You are offline!", "ERROR");
      } else {
        convertCurrencyService({
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

          getHistoricalRates({
            startDate: getLaterDate(-Number(duration)),
            endDate: formatDate(new Date()),
            from: fromSymbol,
            to: toSymbol,
          });

          showMessage(
            `Converted an amount of ${amount} from ${fromSymbol} to ${toSymbol}`,
            "SUCCESS"
          );

          // clear amount field
          resetField("amount");
        });
      }
    },
    [addToConversionHistory, getHistoricalRates]
  );
};

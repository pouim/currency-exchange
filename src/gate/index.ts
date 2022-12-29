import { get } from "./api";
import {
  ConvertCurrencyParams,
  GetAllSymbolsParams,
  GetHistoricalRatesParams,
} from "./types";

export const getAllSymbols: GetAllSymbolsParams = () => get(`symbols`);

export const convertCurrency: ConvertCurrencyParams = (from, to) =>
  get(`convert?from=${from}&to=${to}`);

export const getHistoricalRates: GetHistoricalRatesParams = (
  startDate,
  endDate,
  from,
  to
) =>
  get(
    `timeseries?start_date=${startDate}&end_date=${endDate}&base=${from}&symbols=${to}`
  );

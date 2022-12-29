import { get } from "./api";
import { ConvertCurrencyParams, GetAllSymbolsParams } from "./types";

export const getAllSymbols: GetAllSymbolsParams = () => get(`symbols`);

export const convertCurrency: ConvertCurrencyParams = (from, to) =>
  get(`convert?from=${from}&to=${to}`);
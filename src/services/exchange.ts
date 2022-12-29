import { api } from "./api";
import { QueryKeys } from "./constants";
import {
  ConvertCurrencyData,
  ConvertCurrencyResponse,
  GetAllSymbolsResponse,
  GetHistoricalRatesData,
  GetHistoricalRatesResponse,
} from "./types";

export const exchangeApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllSymbols: build.query<GetAllSymbolsResponse, void>({
      query: () => `symbols`,
      providesTags: [QueryKeys.ALL_SYMBOLS],
    }),

    convertCurrency: build.mutation<
      ConvertCurrencyResponse,
      ConvertCurrencyData
    >({
      query: ({ from, to, amount }) => ({
        method: "GET",
        url: `convert?from=${from}&to=${to}&amount=${amount}&places=6`,
      }),
    }),

    getHistoricalRates: build.mutation<
      GetHistoricalRatesResponse,
      GetHistoricalRatesData
    >({
      query: ({ startDate, endDate, from, to }) => ({
        method: "GET",
        url: `timeseries?start_date=${startDate}&end_date=${endDate}&base=${from}&symbols=${to}`,
        providesTags: [QueryKeys.HISTORICAL_RATES],
      }),
    }),
  }),
});

export const {
  useGetAllSymbolsQuery,
  useConvertCurrencyMutation,
  useGetHistoricalRatesMutation,
} = exchangeApi;

import { api } from "./api";
import { QueryKeys } from "./constants";
import {
  ConvertCurrencyData,
  ConvertCurrencyResponse,
  GetAllSymbolsResponse,
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
  }),
});

export const { useGetAllSymbolsQuery, useConvertCurrencyMutation } =
  exchangeApi;

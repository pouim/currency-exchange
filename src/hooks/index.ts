import { useMutation, useQuery } from "@tanstack/react-query";

import { convertCurrency, getAllSymbols } from "gate";
import { QueryKeys } from "./constants";

export const useGetAllSymbols = () => {
  return useQuery([QueryKeys.ALL_SYMBOLS], getAllSymbols, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
    staleTime: 1000 * 60 * 60 * 24,
  });
};

export const useConvertCurrency = () => {
  return useMutation({
    mutationFn: ({ from, to }: { from: string; to: string }) =>
      convertCurrency(from, to),
  });
}

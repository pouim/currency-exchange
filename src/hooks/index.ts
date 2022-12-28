import { useQuery } from "@tanstack/react-query";

import { getAllSymbols } from "gate";
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

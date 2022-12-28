import { get } from "./api";
import { GetAllSymbolsParams } from "./types";

export const getAllSymbols: GetAllSymbolsParams = () => get(`symbols`);

export type GetAllSymbolsResponse = {
  symbols: string[];
};

export type GetAllSymbolsParams = () => Promise<GetAllSymbolsResponse>;

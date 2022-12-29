export type GetAllSymbolsResponse = {
  symbols: string[];
};

export type ConvertCurrencyResponse = {
  query: { from: string; to: string; amount: number };
  result: number;
  date: string;
};

export type GetAllSymbolsParams = () => Promise<GetAllSymbolsResponse>;

export type ConvertCurrencyParams = (
  from: string,
  to: string
) => Promise<ConvertCurrencyResponse>;

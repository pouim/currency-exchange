export type GetAllSymbolsResponse = {
  symbols: string[];
};

export type ConvertCurrencyResponse = {
  query: { from: string; to: string; amount: number };
  result: number;
  date: string;
  info: {
    rate: number;
  };
};

export type ConvertCurrencyData = {
  from: string;
  to: string;
  amount: string;
};

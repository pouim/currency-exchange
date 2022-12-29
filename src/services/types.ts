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

export type GetHistoricalRatesResponse = {
  rates: Record<string, Record<string, number>>;
};

export type GetHistoricalRatesData = {
  startDate: string;
  endDate: string;
  from: string;
  to: string;
};

export type ConvertCurrencyData = {
  from: string;
  to: string;
  amount: string;
};

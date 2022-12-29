export type GetAllSymbolsResponse = {
  symbols: string[];
};

export type ConvertCurrencyResponse = {
  query: { from: string; to: string; amount: number };
  result: number;
  date: string;
};

export type GetHistoricalRatesResponse = {
  base: string;
  start_date: string;
  end_date: string;
  rates: Record<string, Record<string, number>>;
};

export type GetAllSymbolsParams = () => Promise<GetAllSymbolsResponse>;

export type ConvertCurrencyParams = (
  from: string,
  to: string
) => Promise<ConvertCurrencyResponse>;

export type GetHistoricalRatesParams = (
  startDate: string,
  endDate: string,
  from: string,
  to: string
) => Promise<GetHistoricalRatesResponse>;

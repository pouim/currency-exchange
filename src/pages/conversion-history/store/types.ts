export type ConversionType = {
  amount: string;
  fromSymbol: string;
  toSymbol: string;
  timestamp: number;
  key: string;
};

export type ConversionStateType = {
  data: ConversionType[];
};

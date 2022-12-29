export type ConversionData = {
  fromSymbol: string;
  toSymbol: string;
  amount: number;
  result: number;
  rate: number;
};

export interface ConversionResultProps {
  isLoading: boolean;
  isSucceed: boolean;
  data: ConversionData;
}

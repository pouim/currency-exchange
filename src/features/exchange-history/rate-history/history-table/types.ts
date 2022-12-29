import { GetHistoricalRatesResponse } from "services/types";

export interface HistoryTableProps {
  data?: GetHistoricalRatesResponse;
  isLoading: boolean;
}

export type HistoryTableData = {
  date: string;
  rate: number;
};

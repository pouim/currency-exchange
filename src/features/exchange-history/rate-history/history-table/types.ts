import { HistoryData } from "../types";

export interface HistoryTableProps {
  tableData: HistoryData[];
  isLoading: boolean;
  shouldHide?: boolean;
}

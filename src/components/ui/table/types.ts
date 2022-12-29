import { ReactNode } from "react";

export type TableCellConfiguration = {
  value: ReactNode | string | number;
  config?: {
    hideCell: boolean;
  };
};

export interface AppTableProps {
  tableData: Record<string, TableCellConfiguration>[];
  containerHeight?: number;
}
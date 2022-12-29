import { ReactNode } from "react";

export interface AppTableProps {
  headerCells: string[];
  isLoading?: boolean;
  isTableEmpty?: boolean;
  isEmptyMessage?: string | ReactNode;
  children?: ReactNode;
  containerHeight?: number;
}
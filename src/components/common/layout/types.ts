import { ReactNode } from "react";

export type TabConfigurationType = {
  label: string;
  children: ReactNode;
};

export interface LayoutProps {
  tabs: TabConfigurationType[];
}

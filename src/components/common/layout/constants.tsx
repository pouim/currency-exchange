import { TabConfigurationType } from "./types";
import Panel from "./panel";

export const tabsData: TabConfigurationType[] = [
  {
    label: "CURRENCY CONVERTOR",
    children: <Panel title="I want to convert"></Panel>,
  },
  {
    label: "VIEW CONVERSION HISTORY",
    children: <Panel title="Conversion history"></Panel>,
  },
];
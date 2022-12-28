import { TabConfigurationType } from "components/common/layout/types";
import { AppPathNames } from "config/constants";

export const tabsData: TabConfigurationType[] = [
  {
    label: "CURRENCY CONVERTOR",
    pathName: AppPathNames.CURRENCY_CONVERTOR,
  },
  {
    label: "VIEW CONVERSION HISTORY",
    pathName: AppPathNames.CONVERSION_HISTORY,
  },
];
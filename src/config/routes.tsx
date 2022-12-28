import { Navigate } from "react-router-dom";

import ConversionHistory from "pages/conversion-history";
import CurrencyConvertor from "pages/currency-convertor";
import { AppPathNames } from "./constants";

export const Routings = [
  {
    path: "*",
    element: <Navigate to={AppPathNames.CURRENCY_CONVERTOR} replace />,
  },
  {
    path: AppPathNames.CURRENCY_CONVERTOR,
    element: <CurrencyConvertor />,
  },
  {
    path: AppPathNames.CONVERSION_HISTORY,
    element: <ConversionHistory />,
  },
];

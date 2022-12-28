import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useIsDesktop } from "helpers/hooks";
import HeaderMobileView from "./header-mobile.view";
import HeaderView from "./header.view";
import { TabValues } from "./types";

export function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

function HeaderController() {
  const [value, setValue] = useState(0);

  const isDesktop = useIsDesktop();
  const location = useLocation();

  useEffect(() => {
    const tabValue =
      TabValues[location.pathname.slice(1) as keyof typeof TabValues];

    setValue(tabValue);
  }, [location.pathname]);

  return isDesktop ? (
    <HeaderView value={value} />
  ) : (
    <HeaderMobileView value={value} />
  );
}

export default HeaderController;

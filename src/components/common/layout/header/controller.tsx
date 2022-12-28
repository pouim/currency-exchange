import { useCallback, useState } from "react";

import { useIsDesktop } from "helpers/hooks";
import HeaderMobileView from "./header-mobile.view";
import HeaderView from "./header.view";

export function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

function HeaderController() {
  const [value, setValue] = useState(0);

  const isDesktop = useIsDesktop();

  /**
   * @function handleTabsChange
   * @param { React.SyntheticEvent } event
   * @param { number } newValue
   * @returns { void }
   */
  const handleTabsChange = useCallback(
    (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    },
    []
  );

  return isDesktop ? (
    <HeaderView value={value} handleTabsChange={handleTabsChange} />
  ) : (
    <HeaderMobileView value={value} handleTabsChange={handleTabsChange} />
  );
}

export default HeaderController;

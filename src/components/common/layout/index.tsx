import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Box, Button, Tabs } from "@mui/material";

import Logo from "./logo";
import { isDesktop } from "../../../helpers/function";
import { tabsData } from "./constants";
import { Routings } from "config/routes";
import LinkTab from "./link-tab";
import { LayoutProps } from "./types";

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

function Layout({ title = "" }: LayoutProps) {
  const [value, setValue] = useState(0);

  const handleTabsChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const isItDesktop = isDesktop();

  return (
    <Box sx={{ width: "100%" }}>
      <Box display="flex" alignItems="flex-end" justifyContent="space-around">
        <Box display="flex" alignItems="center" gap={1} height={50}>
          <Logo />

          <Tabs
            variant={!isItDesktop ? "fullWidth" : "standard"}
            value={value}
            onChange={handleTabsChange}
            aria-label="basic tabs example"
            sx={{ marginLeft: 5 }}
          >
            {tabsData.map(({ label, pathName }, index) => {
              return (
                <LinkTab
                  key={pathName}
                  label={label}
                  pathName={pathName}
                  {...a11yProps(index)}
                />
              );
            })}
          </Tabs>
        </Box>

        <Button>Logout</Button>
      </Box>

      <Routes>
        {Routings.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Box>
  );
}

export default Layout;

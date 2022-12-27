import { useState } from "react";
import { Box, Button, Tab, Tabs } from "@mui/material";

import Logo from "./logo";
import { isDesktop } from "../../../helpers/function";
import { LayoutProps } from "./types";
import TabPanel from "./tab-panel";

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

function Layout(props: LayoutProps) {
  const { tabs } = props;

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const isItDesktop = isDesktop();

  return (
    <Box sx={{ width: "100%" }}>
      <Box display="flex" alignItems="flex-end" justifyContent="space-around">
        <Box display="flex" alignItems="center" gap={1} height={50}>
          <Logo />

          <Tabs
            value={value}
            variant={!isItDesktop ? "fullWidth" : "standard"}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ marginLeft: 5 }}
          >
            {tabs.map(({ label }, index) => (
              <Tab label={label} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Box>

        <Button>Logout</Button>
      </Box>
      {tabs.map(({ children }, index) => (
        <TabPanel value={value} index={index}>
          {children}
        </TabPanel>
      ))}
    </Box>
  );
}

export default Layout;

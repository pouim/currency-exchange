import { memo } from "react";
import { Box, Button, Tabs } from "@mui/material";

import { tabsData } from "../constants";
import LinkTab from "../link-tab";
import Logo from "../logo";
import { a11yProps } from "./controller";
import { HeaderProps } from "./types";

function HeaderView(props: HeaderProps) {
  const { value } = props;

  return (
    <Box display="flex" alignItems="flex-end" justifyContent="space-around">
      <Box display="flex" alignItems="center" gap={1} height={50}>
        <Logo />

        <Tabs
          value={value}
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
  );
}

export default memo(HeaderView);

import { Box, Button, Divider, Tabs } from "@mui/material";
import { memo } from "react";

import { tabsData } from "../constants";
import LinkTab from "../link-tab";
import Logo from "../logo";
import { a11yProps } from "./controller";
import { HeaderProps } from "./types";

function HeaderMobileView(props: HeaderProps) {
  const { value } = props;

  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mx={2}
        mb={2}
      >
        <Logo />
        <Button>Logout</Button>
      </Box>

      <Divider />

      <Tabs
        value={value}
        variant="fullWidth"
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
  );
}

export default memo(HeaderMobileView);

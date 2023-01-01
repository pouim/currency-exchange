import { memo } from "react";
import { Box, Divider, Tabs } from "@mui/material";

import ToggleDarkMode from "components/ui/toggle-dark-mode";
import { tabsData } from "../constants";
import LinkTab from "../link-tab";
import Logo from "../logo";
import { a11yProps } from "./controller";
import { HeaderProps } from "./types";
import { HeaderWrapper } from "./styles";

function HeaderMobileView(props: HeaderProps) {
  const { value } = props;

  return (
    <HeaderWrapper component="header">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mx={2}
        mb={2}
      >
        <Logo />
        <ToggleDarkMode />
      </Box>

      <Divider />

      <Tabs
        component='nav'
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
    </HeaderWrapper>
  );
}

export default memo(HeaderMobileView);

import { memo } from "react";
import { Box, Tabs } from "@mui/material";

import { tabsData } from "../constants";
import LinkTab from "../link-tab";
import Logo from "../logo";
import { a11yProps } from "./controller";
import { HeaderProps } from "./types";
import ToggleDarkMode from "components/ui/toggle-dark-mode";
import { HeaderWrapper } from "./styles";

function HeaderView(props: HeaderProps) {
  const { value } = props;

  return (
    <HeaderWrapper
      display="flex"
      alignItems="flex-end"
      justifyContent="space-around"
      component="header"
    >
      <Box
        component="nav"
        display="flex"
        alignItems="center"
        gap={1}
        height={50}
      >
        <Logo />

        <Tabs
          component="nav"
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

      <ToggleDarkMode />
    </HeaderWrapper>
  );
}

export default memo(HeaderView);

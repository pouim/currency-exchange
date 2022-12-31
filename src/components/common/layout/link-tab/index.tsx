import { Link } from "react-router-dom";
import { Tab } from "@mui/material";

import { LinkTabProps } from "./types";

function LinkTab(props: LinkTabProps) {
  const { pathName, label, ...rest } = props;

  return (
    <Tab
      {...rest}
      component={Link}
      to={pathName}
      label={label}
      data-test={`${pathName}-tab`}
      sx={{ fontSize: { xs: 10, md: 14 } }}
    />
  );
}

export default LinkTab;

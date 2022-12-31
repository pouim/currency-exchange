import { memo, useCallback } from "react";
import { FormControlLabel, FormGroup, Switch, Typography } from "@mui/material";

import { useGetUserConfigs } from "config/store";
import { useUpdateIsDarkMode } from "config/store/actions";

function ToggleDarkMode() {
  const { isDarkMode } = useGetUserConfigs();
  const updateIsDarkMode = useUpdateIsDarkMode();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      updateIsDarkMode(checked);
    },
    [updateIsDarkMode]
  );

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={isDarkMode} onChange={handleChange} />}
        label={<Typography variant="h3">Dark</Typography>}
      />
    </FormGroup>
  );
}

export default memo(ToggleDarkMode);

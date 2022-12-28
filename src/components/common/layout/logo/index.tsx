import { memo } from "react";
import { Box, Typography } from "@mui/material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

function Logo() {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" gap={1}>
      <CurrencyExchangeIcon color="primary" />
      <Typography>
        Currency<strong>Exchange</strong>
      </Typography>
    </Box>
  );
}

export default memo(Logo);

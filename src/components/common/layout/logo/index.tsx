import { Typography } from "@mui/material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

function Logo() {
  return (
    <>
      <CurrencyExchangeIcon color="primary" />
      <Typography>
        Currency<strong>Exchange</strong>
      </Typography>
    </>
  );
}

export default Logo;

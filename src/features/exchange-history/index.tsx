import { Box, Typography } from "@mui/material";

import RateHistory from "features/exchange-history/rate-history";
import Statistics from "./statistics";
import { Wrapper } from "./styles";

function ExchangeHistory() {
  return (
    <Wrapper>
      <Box width={{ lg: "130%" }}>
        <Typography variant="h2" mb={2} ml={{ xs: 1 }}>
          Exchange History
        </Typography>
        <RateHistory />
      </Box>

      <Statistics />
    </Wrapper>
  );
}

export default ExchangeHistory;

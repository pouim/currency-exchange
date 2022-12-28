import { Box } from "@mui/material";

import Panel from "components/common/layout/panel";
import { Exchange } from "features/exchange";
import ExchangeHistory from "features/exchange-history";

function CurrencyConvertor() {
  return (
    <Panel title="I want to convert">
      <Box>
        <Exchange />
        <ExchangeHistory />
      </Box>
    </Panel>
  );
}

export default CurrencyConvertor;

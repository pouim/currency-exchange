import { FieldValues, useForm } from "react-hook-form";
import { Box } from "@mui/material";

import Panel from "components/common/layout/panel";
import Exchange from "features/exchange";
import ExchangeHistory from "features/exchange-history";

function CurrencyConvertor() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => console.log("data", data);

  return (
    <Panel>
      <Box>
        <Exchange handleConvert={handleSubmit(onSubmit)} control={control} />
        <ExchangeHistory />
      </Box>
    </Panel>
  );
}

export default CurrencyConvertor;

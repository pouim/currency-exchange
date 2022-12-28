import { FieldValues, useForm } from "react-hook-form";
import { Box } from "@mui/material";

import Panel from "components/common/layout/panel";
import Exchange from "features/exchange";
import ExchangeHistory from "features/exchange-history";
import { isEmpty } from "helpers/function";

function CurrencyConvertor() {
  const { control, handleSubmit, getValues, watch, setValue } = useForm();

  const onSubmit = (data: FieldValues) => console.log("data", data);

  /**
   * @function handleToggleCurrencies
   * @returns { void }
   */
  const handleToggleCurrencies = () => {
    const { from = "", to = "" } = getValues();

    if (isEmpty(from) && isEmpty(to)) {
      return;
    }

    setValue("to", from);
    setValue("from", to);
  };

  return (
    <Panel>
      <Box>
        <Exchange
          handleConvert={handleSubmit(onSubmit)}
          onToggleCurrencies={handleToggleCurrencies}
          control={control}
          watch={watch}
          setValue={setValue}
        />
        <ExchangeHistory />
      </Box>
    </Panel>
  );
}

export default CurrencyConvertor;

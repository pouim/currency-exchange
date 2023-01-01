import { useForm, FormProvider } from "react-hook-form";

import Panel from "components/common/layout/panel";
import Exchange from "features/convert-currency";
import ExchangeHistory from "features/exchange-history";
import { Wrapper } from "./styles";
import { FormFields } from "./types";

function CurrencyConvertor() {
  const methods = useForm<FormFields>({
    defaultValues: {
      amount: "",
      fromSymbol: "",
      toSymbol: "",
      duration: 7,
    },
  });

  return (
    <Panel>
      <Wrapper data-test="currency-convertor-page">
        <FormProvider {...methods}>
          <Exchange />
          <ExchangeHistory />
        </FormProvider>
      </Wrapper>
    </Panel>
  );
}

export default CurrencyConvertor;

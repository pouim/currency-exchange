import { FieldValues, useForm } from "react-hook-form";

import Panel from "components/common/layout/panel";
import Exchange from "features/exchange";
import ExchangeHistory from "features/exchange-history";
import { isEmpty } from "helpers/function";
import { useConvertCurrency } from "hooks";
import { Wrapper } from "./styles";

function CurrencyConvertor() {
  const { control, handleSubmit, getValues, watch, setValue } = useForm();
  const formValues = getValues();

  const { mutate: onConvertCurrency, data: conversionData } =
    useConvertCurrency();

  const onSubmit = (data: FieldValues) => {
    const { from, to } = data;

    if (!isEmpty(from) && !isEmpty(to)) {
      onConvertCurrency({ from, to });
    }
  };

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
      <Wrapper>
        <Exchange
          handleConvert={handleSubmit(onSubmit)}
          onToggleCurrencies={handleToggleCurrencies}
          control={control}
          watch={watch}
          setValue={setValue}
          conversionData={{
            from: conversionData?.query.from ?? "",
            to: conversionData?.query.to ?? "",
            rate: conversionData?.result ?? 0,
            amount: formValues["amount"],
          }}
        />
        <ExchangeHistory />
      </Wrapper>
    </Panel>
  );
}

export default CurrencyConvertor;

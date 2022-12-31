import Panel from "components/common/layout/panel";
import Exchange from "features/convert-currency";
import ExchangeHistory from "features/exchange-history";
import { Wrapper } from "./styles";

function CurrencyConvertor() {
  return (
    <Panel>
      <Wrapper data-test="currency-convertor-page">
        <Exchange />
        <ExchangeHistory />
      </Wrapper>
    </Panel>
  );
}

export default CurrencyConvertor;

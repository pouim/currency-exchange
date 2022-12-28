import Panel from "components/common/layout/panel";
import { Exchange } from "features/exchange";

function CurrencyConvertor() {
  return (
    <Panel title="I want to convert">
      <Exchange />
    </Panel>
  );
}

export default CurrencyConvertor;

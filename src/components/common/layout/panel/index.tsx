import { PanelWrapper } from "./styles";
import { PanelProps } from "./types";

function Panel({ children }: PanelProps) {
  return (
    <PanelWrapper component="main" py={5}>
      {children}
    </PanelWrapper>
  );
}

export default Panel;

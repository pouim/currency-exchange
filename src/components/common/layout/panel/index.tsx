import { PanelWrapper } from "./styles";
import { PanelProps } from "./types";

function Panel({ children }: PanelProps) {
  return (
    <PanelWrapper py={5} px={{ s: 1, md: 0 }}>
      {children}
    </PanelWrapper>
  );
}

export default Panel;

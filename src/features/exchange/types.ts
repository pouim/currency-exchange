import { Control, FieldValues } from "react-hook-form";

export interface ExchangeProps {
  handleConvert: () => void;
  control: Control<FieldValues, any>;
}

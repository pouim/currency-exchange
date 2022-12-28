import {
  Control,
  FieldValues,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

export interface ExchangeProps {
  handleConvert: () => void;
  onToggleCurrencies: () => void;
  control: Control<FieldValues, any>;
  setValue: UseFormSetValue<FieldValues>;
  watch: UseFormWatch<FieldValues>;
}

import { FieldValues, UseFormSetValue, UseFormWatch } from "react-hook-form";

export interface AutoCompleteInputProps {
  name: string;
  label: string;
  required?: boolean;
  options: string[];
  setValue: UseFormSetValue<FieldValues>;
  watch: UseFormWatch<FieldValues>;
}
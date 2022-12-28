import { Control, FieldValues } from "react-hook-form";

export interface AutoCompleteInputProps {
  name: string;
  label: string;
  options: string[];
  control: Control<FieldValues, any>;
}
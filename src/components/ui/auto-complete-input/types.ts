export interface AutoCompleteInputProps {
  label: string;
  required?: boolean;
  options: string[];
  value: string;
  setValue: (value: string) => void;
  dataTest?: string;
}

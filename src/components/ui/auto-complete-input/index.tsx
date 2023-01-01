import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Autocomplete, createFilterOptions, TextField } from "@mui/material";

import { AutoCompleteInputProps } from "./types";

const filter = createFilterOptions<string>();

function AutoCompleteInput(props: AutoCompleteInputProps) {
  const { label, name, required = false, options, dataTest } = props;

  const { setValue, watch } = useFormContext();

  const [currentValue, setCurrentValue] = useState("");

  // Watch the form values changes
  // for toggle currencies feature
  useEffect(() => {
    const subscription = watch((values) => {
      const newValue = values[name] ?? "";

      setCurrentValue(newValue);
    });
    return () => subscription.unsubscribe();
  }, [name, watch]);

  return (
    <Autocomplete
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        return filtered;
      }}
      onChange={(_, value) => {
        setValue(name, value);
      }}
      value={currentValue}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id={label}
      options={options}
      getOptionLabel={(option) => option}
      renderOption={(props, option) => <li {...props}>{option}</li>}
      sx={{ width: { xs: "100%", lg: 300 } }}
      freeSolo
      renderInput={(params) => (
        <TextField
          required={required}
          name={name}
          variant="standard"
          label={label}
          data-test={`${dataTest}-input`}
          {...params}
        />
      )}
      data-test={dataTest}
    />
  );
}

export default AutoCompleteInput;

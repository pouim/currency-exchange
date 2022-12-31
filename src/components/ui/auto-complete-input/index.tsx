import { Autocomplete, createFilterOptions, TextField } from "@mui/material";

import { AutoCompleteInputProps } from "./types";

const filter = createFilterOptions<string>();

function AutoCompleteInput(props: AutoCompleteInputProps) {
  const { label, required = false, options, value, setValue, dataTest } = props;

  return (
    <Autocomplete
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        return filtered;
      }}
      onChange={(_, value) => {
        setValue(value ?? "");
      }}
      value={value}
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
          variant="standard"
          label={label}
          required={required}
          {...params}
          data-test={`${dataTest}-input`}
        />
      )}
      data-test={dataTest}
    />
  );
}

export default AutoCompleteInput;

import { Autocomplete, createFilterOptions, TextField } from "@mui/material";

import { AutoCompleteInputProps } from "./types";

const filter = createFilterOptions<string>();
const symbols: string[] = [];

function AutoCompleteInput(props: AutoCompleteInputProps) {
  const { label } = props;

  return (
    <Autocomplete
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id={label}
      options={symbols}
      getOptionLabel={(option) => option}
      renderOption={(props, option) => <li {...props}>{option}</li>}
      sx={{ width: { xs: "100%", lg: 300 } }}
      freeSolo
      renderInput={(params) => (
        <TextField variant="standard" {...params} label={label} />
      )}
    />
  );
}

export default AutoCompleteInput;

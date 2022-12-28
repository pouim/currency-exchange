import { Controller } from "react-hook-form";
import { Autocomplete, createFilterOptions, TextField } from "@mui/material";

import { AutoCompleteInputProps } from "./types";

const filter = createFilterOptions<string>();

function AutoCompleteInput(props: AutoCompleteInputProps) {
  const { name, label, control, options } = props;

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
      options={options}
      getOptionLabel={(option) => option}
      renderOption={(props, option) => <li {...props}>{option}</li>}
      sx={{ width: { xs: "100%", lg: 300 } }}
      freeSolo
      renderInput={(params) => (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <TextField
              variant="standard"
              {...params}
              label={label}
              {...field}
            />
          )}
        />
      )}
    />
  );
}

export default AutoCompleteInput;

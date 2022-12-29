import {
  Box,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";

import AppTable from "components/ui/table";

const sampleData = [
  {
    date: {
      value: "2021/1/1",
    },
    exchange_rate: {
      value: 1.132,
    },
  },
  {
    date: {
      value: "2021/1/1",
    },
    exchange_rate: {
      value: 1.132,
    },
  },
  {
    date: {
      value: "2021/1/1",
    },
    exchange_rate: {
      value: 1.132,
    },
  },
  {
    date: {
      value: "2021/1/1",
    },
    exchange_rate: {
      value: 1.132,
    },
  },
  {
    date: {
      value: "2021/1/1",
    },
    exchange_rate: {
      value: 1.132,
    },
  },
];

function RateHistory() {
  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="duration">Duration</InputLabel>
          <Select
            defaultValue={7}
            labelId="duration"
            id="duration"
            label="duration"
          >
            <MenuItem value={7}>7 days</MenuItem>
            <MenuItem value={14}>14 days</MenuItem>
            <MenuItem value={30}>30 days</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <RadioGroup
            row
            aria-labelledby="mode"
            defaultValue="table"
            name="mode"
          >
            <FormControlLabel value="table" control={<Radio />} label="table" />
            <FormControlLabel value="chart" control={<Radio />} label="chart" />
          </RadioGroup>
        </FormControl>
      </Box>
      <AppTable tableData={sampleData} />
    </Box>
  );
}

export default RateHistory;

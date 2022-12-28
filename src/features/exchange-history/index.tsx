import {
  Box,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";

import RateHistory from "features/exchange-history/rate-history";

function ExchangeHistory() {
  return (
    <Box>
      <Typography variant="h2" mb={2}>
        Exchange History
      </Typography>
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

      <RateHistory />
    </Box>
  );
}

export default ExchangeHistory;

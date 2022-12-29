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

import { useGetFormData } from "features/convert-currency/store";
import { useUpdateFormFields } from "features/convert-currency/store/actions";
import {
  findArrayMinMaxAvg,
  formatDate,
  getLaterDate,
  isEmpty,
} from "helpers/function";
import { useIfObjectChanged } from "helpers/hooks";
import { useGetHistoricalRatesMutation } from "services/exchange";
import { GetHistoricalRatesResponse } from "services/types";
import { useUpdateStatistics } from "../store/actions";
import HistoryTable from "./history-table";

function RateHistory() {
  const { duration, fromSymbol, toSymbol } = useGetFormData();
  const updateFormFields = useUpdateFormFields();
  const updateStatistics = useUpdateStatistics();
  const [getHistoricalRates, { isLoading, data }] =
    useGetHistoricalRatesMutation();

  useIfObjectChanged({ duration, fromSymbol, toSymbol }, () => {
    getHistoricalRates({
      startDate: getLaterDate(-Number(duration)),
      endDate: formatDate(new Date()),
      from: fromSymbol,
      to: toSymbol,
    }).then((response) => {
      const ratesData = (response as { data: GetHistoricalRatesResponse }).data
        .rates;

      const rates = Object.values(ratesData).map(
        (item) => Object.values(item)[0]
      );

      if (!isEmpty(rates)) {
        const { min, max, avg } = findArrayMinMaxAvg(rates);

        updateStatistics({
          lowest: min,
          highest: max,
          average: avg,
        });
      }
    });
  });

  return (
    <Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="duration">Duration</InputLabel>
          <Select
            value={+duration}
            onChange={(event) =>
              updateFormFields({ duration: String(event.target.value) })
            }
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

      <HistoryTable data={data} isLoading={isLoading} />
    </Box>
  );
}

export default RateHistory;

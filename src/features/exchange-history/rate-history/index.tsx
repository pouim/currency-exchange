import { useMemo, useState } from "react";
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
import { HistoryData, ViewMode } from "./types";
import HistoryChart from "./history-chart";

function RateHistory() {
  const [viewMode, setViewMode] = useState<ViewMode>("table");

  const { duration, fromSymbol, toSymbol } = useGetFormData();
  const updateFormFields = useUpdateFormFields();
  const updateStatistics = useUpdateStatistics();
  const [getHistoricalRates, { isLoading, data }] =
    useGetHistoricalRatesMutation();

  const historyData = useMemo(() => {
    if (data?.rates) {
      const formattedDate = Object.keys(data.rates).map((date) => {
        const value = data.rates[date];

        return {
          date,
          rate: Object.values(value)[0],
        } as HistoryData;
      });

      return formattedDate;
    }

    return [];
  }, [data?.rates]);

  const handleChangeViewMode = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    setViewMode(value as ViewMode);
  };

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
            data-test="duration-field"
          >
            <MenuItem data-test="duration-list-item" value={7}>
              7 days
            </MenuItem>
            <MenuItem data-test="duration-list-item" value={14}>
              14 days
            </MenuItem>
            <MenuItem data-test="duration-list-item" value={30}>
              30 days
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <RadioGroup
            row
            aria-labelledby="mode"
            value={viewMode}
            onChange={handleChangeViewMode}
            name="mode"
          >
            <FormControlLabel
              data-test="table-mode-radio-button"
              value="table"
              control={<Radio />}
              label="table"
            />
            <FormControlLabel
              data-test="chart-mode-radio-button"
              value="chart"
              control={<Radio />}
              label="chart"
            />
          </RadioGroup>
        </FormControl>
      </Box>

      <HistoryTable
        tableData={historyData}
        isLoading={isLoading}
        shouldHide={viewMode === "chart"}
      />

      <HistoryChart chartData={historyData} shouldHide={viewMode === "table"} />
    </Box>
  );
}

export default RateHistory;

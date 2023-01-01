import { useCallback, useMemo, useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

import { Controller, useFormContext } from "react-hook-form";
import { useGetHistoricalRatesMutation } from "services/exchange";
import HistoryTable from "./history-table";
import { HistoryData, ViewMode } from "./types";
import HistoryChart from "./history-chart";
import { formatDate, getLaterDate, isAllValuesTruthy } from "helpers/function";
import { showMessage } from "helpers/libs";

function RateHistory() {
  const [viewMode, setViewMode] = useState<ViewMode>("table");

  const { control, getValues, register } = useFormContext();

  const [getHistoricalRates, { isLoading, data }] =
    useGetHistoricalRatesMutation({
      fixedCacheKey: "historical-rates",
    });

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

  const handleDurationChange = useCallback(
    (event: SelectChangeEvent<any>) => {
      const { fromSymbol, toSymbol } = getValues();

      const duration = event.target.value;

      if (isAllValuesTruthy({ fromSymbol, toSymbol, duration })) {
        getHistoricalRates({
          startDate: getLaterDate(-Number(duration)),
          endDate: formatDate(new Date()),
          from: fromSymbol,
          to: toSymbol,
        });
      } else {
        showMessage("Please select currencies!", "ERROR");
      }
    },
    [getHistoricalRates, getValues]
  );

  return (
    <Box component='section'>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="duration">Duration</InputLabel>

          <Controller
            name="duration"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                defaultValue={7}
                labelId="duration"
                id="duration"
                label="duration"
                data-test="duration-field"
                {...register("duration", {
                  onChange: handleDurationChange,
                })}
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
            )}
          />
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
              label={<Typography variant="h3">Table</Typography>}
            />
            <FormControlLabel
              data-test="chart-mode-radio-button"
              value="chart"
              control={<Radio />}
              label={<Typography variant="h3">Chart</Typography>}
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

import { memo } from "react";
import { Box, Typography } from "@mui/material";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  YAxis,
} from "recharts";

import { PRIMARY_COLOR, SECONDARY_COLOR } from "themes/constants";
import { HistoryChartProps } from "./types";
import { isEmpty } from "helpers/function";
import { ChartWrapper } from "./styles";


function HistoryChart(props: HistoryChartProps) {
  const { chartData, shouldHide = false } = props;

  return (
    <ChartWrapper sx={{ display: shouldHide ? "none" : "flex" }}>
      {isEmpty(chartData) ? (
        <Box data-test="history-chart-empty-state">
          <Typography variant="h3">No Data!</Typography>{" "}
        </Box>
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={chartData}
            margin={{
              top: 25,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="1 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="rate"
              stroke={SECONDARY_COLOR}
              fill={PRIMARY_COLOR}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </ChartWrapper>
  );
}

export default memo(HistoryChart);

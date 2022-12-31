import { memo } from "react";
import { Box } from "@mui/material";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

import { PRIMARY_COLOR } from "themes/constants";
import { HistoryChartProps } from "./types";
import { isEmpty } from "helpers/function";

function HistoryChart(props: HistoryChartProps) {
  const { chartData, shouldHide = false } = props;

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={300}
      sx={{ background: "#fff", display: shouldHide ? "none" : "flex" }}
    >
      {isEmpty(chartData) ? (
        <Box data-test="history-chart-empty-state">No Data!</Box>
      ) : (
        <ResponsiveContainer
          data-test="history-chart-container"
          width="100%"
          height="100%"
        >
          <LineChart width={500} height={300} data={chartData}>
            <XAxis dataKey="date" />
            <Tooltip />
            <Line type="monotone" dataKey="rate" stroke={PRIMARY_COLOR} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </Box>
  );
}

export default memo(HistoryChart);

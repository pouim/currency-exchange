import { Box, Button, Typography } from "@mui/material";
import ViewIcon from "@mui/icons-material/RemoveRedEye";
import DeleteIcon from "@mui/icons-material/DeleteForever";

import Panel from "components/common/layout/panel";
import AppTable from "components/ui/table";

function Actions() {
  return (
    <Box display="flex" gap={5}>
      <Button
        size="small"
        variant="text"
        sx={{
          fontSize: 12,
        }}
        startIcon={<ViewIcon />}
      >
        View
      </Button>
      <Button
        size="small"
        color="warning"
        variant="text"
        sx={{
          fontSize: 12,
        }}
        startIcon={<DeleteIcon />}
      >
        Delete from history
      </Button>
    </Box>
  );
}

const sampleData = [
  {
    date: {
      value: "2021/1/1",
    },
    event: {
      value: "Converting an amount of 500 from EUR to USD",
    },
    Actions: {
      value: <Actions />,
      config: {
        hideCell: true,
      },
    },
  },
  {
    date: {
      value: "2021/1/1",
    },
    event: {
      value: "Converting an amount of 500 from EUR to USD",
    },
    Actions: {
      value: <Actions />,
      config: {
        hideCell: true,
      },
    },
  },
  {
    date: {
      value: "2021/1/1",
    },
    event: {
      value: "Converting an amount of 500 from EUR to USD",
    },
    Actions: {
      value: <Actions />,
      config: {
        hideCell: true,
      },
    },
  },
];

function ConversionHistory() {
  return (
    <Panel>
      <Box width={{ xs: "90%", lg: "70%", height: "100vh" }}>
        <Typography variant="h1" color="text.primary" mb={2}>
          Conversion History
        </Typography>

        <AppTable tableData={sampleData} />
      </Box>
    </Panel>
  );
}

export default ConversionHistory;

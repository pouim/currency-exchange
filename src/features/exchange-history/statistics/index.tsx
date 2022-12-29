import AppTable from "components/ui/table";

function Statistics() {
  const sampleData = [
    {
      statistics: {
        value: "Lowest",
      },
      "": {
        value: 1.16553453,
      },
    },
    {
      statistics: {
        value: "Lowest",
      },
      "": {
        value: 1.16553453,
      },
    },
    {
      statistics: {
        value: "Lowest",
      },
      "": {
        value: 1.16553453,
      },
    },
  ];

  return <AppTable tableData={sampleData} />;
}

export default Statistics;

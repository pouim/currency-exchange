import AppTable from "components/ui/table";

function Statistics() {
  const sampleData = [
    {
      statistics: "Lowest",
      "": 1.16553453,
    },
    {
      statistics: "Highest",
      "": 1.16553453,
    },
    {
      statistics: "Average",
      "": 1.16553453,
    },
  ];

  return <AppTable tableData={sampleData} />;
}

export default Statistics;

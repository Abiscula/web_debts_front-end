import { Chart } from "react-google-charts";

const data = [
  ["Language", "Speakers (in millions)"],
  ["German", 5.85],
  ["French", 1.66],
  ["Italian", 0.316],
  ["Romansh", 0.0791],
];

const options = {
  legend: "none",
  pieSliceText: "label",
  title: "Swiss Language Use (100 degree rotation)",
  backgroundColor: 'none',
  pieStartAngle: 100,
};

export function Graph() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
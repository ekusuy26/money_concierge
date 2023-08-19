import DoughnutChart from "../molecules/DoughnutChart";

export default function CfExcerpt({ period, data }) {
  return (
    <div className="h-full py-5">
      <p className="mb-5 text-center">{period}</p>
      <DoughnutChart
        labels={data.labels}
        colors={data.colors}
        values={data.values}
      />
    </div>
  );
}

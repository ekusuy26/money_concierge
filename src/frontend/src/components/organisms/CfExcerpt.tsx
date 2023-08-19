import DoughnutChart from "../molecules/DoughnutChart";

export default function CfExcerpt({ data }) {
  return (
    <div className="h-full py-5">
      <p className="mb-5 text-center">{data.date}</p>
      <DoughnutChart
        labels={["test1", "test2", "test3"]}
        colors={["rgb(100,200,200)", "rgb(200,100,200)", "rgb(200,200,100)"]}
        values={[100, 200, 300]}
      />
    </div>
  );
}

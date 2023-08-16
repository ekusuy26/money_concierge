import DoughnutChart from "../molecules/DoughnutChart";

export default function CfExcerpt() {
  return (
    <div className="h-full">
      <div className="text-center">2023年8月16日(水)</div>
      <div className="h-full">
        <DoughnutChart
          labels={["test1", "test2", "test3"]}
          colors={["rgb(100,200,200)", "rgb(200,100,200)", "rgb(200,200,100)"]}
          values={[100, 200, 300]}
        />
      </div>
    </div>
  );
}

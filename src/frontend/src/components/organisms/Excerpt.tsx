import DoughnutChart from "../molecules/DoughnutChart";
import ListContent from "../molecules/ListContent";

export default function Excerpt() {
  return (
    <>
      <div className="text-center">2023年8月(2023/8/1~2023/8/31)</div>
      <div className="w-2/3 mx-auto my-5">
        <DoughnutChart />
      </div>
      {[...Array(10)].map((_, i) => (
        <ListContent key={i} callback={() => console.log("hoge")} />
      ))}
    </>
  );
}

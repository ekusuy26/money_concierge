interface props {
  percent: number;
  colorCode: string;
  title: string;
  current: number;
  max: number;
}
export default function ProgressBar({
  percent,
  colorCode,
  title,
  current,
  max,
}: props) {
  const barStyle = {
    width: (percent > 100 ? 100 : percent) + "%",
    backgroundColor: colorCode,
  };
  return (
    <>
      <div className="flex justify-between mb-3">
        <div className="">{title}</div>
        <div className="">{current.toLocaleString()}円</div>
      </div>
      <div className="relative h-2 w-full bg-slate-400/30 rounded-full">
        <span
          className="absolute h-full inline-block rounded-full"
          style={barStyle}
        ></span>
      </div>
      <div className="flex justify-end">
        <div className="">{max.toLocaleString()}円</div>
      </div>
    </>
  );
}

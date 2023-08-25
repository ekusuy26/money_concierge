import { ProgressBarProps } from "@/interfaces/interface";
import Svg from "./Svg";

interface barStyle {
  width: string;
  backgroundColor?: string;
}
export default function ProgressBar({
  percent,
  colorCode,
  title,
  current,
  max,
  slug,
}: ProgressBarProps) {
  let barStyle: barStyle = {
    width: "100%",
  };
  if (percent <= 100) {
    barStyle = {
      width: percent + "%",
      backgroundColor: colorCode,
    };
  }
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center">
          {slug && (
            <div style={{ fill: colorCode }}>
              <Svg slug={slug} size={6} />
            </div>
          )}
          {title}
        </div>
        {percent > 100 && (
          <div className="flex items-center">
            <span className="text-xs text-red-500">
              {(current - max).toLocaleString()}円超過
            </span>
            <div className="fill-orange-400">
              <Svg slug={"fire"} size={6} />
            </div>
          </div>
        )}
      </div>
      <div className="relative h-2 w-full bg-slate-400/30 rounded-full my-1">
        <span
          className="absolute h-full inline-block rounded-full bg-red-500"
          style={barStyle}
        ></span>
      </div>
      <div className="flex justify-between text-sm">
        <div>支出:{current.toLocaleString()}円</div>
        <div className="font-bold">{max.toLocaleString()}円</div>
      </div>
    </>
  );
}

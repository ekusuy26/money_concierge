import { ProgressBarProps } from "@/interfaces/interface";
import Svg from "./Svg";

export default function ProgressBar({
  percent,
  colorCode,
  title,
  current,
  max,
}: ProgressBarProps) {
  const barStyle = {
    width: (percent > 100 ? 100 : percent) + "%",
    backgroundColor: colorCode,
  };
  return (
    <>
      <div className="flex justify-between">
        <div>{title}</div>
        {percent > 100 && (
          <div className="flex items-center">
            <span className="text-xs text-red-500">
              {(current - max).toLocaleString()}円オーバー
            </span>
            <div className="h-6 w-6 fill-orange-400 inline-block">
              <Svg slug={"fire"} />
            </div>
          </div>
        )}
      </div>
      <div className="relative h-2 w-full bg-slate-400/30 rounded-full my-1">
        <span
          className="absolute h-full inline-block rounded-full"
          style={barStyle}
        ></span>
      </div>
      <div className="flex justify-between text-sm">
        <div>支出:{current.toLocaleString()}円</div>
        <div>{max.toLocaleString()}円</div>
      </div>
    </>
  );
}

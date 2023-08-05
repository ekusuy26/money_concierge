import { ListContentProps } from "@/interfaces/interface";
import Svg from "../atoms/Svg";

export default function ListContent({ callback }: ListContentProps) {
  return (
    <>
      <button
        className="w-full flex justify-between items-center border-b px-5 py-2 bg-white"
        onClick={() => callback}
      >
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full border p-1 inline-block">
            <Svg slug="food" />
          </div>
          <span className="ms-3">項目名</span>
        </div>
        <div className="">100円</div>
      </button>
    </>
  );
}

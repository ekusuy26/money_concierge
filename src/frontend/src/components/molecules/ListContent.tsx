import { ListContentProps } from "@/interfaces/interface";
import Svg from "@/components/atoms/Svg";
import ListTitle from "@/components/atoms/ListTitle";
import { useState } from "react";

export default function ListContent({
  date,
  finance,
  callback,
}: ListContentProps) {
  const [width, setWidth] = useState("0");
  const [touchStartX, setTouchStartX] = useState(null);
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };
  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    console.log(touchStartX, touchEndX);
  };
  return (
    <>
      {date && <ListTitle title={finance.formatDate} />}
      <div className="flex">
        <button
          className={`w-full flex justify-between items-center border-b px-5 py-2 bg-white`}
          onClick={() => callback()}
          onTouchStart={(e) => {
            handleTouchStart(e);
          }}
          onTouchEnd={(e) => {
            handleTouchEnd(e);
          }}
        >
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full border p-1 inline-block">
              <Svg slug={finance.slug} />
            </div>
            <p>
              <span className="ms-3">{finance.category_name}</span>
              <span className="text-xs ms-3">{finance.item_name}</span>
            </p>
          </div>
          <div
            className={finance.income_flg ? "text-blue-500" : "text-red-500"}
          >
            {Number(finance.amount).toLocaleString()}円
          </div>
        </button>
        <button className={`bg-red-500 text-white whitespace-nowrap`}>
          削除
        </button>
      </div>
    </>
  );
}

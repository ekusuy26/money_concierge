import { useState } from "react";
import Svg from "@/components/atoms/Svg";
import ListTitle from "@/components/atoms/ListTitle";
import axios from "axios";

export default function SwipeToDelete({
  finance,
  date,
  isActive,
  onStart,
  onEnd,
  callback,
}) {
  const [translateX, setTranslateX] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const deleteFinance = (id: number) => {
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/finance/${id}`)
      .then(function (response) {
        response.data && callback();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleTouchStart = (e) => {
    const target = e.target as Element;
    if (target.classList.contains("js-deleteBtn")) {
      deleteFinance(finance.id);
    } else {
      setTranslateX(0);
      setTouchStartX(e.touches[0].clientX);
      onStart();
    }
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    if (touchStartX && currentX - touchStartX < 0) {
      const diff = touchStartX - currentX;
      diff <= 80 && setTranslateX(-diff);
    }
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    touchStartX === touchEndX && onEnd();
  };
  return (
    <>
      {date && <ListTitle title={finance.formatDate} />}
      <div
        className="relative"
        style={{ transform: `translateX(${isActive ? translateX : 0}px)` }}
        onTouchStart={(e) => {
          handleTouchStart(e);
        }}
        onTouchMove={(e) => {
          handleTouchMove(e);
        }}
        onTouchEnd={(e) => {
          handleTouchEnd(e);
        }}
      >
        <button className="w-full bg-white px-5 py-2">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full border inline-block">
              <Svg slug={finance.slug} />
            </div>
            <span className="ms-3">{finance.category_name}</span>
            <span className="text-xs ms-3 me-auto">{finance.item_name}</span>
            <span
              className={finance.income_flg ? "text-blue-500" : "text-red-500"}
            >
              {Number(finance.amount).toLocaleString()}円
            </span>
          </div>
        </button>
        <button className="js-deleteBtn absolute bg-red-500 text-white left-full h-full w-20">
          削除
        </button>
      </div>
    </>
  );
}

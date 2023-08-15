import { useState } from "react";
import Svg from "../atoms/Svg";

export default function SwipeToDelete({ isActive, onStart, onEnd }) {
  const [deleteBtnWidth, setDeleteBtnWidth] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const handleTouchStart = (e) => {
    setDeleteBtnWidth(0);
    setTouchStartX(e.touches[0].clientX);
    onStart();
  };

  const handleTouchMove = (e) => {
    if (touchStartX) {
      const newDeleteBtnWidth = touchStartX - e.touches[0].clientX;
      if (newDeleteBtnWidth <= 80) {
        setDeleteBtnWidth(newDeleteBtnWidth);
      }
    }
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    console.log(touchStartX, touchEndX);
    // onEnd();
  };

  return (
    <>
      <div className="flex h-10">
        <button
          className="bg-white w-full flex items-center"
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
          <div className="flex-none h-8 w-8 rounded-full border p-1">
            <Svg slug={"food"} />
          </div>
          <span className="flex-none">水道、光熱</span>
          <span className="text-xs ms-3">
            ここにcustom項目名が入ああああああああああります
          </span>

          <span className="flex-none">{(1000).toLocaleString()}円</span>
        </button>
        <button
          className="bg-red-500"
          style={{ width: `${isActive ? deleteBtnWidth : 0}px` }}
        >
          b
        </button>
      </div>
    </>
  );
}

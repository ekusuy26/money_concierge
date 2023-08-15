import { useState } from "react";
import Svg from "../atoms/Svg";

export default function SwipeToDelete({ isActive, onStart, onEnd }) {
  const [translateX, setTranslateX] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const handleTouchStart = (e) => {
    setTranslateX(0);
    setTouchStartX(e.touches[0].clientX);
    onStart();
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    if (touchStartX && currentX - touchStartX < 0) {
      const diff = touchStartX - currentX;
      diff <= 80 && setTranslateX(-diff);
    }
  };

  const handleTouchEnd = (e) => {};

  return (
    <>
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
        <button className="w-full bg-white p-3">
          <div className="h-8 w-8 rounded-full border">
            <Svg slug={"food"} />
          </div>
        </button>
        <button className="absolute bg-red-500 left-full h-full w-20">b</button>
      </div>
    </>
  );
}

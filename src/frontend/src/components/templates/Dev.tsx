"use client";

import { useState } from "react";
import SwipeToDelete from "../molecules/SwipeToDelete";

export default function Dev() {
  const [activeSwipeToDelete, setActiveSwipeToDelete] = useState(null);

  const handleSwipeStart = (index) => {
    setActiveSwipeToDelete(index);
  };

  const handleSwipeEnd = () => {
    setActiveSwipeToDelete(null);
  };

  return (
    <>
      <p>this is dev component</p>
      <div className="bg-blue-500 p-5">
        <div className="m-5 bg-amber-500 py-5 overflow-hidden">
          <SwipeToDelete
            isActive={activeSwipeToDelete === 0}
            onStart={() => handleSwipeStart(0)}
            onEnd={handleSwipeEnd}
          />
          <SwipeToDelete
            isActive={activeSwipeToDelete === 1}
            onStart={() => handleSwipeStart(1)}
            onEnd={handleSwipeEnd}
          />
          <SwipeToDelete
            isActive={activeSwipeToDelete === 2}
            onStart={() => handleSwipeStart(2)}
            onEnd={handleSwipeEnd}
          />
        </div>
      </div>
    </>
  );
}

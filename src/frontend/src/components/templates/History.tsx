import { useState } from "react";
import Modal from "../organisms/Modal";

export default function History() {
  const [item, setItem] = useState(0);

  return (
    <>
      <p className="px-5 py-1 text-sm border-b">2023年8月2日(火)</p>
      {[...Array(10)].map((_, i) => (
        <button
          key={i}
          className="w-full flex justify-between items-center border-b px-5 py-2 bg-white"
          onClick={() => setItem(1)}
        >
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-red-500 inline-block"></div>
            <span className="ms-3">項目名</span>
          </div>
          <div className="">100円</div>
        </button>
      ))}
      <p className="px-5 py-1 text-sm border-b">2023年8月1日(月)</p>
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="flex justify-between items-center border-b px-5 py-2 bg-white"
        >
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-red-500 inline-block"></div>
            <span className="ms-3">項目名</span>
          </div>
          <div className="">100円</div>
        </div>
      ))}
      <Modal />
    </>
  );
}

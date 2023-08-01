"use client";

import { useState } from "react";
import { CloseSvg, RegistSvg } from "../atoms/Svg";
import Form from "./Form";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [cls, setIsCls] = useState("animate-slide-top");
  function toggleModal(bool: boolean) {
    if (!bool) {
      setIsCls("animate-slide-bottom");
      setTimeout(function () {
        setIsOpen(bool);
      }, 500);
    } else {
      setIsCls("animate-slide-top");
      setIsOpen(bool);
    }
  }
  return (
    <>
      <button
        className="absolute bottom-16 right-4 h-14 w-14 p-4 rounded-full shadow-md border"
        onClick={() => toggleModal(true)}
      >
        <RegistSvg />
      </button>
      {isOpen && (
        <div className="absolute inset-0 bg-slate-600 bg-opacity-70">
          <div
            className={`${cls} bg-zinc-50 absolute inset-x-0 bottom-0 h-96 rounded-t-lg`}
          >
            <div className="text-right">
              <button
                className="h-10 w-10 m-5"
                onClick={() => toggleModal(false)}
              >
                <CloseSvg />
              </button>
            </div>
            <Form />
          </div>
        </div>
      )}
    </>
  );
}

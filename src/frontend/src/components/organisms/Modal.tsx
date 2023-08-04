"use client";

import { useEffect, useState } from "react";
import { CloseSvg, RegistSvg } from "../atoms/Svg";
import Form from "./Form";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [cls, setIsCls] = useState("animate-slide-top");
  const [message, setMessage] = useState("");

  function toggleModal(bool, message = "") {
    if (!bool) {
      setIsCls("animate-slide-bottom");
      if (message) {
        setTimeout(function () {
          setMessage(message);
        }, 501);
      }
      setTimeout(function () {
        setIsOpen(bool);
      }, 500);
    } else {
      setIsCls("animate-slide-top");
      setIsOpen(bool);
    }
  }

  useEffect(() => {
    if (message !== "") {
      setTimeout(function () {
        setMessage("");
      }, 1500);
    }
  }, [message]);
  return (
    <>
      {message && (
        <div className="absolute inset-0 bg-slate-600 bg-opacity-70 z-50">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            <div className="text-center bg-white rounded-lg p-5 mx-5">
              {message}
            </div>
          </div>
        </div>
      )}
      <button
        className="absolute bottom-16 right-4 h-14 w-14 p-4 rounded-full shadow-md border"
        onClick={() => toggleModal(true)}
      >
        <RegistSvg />
      </button>
      {isOpen && (
        <div className="absolute inset-0 bg-slate-600 bg-opacity-70">
          <div
            className={`${cls} bg-zinc-50 absolute inset-x-0 bottom-0 rounded-t-lg`}
          >
            <div className="text-right">
              <button
                className="h-10 w-10 m-5"
                onClick={() => toggleModal(false)}
              >
                <CloseSvg />
              </button>
            </div>
            <Form closeModal={toggleModal} />
          </div>
        </div>
      )}
    </>
  );
}

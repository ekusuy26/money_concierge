import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Svg from "@/components/atoms/Svg";
import ButtonFixed from "@/components/molecules/ButtonFixed";
import Form from "@/components/organisms/Form";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const closeModal = (message: string) => {
    setMessage(message);
    setIsOpen(false);
  };

  return (
    <>
      {message && (
        <div className="fixed inset-0 bg-slate-600 bg-opacity-70 z-blackOut">
          <div className="flex items-center justify-center h-full">
            <div className="bg-white w-full mx-5 rounded-md p-5">
              <p className="text-center mb-5">{message}</p>
              <div className="flex gap-4">
                <button
                  className="mj-btn bg-slate-800 text-white"
                  onClick={() => setMessage("")}
                >
                  閉じる
                </button>
                <button
                  className="mj-btn border-slate-800 text-slate-800"
                  onClick={() => {
                    setMessage("");
                    setIsOpen(true);
                  }}
                >
                  続けて入力する
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isOpen && (
        <div className="fixed inset-0 bg-slate-600 bg-opacity-70 z-blackOut"></div>
      )}
      <ButtonFixed callback={() => setIsOpen((prev) => !prev)} />
      <CSSTransition
        in={isOpen}
        timeout={500}
        classNames="mj-fade"
        unmountOnExit
      >
        <div className="mj-fade z-modal">
          <div className="text-right">
            <button className="h-10 w-10 m-5" onClick={() => setIsOpen(false)}>
              <Svg slug="close" />
            </button>
          </div>
          <Form callback={closeModal} />
        </div>
      </CSSTransition>
    </>
  );
}

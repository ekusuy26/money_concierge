import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Svg from "@/components/atoms/Svg";
import ButtonFixed from "@/components/molecules/ButtonFixed";
import Form from "@/components/organisms/Form";
import Popup from "./Popup";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const closeModal = (message: string) => {
    setIsOpen(false);
    setTimeout(() => {
      setMessage(message);
    }, 300);
  };

  return (
    <>
      {message && (
        <Popup
          message={message}
          closeFunc={() => setMessage("")}
          customBtnFunc={() => {
            setMessage("");
            setIsOpen(true);
          }}
        />
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

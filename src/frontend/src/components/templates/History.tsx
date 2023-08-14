import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Svg from "@/components/atoms/Svg";
import List from "@/components/organisms/List";
import Modal from "@/components/organisms/Modal";
import Form from "@/components/organisms/Form";
import FormDeleteFinance from "../organisms/FormDeleteFinance";

export default function History() {
  const [finance, setFinance] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const openModal = (finance) => {
    setIsOpen(true);
    setFinance(finance);
  };

  const closeModal = (message: string) => {
    setIsOpen(false);
    setTimeout(() => {
      setMessage(message);
    }, 300);
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
              </div>
            </div>
          </div>
        </div>
      )}
      <List callback={openModal} />
      <CSSTransition
        in={isOpen}
        timeout={500}
        classNames="mj-fadeX"
        unmountOnExit
      >
        <div className="mj-fadeX z-modal">
          <div className="text-right">
            <button className="h-10 w-10 m-5" onClick={() => setIsOpen(false)}>
              <Svg slug="close" />
            </button>
          </div>
          <Form finance={finance} callback={closeModal} />
          <FormDeleteFinance id={finance?.id} callback={closeModal} />
        </div>
      </CSSTransition>
      <Modal />
    </>
  );
}

import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Svg from "@/components/atoms/Svg";
import List from "@/components/organisms/List";
import Modal from "@/components/organisms/Modal";
import Form from "@/components/organisms/Form";

export default function History() {
  const [finance, setFinance] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = (finance) => {
    setIsOpen(true);
    setFinance(finance);
  };
  return (
    <>
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
          <Form finance={finance} callback={() => setIsOpen(false)} />
        </div>
      </CSSTransition>
      <Modal />
    </>
  );
}

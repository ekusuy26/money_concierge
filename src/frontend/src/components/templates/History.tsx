import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Svg from "@/components/atoms/Svg";
import List from "@/components/organisms/List";
import Modal from "@/components/organisms/Modal";
import Form from "@/components/organisms/Form";

export default function History() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <List callback={() => setIsOpen(true)} />
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
          <Form callback={() => setIsOpen(false)} />
        </div>
      </CSSTransition>
      <Modal />
    </>
  );
}

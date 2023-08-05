import { useState } from "react";
import List from "../organisms/List";
import Modal from "../organisms/Modal";
import { CSSTransition } from "react-transition-group";
import Svg from "../atoms/Svg";
import Form from "../organisms/Form";

export default function History() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {[...Array(3)].map((_, i) => (
        <List key={"test" + i} callback={() => setIsOpen(true)} />
      ))}
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
          <Form closeModal={() => setIsOpen(false)} />
        </div>
      </CSSTransition>
      <Modal />
    </>
  );
}

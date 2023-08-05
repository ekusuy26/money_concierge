import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Svg from "@/components/atoms/Svg";
import ButtonFixed from "@/components/molecules/ButtonFixed";
import Form from "@/components/organisms/Form";

export default function Dev() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    console.log("hoge");
  };

  return (
    <>
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

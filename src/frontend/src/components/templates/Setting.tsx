"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { CSSTransition } from "react-transition-group";
import { useEffect, useState } from "react";
import Svg from "../atoms/Svg";
import ListBudget from "../organisms/ListBudget";

export default function Setting() {
  const [isCurrent, setIsCurrent] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const user = session?.user;

  const openModal = (current: string) => {
    setIsOpen(true);
    setIsCurrent(current);
  };

  useEffect(() => {
    !isOpen &&
      setTimeout(() => {
        setIsCurrent("");
      }, 500);
  }, [isOpen]);
  return (
    <>
      <div className="p-5">
        <p>{user?.name ?? "John Doe"}</p>
      </div>
      <div className="flex flex-col divide-y border">
        <button className="px-5 py-3 text-start" onClick={() => openModal("a")}>
          a
        </button>
        <button className="px-5 py-3 text-start" onClick={() => openModal("b")}>
          b
        </button>
        <button className="px-5 py-3 text-start" onClick={() => openModal("c")}>
          c
        </button>
        <button
          className="px-5 py-3 text-start"
          onClick={() => openModal("budget")}
        >
          予算
        </button>
      </div>
      <div className="px-5 mt-5">
        <button
          className="py-3 w-full text-red-500 border border-red-500 rounded-md"
          onClick={() => signOut()}
        >
          サインアウト
        </button>
      </div>
      <CSSTransition
        in={isOpen}
        timeout={500}
        classNames="mj-fadeX"
        unmountOnExit
      >
        <div className="mj-fadeX z-modal overflow-scroll">
          <div>
            {isCurrent === "a" && (
              <p>
                a contents
                <button onClick={() => setIsOpen(false)}>戻る</button>
              </p>
            )}
            {isCurrent === "b" && (
              <p>
                b contents
                <button onClick={() => setIsOpen(false)}>戻る</button>
              </p>
            )}
            {isCurrent === "c" && (
              <p>
                c contents
                <button onClick={() => setIsOpen(false)}>戻る</button>
              </p>
            )}
            {isCurrent === "budget" && (
              <ListBudget
                closeBtn={
                  <button onClick={() => setIsOpen(false)}>戻る</button>
                }
              />
            )}
          </div>
        </div>
      </CSSTransition>
    </>
  );
}

"use client";

import { useState } from "react";
import useSWR, { useSWRConfig } from "swr";
import { fetcher } from "@/Fetcher";
import { CSSTransition } from "react-transition-group";
import { Finance } from "@/interfaces/interface";
import Svg from "@/components/atoms/Svg";
import Load from "@/components/molecules/Load";
import List from "@/components/organisms/List";
import Popup from "@/components/organisms/Popup";
import Modal from "@/components/organisms/Modal";
import Form from "@/components/organisms/Form";
import FormDeleteFinance from "@/components/organisms/FormDeleteFinance";

export default function CashFlow() {
  const [message, setMessage] = useState("");
  const [finance, setFinance] = useState<Finance | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const { mutate } = useSWRConfig();

  const { data, error, isLoading } = useSWR<Finance[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/finance`,
    fetcher
  );

  const closeModal = (message: string) => {
    mutate(`${process.env.NEXT_PUBLIC_API_URL}/finance`);
    setIsOpen(false);
    setTimeout(() => {
      setMessage(message);
    }, 300);
  };

  const openModal = (finance: Finance) => {
    setIsOpen(true);
    setFinance(finance);
  };

  if (error) return <Load status="fail" />;
  if (isLoading) return <Load status="now" />;

  return (
    <>
      {message && <Popup message={message} closeFunc={() => setMessage("")} />}
      {data && (
        <List
          finances={data}
          onListClick={openModal}
          onDelete={() => mutate(`${process.env.NEXT_PUBLIC_API_URL}/finance`)}
        />
      )}
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
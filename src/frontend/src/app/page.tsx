"use client";

import { useState } from "react";
import Home from "@/components/templates/Home";
import Modal from "@/components/organisms/Modal";
import MainMenu from "@/components/organisms/MainMenu";

export default function Page() {
  const [section, setSection] = useState("home");

  return (
    <>
      {section === "home" && <Home />}
      <MainMenu callback={setSection} />
      <Modal />
    </>
  );
}

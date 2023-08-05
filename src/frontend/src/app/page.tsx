"use client";

import { useState } from "react";
import Home from "@/components/templates/Home";
import MainMenu from "@/components/organisms/MainMenu";
import History from "@/components/templates/History";
import Dev from "@/components/templates/Dev";

export default function Page() {
  const [section, setSection] = useState("home");

  return (
    <>
      {section === "home" && <Home />}
      {section === "history" && <History />}
      {section === "dev" && <Dev />}
      <MainMenu callback={setSection} />
    </>
  );
}

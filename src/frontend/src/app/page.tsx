"use client";

import { useState } from "react";
import MainMenu from "@/components/organisms/MainMenu";
import Home from "@/components/templates/Home";
import History from "@/components/templates/History";
import Setting from "@/components/templates/Setting";
import Report from "@/components/templates/Report";
// import Dev from "@/components/templates/Dev";

import { SessionProvider } from "next-auth/react";

export default function Page() {
  const [section, setSection] = useState("home");

  return (
    <>
      <SessionProvider>
        {section === "home" && <Home />}
        {section === "history" && <History />}
        {section === "report" && <Report />}
        {section === "setting" && <Setting />}
        {/* {section === "dev" && <Dev />} */}

        <MainMenu callback={setSection} />
      </SessionProvider>
    </>
  );
}

"use client";

import { useState } from "react";
import ChartSwiper from "@/components/organisms/ChartSwiper";
import SummaryList from "@/components/organisms/SummaryList";

export default function Report() {
  const today = new Date();
  const [year, setYear] = useState<number>(today.getFullYear());
  const [month, setMonth] = useState<number>(today.getMonth() + 1);

  const handleSetDate = (year: number, month: number) => {
    setYear(year);
    setMonth(month);
  };
  return (
    <>
      <ChartSwiper isChange={handleSetDate} />
      <SummaryList year={year} month={month} />
    </>
  );
}

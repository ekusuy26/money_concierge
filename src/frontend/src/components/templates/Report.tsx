"use client";

import useSWR from "swr";
import { fetcher } from "@/Fetcher";
import { useEffect, useState } from "react";
import { List, ReportSWR } from "@/interfaces/interface";
import ChartSwiper from "@/components/organisms/ChartSwiper";
import SummaryList from "@/components/organisms/SummaryList";
import Load from "@/components/molecules/Load";

export default function Report() {
  const [userId, setUserId] = useState("");

  const [payment, setPayment] = useState<number>(0);
  const [list, setList] = useState<List[]>([]);
  const { data, error, isLoading } = useSWR<ReportSWR>(
    userId
      ? `${process.env.NEXT_PUBLIC_API_URL}/finance/summaries/${userId}`
      : null,
    fetcher
  );

  const changeSlider = (activeList, activePayment) => {
    setList(activeList);
    setPayment(activePayment);
  };

  useEffect(() => {
    if (data) {
      setPayment(Object.values(data)[0].payment);
      setList(Object.values(data)[0].list);
    }
  }, [data]);

  useEffect(() => {
    const fetchUserId = async () => {
      const response = await fetch("/api/userId");
      const data = await response.json();
      setUserId(data.userId);
    };
    fetchUserId();
  }, []);

  if (error) return <Load status="fail" />;
  if (isLoading) return <Load status="now" />;
  return (
    <>
      {data && <ChartSwiper data={data} isChange={changeSlider} />}
      <div className="">
        <p>支出</p>
        <p>{payment.toLocaleString()}円</p>
      </div>
      {list && <SummaryList data={list} payment={payment} />}
    </>
  );
}

"use client";

import useSWR, { mutate } from "swr";
import { fetcher } from "@/Fetcher";
import { useEffect, useState } from "react";
import ChartSwiper from "@/components/organisms/ChartSwiper";
import SummaryList from "@/components/organisms/SummaryList";
import Load from "@/components/molecules/Load";

export default function Report() {
  const [list, setList] = useState(null);
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/finance/summary`,
    fetcher
  );

  useEffect(() => {
    data && setList(Object.values(data)[0].list);
  }, [data]);

  if (error) return <Load status="fail" />;
  if (isLoading) return <Load status="now" />;
  return (
    <>
      {data && <ChartSwiper data={data} isChange={setList} />}
      {list && <SummaryList data={list} />}
    </>
  );
}

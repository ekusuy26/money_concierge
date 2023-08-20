"use client";

import useSWR from "swr";
import { fetcher } from "@/Fetcher";

import DoughnutChart from "@/components/molecules/DoughnutChart";
import Modal from "@/components/organisms/Modal";
import Load from "@/components/molecules/Load";

export default function Home() {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/finance/summary`,
    fetcher
  );

  if (error) return <Load status="fail" />;
  if (isLoading) return <Load status="now" />;

  return (
    <>
      <div className="flex flex-col gap-3 p-5">
        <div className="border rounded-lg p-5 shadow bg-white">
          <div className="flex justify-between items-end">
            <p>総資産</p>
            <p className="text-xl font-bold">{(100000).toLocaleString()}円</p>
          </div>
        </div>
        <div className="border rounded-lg p-5 shadow bg-white">
          <div className="mb-2">
            今月の収支<span className="text-sm ms-3">2023/8/1~2023/8/31</span>
          </div>
          <div className="grid grid-rows-3 grid-cols-5 items-end text-right">
            <div className="row-span-3 col-span-2">
              <DoughnutChart
                labels={data.labels}
                colors={data.colors}
                values={data.values}
              />
            </div>
            <div className="">収入</div>
            <div className="col-span-2 text-blue-400">
              {/* {Number(data.income).toLocaleString()}円 */}
            </div>
            <div className="">支出</div>
            <div className="col-span-2 text-red-400">
              {data.payment.toLocaleString()}円
            </div>
            <div className="">収支</div>
            <div
              className={
                "col-span-2 " + (true ? "text-blue-400" : "text-red-400")
              }
            >
              {/* {Math.abs(total).toLocaleString()}円 */}
            </div>
          </div>
        </div>
      </div>
      <Modal />
    </>
  );
}

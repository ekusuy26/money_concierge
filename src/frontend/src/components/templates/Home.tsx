"use client";

import useSWR from "swr";
import { fetcher } from "@/Fetcher";
import { useSession } from "next-auth/react";
import { UserSession } from "@/interfaces/interface";

import DoughnutChart from "@/components/molecules/DoughnutChart";
import Modal from "@/components/organisms/Modal";
import Load from "@/components/molecules/Load";

export default function Home() {
  const { data: session, status } = useSession();
  const user: UserSession | undefined = session?.user;
  const { data, error, isLoading } = useSWR(
    user
      ? `${process.env.NEXT_PUBLIC_API_URL}/finance/summary/${user.id}`
      : null,
    fetcher
  );

  if (error) return <Load status="fail" />;
  if (isLoading) return <Load status="now" />;
  return (
    <>
      {data && (
        <div className="flex flex-col gap-3 p-5">
          <div className="border rounded-lg p-5 shadow bg-white">
            <div className="mb-2">
              今月の収支<span className="text-sm ms-3">2023/8/1~2023/8/31</span>
            </div>
            {Object.keys(data).length !== 0 ? (
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
            ) : (
              <p>対象のデータは存在しません</p>
            )}
          </div>
        </div>
      )}
      <Modal />
    </>
  );
}

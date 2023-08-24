"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "@/Fetcher";
import { Budgets } from "@/interfaces/interface";

import ProgressBar from "@/components/atoms/ProgressBar";
import DoughnutChart from "@/components/molecules/DoughnutChart";
import Card from "@/components/molecules/Card";
import Load from "@/components/molecules/Load";
import Modal from "@/components/organisms/Modal";

export default function Home() {
  const [userId, setUserId] = useState("");
  const { data, error, isLoading } = useSWR(
    userId
      ? `${process.env.NEXT_PUBLIC_API_URL}/finance/summary/${userId}`
      : null,
    fetcher
  );
  const {
    data: budgets,
    error: budgetsError,
    isLoading: budgetsIsLoading,
  } = useSWR<Budgets>(
    userId
      ? `${process.env.NEXT_PUBLIC_API_URL}/category/budget/summary/${userId}`
      : null,
    fetcher
  );

  useEffect(() => {
    const fetchUserId = async () => {
      const response = await fetch("/api/userId");
      const data = await response.json();
      setUserId(data.userId);
    };
    fetchUserId();
  }, []);

  if (error || budgetsError) return <Load status="fail" />;
  if (isLoading || budgetsIsLoading) return <Load status="now" />;

  return (
    <div className="pt-5">
      {data && (
        <Card>
          <div className="py-5">
            <div className="mb-2">
              今月の収支
              <span className="text-sm ms-3">2023/8/1~2023/8/31</span>
            </div>
            {Object.keys(data.summary).length !== 0 ? (
              <div className="grid grid-rows-3 grid-cols-5 items-end text-right">
                <div className="row-span-3 col-span-2">
                  <DoughnutChart
                    labels={data.summary.labels}
                    colors={data.summary.colors}
                    values={data.summary.values}
                  />
                </div>
                <div className="">収入</div>
                <div className="col-span-2 text-blue-400">
                  {Number(data.income).toLocaleString()}円
                </div>
                <div className="">支出</div>
                <div className="col-span-2 text-red-400">
                  {Number(data.payment).toLocaleString()}円
                </div>
                <div className="">収支</div>
                <div
                  className={
                    "col-span-2 " +
                    (data.total > 0 ? "text-blue-400" : "text-red-400")
                  }
                >
                  {Math.abs(data.total).toLocaleString()}円
                </div>
              </div>
            ) : (
              <p>対象のデータは存在しません</p>
            )}
          </div>
        </Card>
      )}
      <Card>
        <div className="flex flex-col divide-y">
          {budgets &&
            budgets.map((budget, _) => (
              <div key={budget.cost_name} className="py-5">
                <ProgressBar
                  percent={budget.cost_percentage}
                  colorCode={budget.variable_flg ? "#0ea5e9" : "#eab308"}
                  title={budget.cost_name}
                  current={Number(budget.cost)}
                  max={Number(budget.budget)}
                />
              </div>
            ))}
        </div>
      </Card>
      <Modal />
    </div>
  );
}

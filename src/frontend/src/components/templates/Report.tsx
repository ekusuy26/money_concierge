"use client";

import Svg from "../atoms/Svg";
import ChartSwiper from "../organisms/ChartSwiper";
import useSWR, { useSWRConfig } from "swr";
import { fetcher } from "@/Fetcher";
import Load from "@/components/molecules/Load";

export default function Report() {
  const {
    data: listData,
    error,
    isLoading,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/finance/summary/list`,
    fetcher
  );
  // const {
  //   data: hogeData,
  //   error: hogeError,
  //   isLoading: hogeIsLoading,
  // } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/finance/summary`, fetcher);

  if (error) return <Load status="fail" />;
  if (isLoading) return <Load status="now" />;
  return (
    <>
      <ChartSwiper />

      <div className="border-t border-b divide-y text-sm">
        {listData &&
          listData.categories.map((line, _) => (
            <div
              key={line.category_id}
              className="flex items-center justify-between px-5 py-2"
            >
              <div className="flex-grow">
                <div className="flex items-center">
                  <div
                    className={`mj-categoryIconWrap ${line.slug} h-8 w-8 rounded-full p-1`}
                  >
                    <Svg slug={line.slug} />
                  </div>
                  <div className={"ms-3" + " bg-" + line.slug}>{line.name}</div>
                  <div className="text-xs">
                    {`( ${Number(
                      ((line.total / listData.total_payment) * 100).toFixed(2)
                    )}% )`}
                  </div>
                </div>
              </div>
              <div className="flex-none text-right">
                {Number(line.total).toLocaleString()}円
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

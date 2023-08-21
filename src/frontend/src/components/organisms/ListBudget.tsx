import useSWR from "swr";
import { fetcher } from "@/Fetcher";
import Load from "@/components/molecules/Load";
import Svg from "../atoms/Svg";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

export default function ListBudget({ closeBtn }) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    data: budgets,
    error,
    isLoading,
  } = useSWR<any[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/category/budget`,
    fetcher
  );
  if (error) return <Load status="fail" />;
  if (isLoading) return <Load status="now" />;
  console.log(budgets);
  return (
    <>
      <div className="flex justify-between p-5">
        {closeBtn}
        <button className="" onClick={() => setIsOpen(true)}>
          設定する
        </button>
      </div>
      <div className="text-center border-y py-5">
        <p>合計支出</p>
        <span className="text-4xl me-3">{(100000).toLocaleString()}</span>
        円/月
      </div>
      {budgets &&
        budgets.map((budget, _) => (
          <div
            key={budget.id}
            className="flex justify-between items-center px-5 py-2 border-b"
          >
            <div className="w-2/3">
              <div className="flex items-center mb-2">
                <div
                  className="h-8 w-8 inline-block"
                  style={{
                    fill: budget.color,
                  }}
                >
                  <Svg slug={budget.slug} />
                </div>
                <span>{budget.name}</span>
              </div>
              <div className="relative h-2 w-full bg-slate-400/30 rounded-full">
                <span
                  className="absolute h-full inline-block rounded-full"
                  style={{
                    width: (budget.ratio > 100 ? 100 : budget.ratio) + "%",
                    backgroundColor: budget.color,
                  }}
                ></span>
              </div>
              <div className="flex justify-between text-xs">
                <p>支出：{Number(budget.total_amount).toLocaleString()}円</p>
                <p>{Number(budget.budget).toLocaleString()}円</p>
              </div>
            </div>
            <div className="w-1/3 text-right">
              <span
                className={`${
                  budget.total_amount - budget.budget > 0
                    ? "text-red-500"
                    : "text-blue-500"
                }`}
              >
                {Math.abs(budget.total_amount - budget.budget).toLocaleString()}
                円
              </span>
            </div>
          </div>
        ))}
      <CSSTransition
        in={isOpen}
        timeout={500}
        classNames="mj-fadeX"
        unmountOnExit
      >
        <div className="mj-fadeX z-modal">
          <div className="text-right">
            <button className="h-10 w-10 m-5" onClick={() => setIsOpen(false)}>
              <Svg slug="close" />
            </button>
          </div>
          <div className="">hoge</div>
        </div>
      </CSSTransition>
    </>
  );
}

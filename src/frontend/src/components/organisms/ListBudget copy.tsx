import useSWR from "swr";
import { fetcher } from "@/Fetcher";
import Load from "@/components/molecules/Load";
import Svg from "../atoms/Svg";
import { CSSTransition } from "react-transition-group";
import { useEffect, useState } from "react";
import ProgressBar from "../atoms/ProgressBar";

export default function ListBudget({ closeBtn }) {
  const [userId, setUserId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const { data, error, isLoading } = useSWR<any[]>(
    userId
      ? `${process.env.NEXT_PUBLIC_API_URL}/category/budget/${userId}`
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

  if (error) return <Load status="fail" />;
  if (isLoading) return <Load status="now" />;
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
        <span className="text-4xl me-3">{data?.total.toLocaleString()}</span>
        円/月
      </div>
      {data &&
        data.budgets.map((budget, _) => (
          <div key={budget.id} className="p-5 border-b">
            <ProgressBar
              key={budget.id}
              percent={budget.ratio}
              colorCode={budget.color}
              title={budget.name}
              current={Number(budget.total_amount)}
              max={Number(budget.budget)}
              slug={budget.slug}
            />
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

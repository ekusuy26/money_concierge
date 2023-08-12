import useSWR from "swr";
import { fetcher } from "@/Fetcher";
import { useState } from "react";
import { ListProps } from "@/interfaces/interface";
import ListContent from "@/components/molecules/ListContent";
import Load from "@/components/molecules/Load";

export default function List({ callback }: ListProps) {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/finance`,
    fetcher
  );

  const [item, setItem] = useState(0);

  const clickedContent = (finance) => {
    callback(finance);
  };

  if (error) return <Load status="fail" />;
  if (isLoading) return <Load status="now" />;
  return (
    <>
      {data.map((finance, i) => (
        <ListContent
          key={finance.id}
          date={data[i - 1]?.formatDate !== finance.formatDate}
          finance={finance}
          callback={() => clickedContent(finance)}
        />
      ))}
    </>
  );
}

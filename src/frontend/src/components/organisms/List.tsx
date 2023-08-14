import useSWR from "swr";
import { fetcher } from "@/Fetcher";
import { Finance, ListProps } from "@/interfaces/interface";
import ListContent from "@/components/molecules/ListContent";
import Load from "@/components/molecules/Load";

export default function List({ callback }: ListProps) {
  const { data, error, isLoading } = useSWR<Finance[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/finance`,
    fetcher
  );

  const clickedContent = (finance: Finance) => {
    callback(finance);
  };

  if (error) return <Load status="fail" />;
  if (isLoading) return <Load status="now" />;
  return (
    <>
      {data &&
        data.map((finance, i) => (
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

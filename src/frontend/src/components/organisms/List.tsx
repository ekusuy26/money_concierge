import { Finance, ListProps } from "@/interfaces/interface";
import ListContent from "@/components/molecules/ListContent";

export default function List({ finances, callback }: ListProps) {
  const clickedContent = (finance: Finance) => {
    callback(finance);
  };
  return (
    <>
      {finances.map((finance, i) => (
        <ListContent
          key={finance.id}
          date={finances[i - 1]?.formatDate !== finance.formatDate}
          finance={finance}
          callback={() => clickedContent(finance)}
        />
      ))}
    </>
  );
}
